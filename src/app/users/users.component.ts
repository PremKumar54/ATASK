import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { Data } from '../user/data';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData : any;
  selectedUser!: Data;
  
    
  constructor(private service:ApiService) { }

  ngOnInit(){

    this.service.getUsers().subscribe((res)=>{
      this.userData = res;
    })
  }
  
  showDetails(customer:Data) {
    console.log(customer);
    
    this.selectedUser=Object.assign({},customer)
  }

  update(customer:Data) {
    console.log(customer)
    var cust=this.userData.find( (e:any) => e.id==customer.id)
    Object.assign(cust,customer)
    alert("Customer Saved")
  }
}
