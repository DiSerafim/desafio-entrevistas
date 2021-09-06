import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionalComponent } from './operacional.component';

describe('OperacionalComponent', () => {
  let component: OperacionalComponent;
  let fixture: ComponentFixture<OperacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
