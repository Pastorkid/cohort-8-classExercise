import { Component, Input, Output, EventEmitter } from '@angular/core';

import { navAnimations } from '../../animation';

@Component({
  selector: 'app-upper-nav',
  imports: [],
  templateUrl: './upper-nav.html',
  styleUrl: './upper-nav.css',
  animations: navAnimations,
})
export class UpperNav {}
