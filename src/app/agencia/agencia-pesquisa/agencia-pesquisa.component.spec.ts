import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaPesquisaComponent } from './agencia-pesquisa.component';

describe('AgenciaPesquisaComponent', () => {
  let component: AgenciaPesquisaComponent;
  let fixture: ComponentFixture<AgenciaPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciaPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
