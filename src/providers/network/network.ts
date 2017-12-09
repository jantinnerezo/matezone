import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class NetworkProvider {
  
  server_address = 'localhost';
  api = 'http://localhost/matezone/api/';

  constructor(private http: Http) {
   
  }

}
