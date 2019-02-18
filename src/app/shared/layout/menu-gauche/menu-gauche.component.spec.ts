import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGaucheComponent } from './menu-gauche.component';

describe('MenuGaucheComponent', () => {
  let component: MenuGaucheComponent;
  let fixture: ComponentFixture<MenuGaucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGaucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
