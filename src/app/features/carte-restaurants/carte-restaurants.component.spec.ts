import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteRestaurantsComponent } from './carte-restaurants.component';

describe('CarteRestaurantsComponent', () => {
  let component: CarteRestaurantsComponent;
  let fixture: ComponentFixture<CarteRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
