import { Component, OnInit } from '@angular/core';
import { BlogService } from '../admin/blog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private b:BlogService) { }

  newsData:any
  data:any

  ngOnInit(): void {
    this.b.getData()
    .subscribe(res=>{
      console.log(res);
      this.newsData=res
      this.data = this.newsData.blogall;
      console.log(this.data);   
      
    })
  }

}
