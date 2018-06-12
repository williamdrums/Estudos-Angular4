import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacomponenteComponent } from './listacomponente.component';

describe('ListacomponenteComponent', () => {
  let component: ListacomponenteComponent;
  let fixture: ComponentFixture<ListacomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
