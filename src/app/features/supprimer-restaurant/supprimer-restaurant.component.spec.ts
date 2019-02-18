import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerRestaurantComponent } from './supprimer-restaurant.component';

describe('SupprimerRestaurantComponent', () => {
  let component: SupprimerRestaurantComponent;
  let fixture: ComponentFixture<SupprimerRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
