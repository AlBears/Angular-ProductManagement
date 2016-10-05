import { Injectable } from '@angular/core'
import { ICartLine } from './cartLine'
import { CARTLINES } from './cartLines'
import { IProduct } from '../products/product'

@Injectable()
export class CartService{
  add(product: IProduct): void {
      let cartLine: ICartLine = CARTLINES.find(c => c.product.id === product.id);
      if (cartLine === undefined){
          cartLine = { product: product, count: 1};
          CARTLINES.push(cartLine);
      } else {
          cartLine.count++;
      }
  }

  remove(cartLine: ICartLine){
      var index = CARTLINES.indexOf(cartLine, 0);

      if(index > -1)
      {
          CARTLINES.splice(index, 1);
      }
  } 
  list():ICartLine[]{
      return CARTLINES;
  }
}

