import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  // @Input() author: string;
  @Input() information: any;
  // // author: string = 'Henry Overholt';
  // @Input() title: string;
  // @Input() description: string;
  // @Input() createdOn: string;
  // @Input() link: string;
  constructor() {}

  ngOnInit(): void {}

  openGithub() {
    window.open(this.information.link, '_blank');
  }
}
