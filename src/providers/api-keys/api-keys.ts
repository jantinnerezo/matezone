import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiKeysProvider {

  
  signup_key = '$2y$10$KcL0mdcUx6MSVUf.IlBwROblXa1tptVHJFdgsrCsR.TcDIwtV.S1G';
  check_username_key = '$2y$10$BwUL7pAPNMDMD4xdGf1uTeuPn77cT8Q2LoT2kBE9/0KJ2sqxr4tuy';
  check_email_key = '$2y$10$L4yvo5HByCi6/gMZfLuRqOKVXTmbApwm6DmJ7I8mCtFvKMu/jaIJO';

  constructor(private http: Http) {
    
  }

}
