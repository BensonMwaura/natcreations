import { Component, OnInit } from '@angular/core';
import { SeoService } from '../core/services/seo.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Products',
      description: 'Buy our custom designed products & accesories',
      image: 'https://natcreo-390e9.firebaseapp.com/assets/img/Nature.png'
    });
  }

}
