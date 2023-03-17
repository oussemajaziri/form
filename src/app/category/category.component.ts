import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  category!:string;
  subscription!: Subscription;

  constructor(private router: Router, private dataService:DataService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentCategory.subscribe(category => this.category = category);
  }

  back() {
    this.dataService.changeCategory(this.category);
    this.router.navigateByUrl('/');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
