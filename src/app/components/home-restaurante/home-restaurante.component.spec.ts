import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRestauranteComponent } from './home-restaurante.component';

describe('HomeRestauranteComponent', () => {
  let component: HomeRestauranteComponent;
  let fixture: ComponentFixture<HomeRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRestauranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
