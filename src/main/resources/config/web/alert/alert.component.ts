import {
  Component, Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less'],
  animations: [
  trigger('flyInOut', [
    state('in', style({opacity: 1, transform: 'translateX(0%)'})),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-10%)'
      }),
      animate('1s ease-in')
    ]),
    transition('* => void', [
      animate('1s 10 ease-out', style({
        opacity: 0,
        transform: 'translateX(10%)'
      }))
    ])
  ])
]
})
export class AlertComponent {
  @Input() type;
  @Input() message;
}
