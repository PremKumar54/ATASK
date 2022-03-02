import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumData : any =[];
  i:any
  constructor(private service:ApiService) { }
  

  
    

  ngOnInit(): void {
    this.service.getAlbums().subscribe((res)=>{
      this.albumData = res
     })
      console.log(this.albumData)
  }
  

   
}
