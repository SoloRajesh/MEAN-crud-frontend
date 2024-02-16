import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DatabaseService } from 'src/app/shared/service/database.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  myForm: FormGroup;
  History: any;

  constructor(
    private fb: FormBuilder,
    private database: DatabaseService,
    private router: Router,
    private message: NzMessageService
  ) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  ngOnInit() {
    if (history.state && history.state.data) {
      this.myForm.setValue({
        name: history.state.data.name,
        address: history.state.data.address,
        phone: history.state.data.phone,
      });
    }
  }
  submitForm() {
    if (this.myForm.valid && !history.state?.data) {
      this.database.createItem(this.myForm.value).subscribe((res) => {
        console.log(res);
        this.message.create('success', `Customer Registered Successfully`);
        this.router.navigate(['/login/page/customer']);
      });
    } else if (this.myForm.valid && history.state?.data) {
      this.database
        .updateItem(history.state.data._id, this.myForm.value)
        .subscribe(() => {
          this.message.create('success', `Customer update Successfully`);
          this.router.navigate(['/customer']);
        });
    } else {
      Object.values(this.myForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  resetForm(e: any) {
    e.preventDefault();
    this.myForm.reset();
  }
}
