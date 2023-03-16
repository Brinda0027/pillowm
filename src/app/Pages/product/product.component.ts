import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product:any
  constructor(private hr:HeroService, private router:Router){ 
  this.product=this.hr.getData();
  }
  gotohere(id:any)
    {
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])

  }

}

