import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../admin/blog.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {

  constructor(private router:Router, private activated:ActivatedRoute, private b:BlogService) { }
  id:any;
  viewdata:any;
  viewdata1:any;
  ngOnInit(): void {
    this.id=this.activated.snapshot.paramMap.get('id');
    // console.log(this.id);
    this.b.viewBlog(this.id).subscribe((res)=>{
      // console.log(res);
      this.viewdata=res;
      this.viewdata1=this.viewdata.blog;
      console.log(this.viewdata1);
      
      
    })
    
  }

}
