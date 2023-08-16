import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Git, SearchResponse } from '../Interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Git[] = [];

  private _tagsHistory:  string[] = [];
  private apiKey: string = 'iI1a98HRvOjay3YnJp1HyrBwp8suqs7Y';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag)=>oldTag!==tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();

  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  public searchTag(tag:string): void{
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)


    // Esto no es una promesa esto es un observable.Es un objeto el cual a lo largo del tiempo emite valores
    this.http.get<SearchResponse>(`${this.serviceUrl}/search?`,{params})
    //Este es un observador de la respuesta
    .subscribe((resp) =>{
      this.gifList = resp.data;
      // console.log({gifs: this.gifList});
    });



    // this._tagsHistory.unshift(tag);

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=iI1a98HRvOjay3YnJp1HyrBwp8suqs7Y&q=valoran&limit=10')
    // .then(resp => resp.json())
    // .then(data => console.log(data))
  }

}
