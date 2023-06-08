import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  constructor(private router:Router, private b:BlogService) { }

  newsData:any
  data:any

  ngOnInit(): void {
    this.b.getData()
    .subscribe(res=>{
      // console.log(res);
      this.newsData = res
      this.data = this.newsData.blogall
      console.log(this.data);
    })
  }

  deleteblog(id:any){
    this.b.deleteblog(id).subscribe((res)=>{
      // console.log(res);
      this.ngOnInit();
      this.router.navigate(['/admin-display']);
    })
  }

}
