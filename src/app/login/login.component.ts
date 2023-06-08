import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../admin/blog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any
  constructor(private b:BlogService, private router:Router) { }

  ngOnInit(): void {
    this.data = new FormGroup({
     email: new FormControl(''),
     password: new FormControl(''),
     
    })
  }
  login(){
    // console.log(this.data.value);
    this.b.verify_login(this.data.value).subscribe((res)=>{
      console.log(res);
      localStorage.setItem('token',res.token)
      
      this.data.reset()
      this.router.navigate(['/admin-dashboard'])
    })

    
  }

}
