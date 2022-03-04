import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  student:any
  constructor(private service:ApiService, private route:ActivatedRoute) { }


  ngOnInit(): void {
    
    let id = this.route.snapshot.params['id'];
   this.service.getPost().subscribe((res:any)=>{
    this.student = res.filter ((el:any) => el.userId == id);
      console.log(res);
      console.log(id);
    })
    
  }
  
}
