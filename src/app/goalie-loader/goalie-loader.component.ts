import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goalie-loader',
  templateUrl: './goalie-loader.component.html',
  styleUrls: ['./goalie-loader.component.css'],
})
export class GoalieLoaderComponent implements OnInit {
  information: any = {
    author: 'Henry Overholt',
    title: 'Goalie Loader',
    description: 'Tim Howard vs Belgium, in Loader form',
    createdOn: 'October 26th, 2020',
    link:
      'https://github.com/Henry-Overholt/The-Loader-Lab/tree/main/src/app/goalie-loader',
  };
  constructor() {}

  ngOnInit(): void {}
}
