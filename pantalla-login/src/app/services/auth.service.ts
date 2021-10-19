import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpDto } from '../model/dto/signUp.dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignUpResponse } from '../model/interface/signUp.interface';

const AUTH_BASE_URL = 'auth'
const DEFAULT_HEADERS = {

  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authBaseUrl = `${environment.apiBaseUrl}/${AUTH_BASE_URL}`
  constructor(private https: HttpClient) { }

  
  register(SignUpDto: SignUpDto):Observable<SignUpResponse>{
    let requestUrl = `${environment.apiBaseUrl}/${AUTH_BASE_URL}/signup`
    return this.https.post<SignUpResponse>(requestUrl, SignUpDto, DEFAULT_HEADERS);
  }
}
