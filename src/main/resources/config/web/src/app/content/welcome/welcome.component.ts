import {
    Component
} from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.less']

})

export class WelcomeComponent {
    btnShow=true;
changBtnShow(){
    this.btnShow=!this.btnShow
}
}