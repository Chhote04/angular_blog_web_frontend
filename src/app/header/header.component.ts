import { Component, OnInit } from '@angular/core';
import { BlogService } from '../admin/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public b:BlogService) { }

  ngOnInit(): void {
  }

}
