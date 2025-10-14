import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  imports: [CommonModule],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.css'
})
export class DialogBox {
  @Input() visible: boolean = false;
  @Input() title: string = '';
  @Input() message: string = '';
  @Output() closed = new EventEmitter<boolean>();

  close(result: boolean) {
    this.visible = false;
    this.closed.emit(result);
  }
}
