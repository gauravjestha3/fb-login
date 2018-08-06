import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { FbService } from './fb.service';
import { FbRoutingModule } from './/fb-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FbButtonComponent } from './fb-button/fb-button.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1045148568993415")
        },
  
          
      ]
  );
  return config;
}


const routes: Routes = [
  
  {
    path:'frontcomponent',
    component:FrontComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    FbButtonComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    FbRoutingModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [ {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  },FbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
