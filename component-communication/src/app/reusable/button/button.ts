import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
function tranformToUpperCase(value: string) {
  return value.toUpperCase();
}
@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() buttonType = '';
  @Input({ transform: tranformToUpperCase }) buttonText = 'click me';
  @Output() Navclick = new EventEmitter<void>();
}
