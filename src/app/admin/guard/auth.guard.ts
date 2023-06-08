import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../blog.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private b:BlogService, private router:Router){}
  canActivate(){
    if(this.b.loggedin()){
      return true
    }else{
      this.router.navigate(['/login']);
      return false
    }
  }
  
 //ng g g admin/guard/auth
}
