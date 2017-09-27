import { Component, OnInit } from '@angular/core';
import { Iproduct} from  '../iproduct';
import {ProductServiceService} from '../product-service.service';
import {Router,ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers : [ProductServiceService]
})
export class ProductListComponent implements OnInit {

  imgWidth:string='50';
  filterList :string = '';
  products : Iproduct[];
  pageTitle:string='Product_List';
  showImage : boolean = false;
  toggleImg():void{
    this.showImage=!this.showImage;
  }

  constructor(private __productService: ProductServiceService,
              private __route:Router) { }

  ngOnInit() {
    this.__productService.getProducts().subscribe(data=>{this.products=data;});

  }

  goBackToProducts():void{

    this.__route.navigate(['/products']);

  }

  eventReceive(msg:string):void {
    this.pageTitle ="Product with "+ msg + " got clicked!!";
    alert(msg);
  }

}
