import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  
} from 'angular-6-social-login';
import { Router } from '../../../node_modules/@angular/router';
import { FbService } from '../fb.service';


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  item;
  

  constructor(private route:Router,private user:FbService) { }

  ngOnInit() {
    this.item=this.user.getData()
    console.log(this.item);
  }

}
