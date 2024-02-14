import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInOut', [
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('closed', style({
        transform: 'translateX(100%)'
      })),
      transition('open => closed', [
        animate('3.7s')
      ]),
      transition('closed => open', [
        animate('3.7s')
      ])
    ])
  ]
})
export class HomeComponent {
  isOpen = false;
  toggleForm() {
    this.isOpen = !this.isOpen;
  }

}
