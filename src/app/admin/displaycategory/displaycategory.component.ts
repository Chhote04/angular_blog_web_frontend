import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-displaycategory',
  templateUrl: './displaycategory.component.html',
  styleUrls: ['./displaycategory.component.css']
})
export class DisplaycategoryComponent implements OnInit {

  constructor(private b:BlogService) { }
  
  newsData:any
  data:any

  ngOnInit(): void {
    this.b.catData()
    .subscribe(res=>{
      // console.log(res);
      this.newsData=res
      this.data=this.newsData.data
      console.log(this.data);
      
    })
  }

}
