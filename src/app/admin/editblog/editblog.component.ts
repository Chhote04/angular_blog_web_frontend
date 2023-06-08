import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {

  
  id:any;
  viewdata:any;
  viewdata1:any;
  d:any;
  constructor(private router:Router, private activated:ActivatedRoute, private b:BlogService) { }


  ngOnInit(): void {

    this.d = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl('')
    })

    this.id=this.activated.snapshot.paramMap.get('id');
    // console.log(this.id);
    this.b.viewBlog(this.id).subscribe((res)=>{
      // console.log(res);
    this.viewdata=res;
    this.viewdata1=this.viewdata.blog;
    // console.log(this.viewdata1);
    this.d.patchValue({
      title:this.viewdata1.title,
      description:this.viewdata1.description,
      image:this.viewdata1.image
    })
  }) 
}

  edit(){
    // console.log(this.d.value);
    this.b.updateblog(this.d.value,this.id).subscribe((res)=>{
      this.router.navigate(['/admin-display'])
    })
    
  }

}
