import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraestruturaComponent } from './infraestrutura.component';

describe('InfraestruturaComponent', () => {
  let component: InfraestruturaComponent;
  let fixture: ComponentFixture<InfraestruturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraestruturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraestruturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
