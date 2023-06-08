import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // newsapi for testing
  // url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-07-20&sortBy=publishedAt&apiKey=42e13848990e422caeefa6a466c2a884'

  // url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-07-20&sortBy=publishedAt&apiKey=42e13848990e422caeefa6a466c2a884'
  
  // my laravel api of blog project
  url = 'http://127.0.0.1:8000/api/';

  // url2 = 'http://127.0.0.1:8000/api/displayall';

  constructor(private http: HttpClient, private router:Router) { }

  getData(){
    return this.http.get(this.url+'getall');
  }
  catData(){
    return this.http.get(this.url+'displayall');
  }
  blog_insert(data:any){
    // console.log(data);
    return this.http.post(this.url+"blog/new",data)
    
  }
  viewBlog(id:any){
    return this.http.get(this.url+"blog/show/"+id)
  }

  updateblog(data:any,id:any){
    return this.http.put(this.url+'blog/update/'+id,data)
  }

  deleteblog(id:any){
    // console.log(id);    
    return this.http.delete(this.url+'blog/delete/'+id)
  }

  user_register(register:any){
    return this.http.post<any>(this.url+"register",register)
  }

  verify_login(data:any){
    return this.http.post<any>(this.url+"login",data)
  }
   
  loggedin(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/']);

  }

  



  

  

}
