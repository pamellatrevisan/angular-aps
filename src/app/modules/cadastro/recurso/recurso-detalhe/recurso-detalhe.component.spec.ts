import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoDetalheComponent } from './recurso-detalhe.component';

describe('RecursoDetalheComponent', () => {
  let component: RecursoDetalheComponent;
  let fixture: ComponentFixture<RecursoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
