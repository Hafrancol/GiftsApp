import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Data, IGiftResponse } from '../interfaces/interfaces';

const API_KEY: string = 'v8PxhTvrjFfjU96MLYbZm7xVhOWIk3ul';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {


  private _taskHistory: string[] = [];

  private _giftsData: Data[] = []



  constructor( private http: HttpClient) {

    if(!localStorage.getItem('taksHistory')) return;
    this._taskHistory= JSON.parse(localStorage.getItem('taksHistory')!)
    this.addTag(this._taskHistory[0])
   }


  get taskHistory(): string[]{
    return [...this._taskHistory]
  }

  get giftsData(): Data[]{
    return this._giftsData;
  }

  private organizedTag(tag: string): void{
    const tag_: string = tag.toString();

    if(this.taskHistory.includes(tag_)){
      this._taskHistory = this._taskHistory.filter((task)=> {
        return task !== tag_;
      });
    };

    this._taskHistory.unshift(tag_)
    this._taskHistory = this.taskHistory.splice(0,10);
    localStorage.setItem('taksHistory', JSON.stringify(this._taskHistory))
  }


  public async addTag(tag: string){
    this.organizedTag(tag);

    const queryParams = new HttpParams()
    .set('api_key', 'v8PxhTvrjFfjU96MLYbZm7xVhOWIk3ul')
    .set('q', tag)
    .set('limit', 10);
    this.http.get<IGiftResponse>('https://api.giphy.com/v1/gifs/search', {params: queryParams})
    .subscribe(response => this._giftsData = response.data);


  }



}
