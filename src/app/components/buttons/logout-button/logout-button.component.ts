import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  logout():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
