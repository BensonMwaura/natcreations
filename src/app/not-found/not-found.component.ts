import { Component, OnInit } from '@angular/core';
import { SeoService } from '../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Sorry: Page Not Found',
      description: 'Please check if you entered the correct address!',
      image: 'https://natcreo-390e9.firebaseapp.com/assets/img/Nature.png'
    });
  }

}
