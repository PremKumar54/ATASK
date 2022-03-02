import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Data } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  postdata:any

  @Input() user: Data | undefined

  @Output() customerChange: EventEmitter<Data> = new EventEmitter<Data>()

  constructor() {
   }


  ngOnInit(): void {

  }
  
   async post() {
    
    console.log();
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
    this.postdata = await res.json();
      console.log(this.postdata)


  }
  
}

