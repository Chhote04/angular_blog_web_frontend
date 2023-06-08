import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../admin/blog.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data:any;
  constructor(private b:BlogService, private router:Router) { }

  ngOnInit(): void {
    this.data = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirm_password: new FormControl('')
    })
  }
  
  register(){
    console.log(this.data.value);
    this.b.user_register(this.data.value).subscribe((res)=>{
      console.log(res);
      this.data.reset()
      this.router.navigate(['/login']);
    })
  }

}
