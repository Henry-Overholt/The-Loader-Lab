import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLoadersComponent } from './all-loaders.component';

describe('AllLoadersComponent', () => {
  let component: AllLoadersComponent;
  let fixture: ComponentFixture<AllLoadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLoadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLoadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
