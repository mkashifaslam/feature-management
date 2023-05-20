import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  @Input({required: true}) title: string = 'Dialog Title';
  @Input({required: true}) message: string = 'Dialog content goes here.';
  @Output() OnSelectedOption = new EventEmitter<boolean>();

  confirm() {
    this.OnSelectedOption.emit(true);
  }

  cancel() {
    this.OnSelectedOption.emit(false);
  }
}
