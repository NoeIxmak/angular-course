import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http'
import { ResponseModel } from '../model/response.model'
import { map } from 'rxjs';
import { Login } from '../model/login.model'

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  Url = environment.URL_Peticiones + "Peticiones/"

  constructor(private httpClient: HttpClient) { }

  public GetDatos(valor: string) {
    
    return this.httpClient.get<ResponseModel>(this.Url + "PeticionesGet/" + valor).pipe(map(data => data));
  }

  public ValidarUsuario(usuario: Login) {
    return this.httpClient.post<ResponseModel>(this.Url + "PeticionesPost", usuario).pipe(map(data => data));
  }

  public CambiarContraseña(usuario: Login) {
    return this.httpClient.put<ResponseModel>(this.Url + "PeticionPuts", usuario);
  }

}
