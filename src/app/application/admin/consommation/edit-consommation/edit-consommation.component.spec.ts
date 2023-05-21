import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsommationComponent } from './edit-consommation.component';

describe('EditConsommationComponent', () => {
  let component: EditConsommationComponent;
  let fixture: ComponentFixture<EditConsommationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConsommationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditConsommationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
