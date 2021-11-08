import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/images/banners/img-01.jpg',
    'assets/images/banners/img-02.jpg',
    'assets/images/banners/img-03.jpg',
    'assets/images/banners/img-04.jpg',
    'assets/images/banners/img-05.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
