import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Iproduct} from  '../iproduct';

import {ProductServiceService} from '../product-service.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers : [ProductServiceService]
})
export class ProductDetailComponent implements OnInit {

  products:Iproduct[];
  constructor(private __route:Router,
              private __productService: ProductServiceService)
  { }

  ngOnInit() {
    this.__productService.getProducts().subscribe(data=>{this.products=data;});


  }


  goBackToProducts():void{

    this.__route.navigate(['/products']);

  }

}
