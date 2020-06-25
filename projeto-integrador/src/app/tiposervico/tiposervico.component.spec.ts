import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicoComponent } from './tiposervico.component';

describe('TiposervicoComponent', () => {
  let component: TiposervicoComponent;
  let fixture: ComponentFixture<TiposervicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposervicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposervicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
