import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  descricao: string;
  valor: number;
  acao: string;
}

@Component({
  selector: 'app-mat-dialog-saque-deposito',
  templateUrl: './mat-dialog-saque-deposito.component.html',
  styleUrls: ['./mat-dialog-saque-deposito.component.css']
})
export class MatDialogSaqueDepositoComponent {

  constructor(
    public dialogRef: MatDialogRef<MatDialogSaqueDepositoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
