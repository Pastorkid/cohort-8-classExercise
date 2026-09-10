import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resusable-componet',
  imports: [NgClass, NgStyle],

  templateUrl: './my-first-resusable-componet.html',
  styleUrl: './my-first-resusable-componet.css',
})
export class MyFirstResusableComponet {
  TextColor: string = '';
  isToggle: boolean = false;

  SetTextColor(type: string) {
    this.TextColor = type;
  }

  Toggle() {
    this.isToggle = !this.isToggle;
  }
}
