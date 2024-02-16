import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/shared/service/database.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent{
  listOfData: any[] =[];

  constructor(private database: DatabaseService,private router: Router, private message:NzMessageService){}

  ngOnInit(){
    this.loadData()
  }
  
  loadData(){
    this.database.getItems().subscribe((result)=>{
      this.listOfData = result ;
    })
  }

  updateItem(id:any,data:any){
   this.router.navigate(['/login/page/add-customer'],{state:{data}});
  }

  deleteItem(id:any){
    this.database.deleteItem(id).subscribe(()=>{
      this.message.create('success',"Customer deleted successfully")
      this.loadData();
    })
  }
}
