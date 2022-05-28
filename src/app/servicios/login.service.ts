import { AppEndPoints } from './../endpoints.component';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams} from "@angular/common/http"



let token = JSON.parse(<string>localStorage?.getItem('login') || '{}')['id_token']
const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`})} 

@Injectable({
  providedIn: 'root'
})

export class LoginService{



  constructor(private http: HttpClient) {

  }

    login(email:string, password:string){
      let endpoint=AppEndPoints.ENDPOINTLOGIN
      let body = new HttpParams()
      .set('email',email)
      .set('password',password)
      console.log(token)
        return this.http.post(endpoint, body);
    }



    }


