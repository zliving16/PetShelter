import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  _httpService: any;
  constructor(private _http: HttpClient){
   
    }
    getCakes(){
      return this._http.get('/authors');
    }
    getOneCake(id){
      return this._http.get(`/authors/${id}`)
    }
    updateCake(id,alteredAuthor){
      return this._http.put(`/authors/${id}`, alteredAuthor)
    }
    createACake(newCake){
      return this._http.post('/authors', newCake);
    }
    deleteACake(id){
      return this._http.delete(`/authors/${id}`)
    }
    createQuote(id,createQuote){
      return this._http.put(`/authors/quotes/${id}`, createQuote)
    }
    quoteUp(id,quote){
      return this._http.put(`/authors/quotes/voteup/${id}`,quote)
    }
    quoteDown(id,quote){
      return this._http.put(`/authors/quotes/votedown/${id}`,quote)
    }
    destroyQuote(id,quote){
      return this._http.put(`/authors/quotes/${id}/${quote}`,quote)
    }
  
   
}