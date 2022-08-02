import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private route: Router,
    private authService: SocialAuthService) { }


  ngOnInit(): void {
    if(localStorage.getItem('tokenId')!==null){
    }
    else{
      this.route.navigateByUrl('login');
    }
   }

  logout() {
    localStorage.removeItem('tokenId');

    localStorage.clear(); 
    // console.log('token removed');

    this.route.navigateByUrl('login');
    // console.log('redirected to login');

    this.authService.signOut();

  }

}
