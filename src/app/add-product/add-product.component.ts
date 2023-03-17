import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit, OnDestroy {

  obj:any={
    prod:'',
    cat:''
  };
  product!:string;
  category!: string;
  subscription!: Subscription;
  constructor(private router : Router, private dataService:DataService) { }

  ngOnInit(): void {

    this.subscription = this.dataService.currentCategory.subscribe(category => this.category = category)

    this.subscription = this.dataService.currentProd.subscribe(product => this.product = product);
       
    this.obj.prod = this.product,
    this.obj.cat = this.category
  }

  goToCategory(){
    this.dataService.changeProd(this.product);
    this.router.navigateByUrl('/category');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async  addProduct(x:any) {
    const cat=this.category;
    this.obj={
      x,
      cat
    }
    console.log("Le produit est : ",this.obj);
    await this.annulForm();
  }

  annulForm(){
    this.product='';
    this.category='';
  }

}
