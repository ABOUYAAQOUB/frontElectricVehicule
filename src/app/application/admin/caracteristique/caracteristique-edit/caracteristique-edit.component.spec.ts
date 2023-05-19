import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiqueEditComponent } from './caracteristique-edit.component';

describe('CaracteristiqueEditComponent', () => {
  let component: CaracteristiqueEditComponent;
  let fixture: ComponentFixture<CaracteristiqueEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristiqueEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristiqueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
