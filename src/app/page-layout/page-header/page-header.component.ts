import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {

  userName = localStorage.getItem("username");
  
  constructor(private massage:NzMessageService, private router: Router){}

  cancel(): void {
    this.massage.info('logout cancel');
  }

  confirm(): void {
    this.massage.info('logout confirm');
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
