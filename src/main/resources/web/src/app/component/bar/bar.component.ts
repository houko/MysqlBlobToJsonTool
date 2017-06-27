import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.less']

})
export class BarComponent {
      constructor(private router: Router) { }
   @Output() logout = new EventEmitter<any>();
    ngOnInit() {
        
    }
    ngOnChanges() {
       
    }
}