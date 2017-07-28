import {
    Component
} from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from "./login.service"
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']

})

export class LoginComponent {
    databaseName="game_codex_s1";
    ip="192.168.5.69";
    userName="root";
    password="";
    errorMassage="";
    loginBtn = true;
    constructor(private router: Router, private loginService: loginService) { }
    login() {
        
        if (!this.loginBtn) {
            this.errorMassage = "正在登陆，请稍后";
            return false;
        }else if (this.ip == "") {
            this.errorMassage = "地址不得为空！";
            return false;
        } else if (this.userName == "") {
            this.errorMassage = "账号不得为空！";
             return false;
        } else if (this.databaseName == "") {
            this.errorMassage = "数据库不得为空！";
             return false;
        }else{
        this.loginBtn = false;
        this.errorMassage = "";
        let data = {
            "databaseName": this.databaseName,
            "ip": this.ip,
            "userName": this.userName,
            "password": this.password

        }
        this.loginService.login(data).subscribe(list => {
            this.loginBtn = true;
            this.errorMassage = "";
            if (list.data) {
                localStorage.setItem("user",JSON.stringify(data))
                this.router.navigate(['/welcome']);
            } else {
                this.errorMassage = "数据有误，请重新输入";
            }
        },
            error => {
                this.loginBtn = true;
                this.errorMassage = "服务器挂了";
            });
        }

        
    }
    reset() {
        this.databaseName = "";
        this.ip = "";
        this.userName = "";
        this.password = "";
        this.errorMassage = "";
    }
}