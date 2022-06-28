import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGIFResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private servicioURL : string = 'https://api.giphy.com/v1/gifs'
  private _historial : string [] = []
  private _apiKEY = "sKV5QWoHtdhaJctRKwAZfRDhBrUmcOPS"

  public resultados : Gif [] = []

  get historial(){
    return [...this._historial];
  }

  constructor( private http: HttpClient) { 

      this._historial = JSON.parse(localStorage.getItem('historial')!) || []
      this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []

  }

  buscarGifs (query : string) : void{
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)){ //Si ya lo incluye, no lo agrego
      this._historial.unshift(query) //Agrego
      this._historial = this._historial.slice(0,10) //Me quedo con los primeros 10
      localStorage.setItem('historial', JSON.stringify(this._historial))

    }

    const params = 
            new HttpParams().set('api_key',this._apiKEY)
                            .set('limit',10)
                            .set('q',query);

    this.http.get<SearchGIFResponse>(`${this.servicioURL}/search` , {params})
      .subscribe ( (resp) => {
        console.log(resp.data)
        this.resultados = resp.data
        localStorage.setItem('resultados',JSON.stringify(this.resultados))
      })

  }

}
