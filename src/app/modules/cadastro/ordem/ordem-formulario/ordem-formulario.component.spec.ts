import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemFormularioComponent } from './ordem-formulario.component';

describe('OrdemFormularioComponent', () => {
  let component: OrdemFormularioComponent;
  let fixture: ComponentFixture<OrdemFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
