import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaCadastroComponent } from './agencia-cadastro.component';

describe('AgenciaCadastroComponent', () => {
  let component: AgenciaCadastroComponent;
  let fixture: ComponentFixture<AgenciaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
