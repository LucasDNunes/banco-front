import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogSaqueDepositoComponent } from './mat-dialog-saque-deposito.component';

describe('MatDialogSaqueDepositoComponent', () => {
  let component: MatDialogSaqueDepositoComponent;
  let fixture: ComponentFixture<MatDialogSaqueDepositoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDialogSaqueDepositoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialogSaqueDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
