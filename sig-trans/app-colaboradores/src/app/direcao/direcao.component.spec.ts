import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecaoComponent } from './direcao.component';

describe('DirecaoComponent', () => {
  let component: DirecaoComponent;
  let fixture: ComponentFixture<DirecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
