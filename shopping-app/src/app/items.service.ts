import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  _aniItemsUrl = 'http://localhost:3001/api/anime';

  constructor(private http: HttpClient) { }

  getAniItems() {
    return this.http.get<any>(this._aniItemsUrl);
  }
}
