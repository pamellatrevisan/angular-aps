import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemListaComponent } from './ordem-lista.component';

describe('OrdemListaComponent', () => {
  let component: OrdemListaComponent;
  let fixture: ComponentFixture<OrdemListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
