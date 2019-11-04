import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  public customers;
  constructor(private authService: AuthService,private router : Router) { }

  ngOnInit() {
    this.authService
    .displayCustomers()
       .subscribe((res)=>{ 
        this.customers = res.json();   
      console.log('response is ',this.customers);

  },(error) => {
      console.log('error is ', error)
  })
  }

}
