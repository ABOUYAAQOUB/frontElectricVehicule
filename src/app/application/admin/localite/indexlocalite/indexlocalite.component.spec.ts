import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexlocaliteComponent } from './indexlocalite.component';

describe('IndexlocaliteComponent', () => {
  let component: IndexlocaliteComponent;
  let fixture: ComponentFixture<IndexlocaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexlocaliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexlocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
