import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumData : any =[];
  id:any
  constructor(private service:ApiService,private route:ActivatedRoute) { }
  

  
    

  ngOnInit(): void {
   let id = this.route.snapshot.params['id'];
    this.service.getAlbums(id).subscribe((res)=>{
      this.albumData = res
      console.log(res);
      console.log(this.id);

     })
  }
  

   
}
