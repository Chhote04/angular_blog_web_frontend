import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
  data : any;
  constructor(private b:BlogService) { }

  ngOnInit(): void {
    this.data = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl('')
    })
  }
  register(){
    const formData = new FormData();
    formData.append('title',this.data.get('title')?.value);
    formData.append('description',this.data.get('description')?.value);
    formData.append('image',this.data.get('image')?.value);
    
    // console.log(this.data.value);
    this.b.blog_insert(formData).subscribe((res)=>{
      this.data.reset()
      console.log(res);
    });
  }
  onSelectFile(event:any){
    console.log(event.target.files);
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.data.get('image')?.setValue(file);


    }
    
  }

}
