import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.css']
})
export class ItemListingComponent implements OnInit {
  @Input() data: any;
  public cardData: any;
  constructor() { }

  ngOnInit() {
  }

}
