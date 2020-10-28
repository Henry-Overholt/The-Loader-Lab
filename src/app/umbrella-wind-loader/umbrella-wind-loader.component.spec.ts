import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbrellaWindLoaderComponent } from './umbrella-wind-loader.component';

describe('UmbrellaWindLoaderComponent', () => {
  let component: UmbrellaWindLoaderComponent;
  let fixture: ComponentFixture<UmbrellaWindLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmbrellaWindLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmbrellaWindLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
