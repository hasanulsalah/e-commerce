import { Component, OnInit } from '@angular/core';
import carouselImages from '../../assets/carousel-images.json';
// import itemListing1 from '../../assets/item-lisiting1.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public carouselData: any;
  public itemListingData1: any;
  constructor() { }

 
  
  ngOnInit() {
    this.carouselData = carouselImages.images;
    // this.itemListingData1 = itemListing1.items;
    
  }

}
