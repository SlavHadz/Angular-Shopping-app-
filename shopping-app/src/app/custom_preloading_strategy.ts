import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';


export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
      return route.data && route.data.preload ? load() : of(null);
    }
  }
