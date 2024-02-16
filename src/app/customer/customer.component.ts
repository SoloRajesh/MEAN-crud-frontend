import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  customerArr: any = [];
  customerId = '';
  name: string = '';
  address: string = '';
  phone: string = '';

  constructor(private http: HttpClient) {
    this.getCustomers();
    console.log(this.customerArr);
  }

  getCustomers() {
    this.http
      .get('http://localhost:5000/customers')
      .subscribe((customers: any) => {
        this.customerArr = customers;
      });
  }
  setUpdate(data: any) {
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;
    this.customerId = data._id;
  }
  UpdateRecords() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };
    this.http
      .patch(
        'http://localhost:5000/customers' + '/' + this.customerId,
        bodyData
      )
      .subscribe((data) => {
        alert('Customer Updated...');
        this.name = '';
        this.address = '';
        this.phone = '';
        this.customerId='';
        this.getCustomers();
      });
  }
  setDelete(data: any) {
    this.http
      .delete('http://localhost:5000/customers' + '/' + data._id)
      .subscribe((data: any) => {
        alert('Customer Deletedddd');
        this.getCustomers();
      });
  }
  save() {
    if (this.customerId == '') {
      this.register();
    } else {
      this.UpdateRecords();
    }
  }
  register() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };
    this.http
      .post('http://localhost:5000/customer/create', bodyData)
      .subscribe((data: any) => {
        alert('Customer Registered Successfully');
        this.name = '';
        this.address = '';
        this.phone = '';
        this.getCustomers();
      });
  }
}
