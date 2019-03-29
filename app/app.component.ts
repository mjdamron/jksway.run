import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <button kendoButton *ngIf="!opened" (click)="open()">Do not click this button</button>

      <kendo-dialog title="Oh no!" *ngIf="opened" (close)="close()">
          <p style="margin: 30px; text-align: center;">The button was clicked.</p>

          <kendo-dialog-actions>
              <button kendoButton (click)="close()" [primary]="true">Yes, sorry.</button>
          </kendo-dialog-actions>
      </kendo-dialog>
    `
})
export class AppComponent {
    // Do not initially show the Dialog
    public opened: bool = false;

    public close() {
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }
}
