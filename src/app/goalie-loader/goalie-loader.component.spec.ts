import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalieLoaderComponent } from './goalie-loader.component';

describe('GoalieLoaderComponent', () => {
  let component: GoalieLoaderComponent;
  let fixture: ComponentFixture<GoalieLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalieLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalieLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
