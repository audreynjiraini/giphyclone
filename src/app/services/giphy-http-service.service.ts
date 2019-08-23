import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyHttpServiceService {

  constructor(private http:HttpClient) { }

  searchGiphies(searchTerm: string) {
    console.log(searchTerm);
    let searchEndpoint = "api.giphy.com/v1/gifs/search" + environment.GIPHYAPIKEY;
    searchEndpoint += "&q=" + searchTerm;

    let promise = new Promise((resolve, reject)=>{
      this.http.get(searchEndpoint).toPromise().then(
        (results)=>{
          console.log(results);
          resolve()
        },
        (error)=>{
          console.log(error)
          reject()
        }
        )
    })
    return promise;
  }
}
