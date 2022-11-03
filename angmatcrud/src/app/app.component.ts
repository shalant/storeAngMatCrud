import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogueComponent } from './dialogue/dialogue.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angmatcrud';


  constructor(private dialog: MatDialog) {

  }
  openDialog() {
    this.dialog.open(DialogueComponent, {
      width:'30%'
    });
  }
}
