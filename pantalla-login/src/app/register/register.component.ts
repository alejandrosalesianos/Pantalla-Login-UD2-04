import { Component, OnInit } from '@angular/core';
import { SignUpDto } from '../model/dto/signUp.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  signUpDto = new SignUpDto();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  doSignUp(){
  this.authService.register(this.signUpDto).subscribe(SignUpResult => {
    alert(`Que bien te has registrado toma tu token: ${SignUpResult.token}`)
  })
}

}
