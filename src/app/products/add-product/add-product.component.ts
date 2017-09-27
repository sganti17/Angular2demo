import { Component, OnInit } from '@angular/core';
import { Iproduct} from  '../iproduct';
import {Router} from '@angular/router';
import {ProductServiceService} from '../product-service.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers : [ProductServiceService]
})
export class AddProductComponent implements OnInit {

  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;


  constructor(private __productService: ProductServiceService,
              private __route:Router) { }

  ngOnInit() {



  }

  goBackToProducts():void{

    this.__route.navigate(['/products']);

  }
  register() {

    console.log("inside register");
    const product = {
      productId: this.productId,
      productName: this.productName,
      productCode: this.productCode,
      releaseDate: this.releaseDate,
      description: this.description,
      price: this.price,
      starRating: this.starRating,
      imageUrl: this.imageUrl,

    }
    console.log(product);


    this.__productService.create(product).subscribe(data => {
      //console.log(data.error);
      //console.log(data.msg);
      console.log(data);

      if (data.success) {
        console.log("Registered")
        this.__route.navigate(['/products/:pId']);
      } else {
        console.log("Registration Unsuccessful")
        this.__route.navigate(['/add-products']);
      }
    });
  }


}
