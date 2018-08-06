import { Component, OnInit } from '@angular/core';

import {
  AuthService,
  FacebookLoginProvider,
  
} from 'angular-6-social-login';
import { RouterModule, Router, RouterOutlet } from '@angular/router'
import { FbService } from '../fb.service';

@Component({
  selector: 'app-fb-button',
  templateUrl: './fb-button.component.html',
  styleUrls: ['./fb-button.component.css']
})
export class FbButtonComponent implements OnInit {

  constructor( private socialAuthService: AuthService,private route:Router,private user:FbService ) {}
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
   
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.user.check(userData)
   this.route.navigate(['/frontcomponent'])
            
      }
    );
  }
  ngOnInit() {
  }

}
