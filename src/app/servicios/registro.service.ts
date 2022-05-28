import { DatosService } from './datos.service';
import { AppEndPoints } from './../endpoints.component';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http"
import { BehaviorSubject, map, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class RegistroService{

  private loginBehaviourSubject: BehaviorSubject<any>;
  public login: Observable<any>;

  constructor(private http: HttpClient) {
    this.loginBehaviourSubject = new BehaviorSubject<any> (JSON.parse(<string>localStorage?.getItem('login')));
    this.login = this.loginBehaviourSubject.asObservable();
  }

    registro(name:string, email:string, password:string){
      let endpoint=AppEndPoints.ENDPOINTREGISTRO  //Usammos la API de registro
      let body = new HttpParams() //Usamos HttpParams y le mandamos los parametros del registro
      .set('name',name)
      .set('email',email)
      .set('password',password)
        return this.http.post(endpoint, body).pipe(map(
          
          respuestaback =>{
            this.loginBehaviourSubject.next(respuestaback)
            let value = JSON.stringify(respuestaback);
            localStorage.setItem('login',value);
            localStorage.setItem('nombre', name);

          }));;
    }

}

