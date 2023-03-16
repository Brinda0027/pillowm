import { Injectable } from '@angular/core';
import { product } from 'src/assets/data/data';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getData(){
    return product
  }
}
