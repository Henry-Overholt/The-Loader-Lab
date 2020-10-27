import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  openGithub() {
    let url = 'https://github.com/Henry-Overholt/The-Loader-Lab';
    window.open(url, '_blank');
  }
}
