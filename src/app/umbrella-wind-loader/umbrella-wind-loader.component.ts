import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-umbrella-wind-loader',
  templateUrl: './umbrella-wind-loader.component.html',
  styleUrls: ['./umbrella-wind-loader.component.css'],
})
export class UmbrellaWindLoaderComponent implements OnInit {
  information: any = {
    author: 'Henry Overholt',
    title: 'Umbrella in the Wind Loader',
    description: 'There Goes my Umbrella-ella-ella',
    createdOn: 'October 27th, 2020',
    link:
      'https://github.com/Henry-Overholt/The-Loader-Lab/tree/main/src/app/goalie-loader',
  };
  constructor() {}

  ngOnInit(): void {}
}
