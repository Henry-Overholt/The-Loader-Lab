import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-all-loaders',
  templateUrl: './all-loaders.component.html',
  styleUrls: ['./all-loaders.component.css'],
})
export class AllLoadersComponent implements OnInit {
  loaders = document.getElementsByClassName('loader');
  constructor() {}

  ngOnInit(): void {}
  handleFitlerForm(form: NgForm): void {
    let filter = form.value.filter;
    let matchCritera = this.loaders;
    console.log(filter);
  }
}
