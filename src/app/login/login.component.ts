import { Component, OnInit } from '@angular/core';

import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user!: SocialUser;
  loggedIn!: boolean;

  private accessToken = '';

  constructor(private authService: SocialAuthService,
    private router:Router) {}

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
  }


  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      console.log(this.user);
      if(this.user?.idToken != null)
      {
        console.log(this.user.idToken);
        // localStorage.setItem('header',this.user.idToken);
        this.router.navigateByUrl('dash');
      }
    });  }

}
