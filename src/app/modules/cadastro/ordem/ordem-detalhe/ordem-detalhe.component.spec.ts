import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemDetalheComponent } from './ordem-detalhe.component';

describe('OrdemDetalheComponent', () => {
  let component: OrdemDetalheComponent;
  let fixture: ComponentFixture<OrdemDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
