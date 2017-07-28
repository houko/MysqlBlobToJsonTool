import {
    Component
} from '@angular/core';
import { Router } from '@angular/router';
import { welcomeService } from "./welcome.service";
@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.less']

})

export class WelcomeComponent {
    btnShow = false;
    errorMassage = "";
    tableList=[];
    keywords="";
    alllist=[];
    alllistByTable=[];
    listTable=[];
    listTableMore=[];
    alllistByTableMore="";
    keywordsMore="";
    Tableid;
    constructor(private router: Router, private welcomeService: welcomeService) { }
    changBtnShow() {
        // this.btnShow = !this.btnShow
    }
    ngOnInit() {
        if(localStorage.getItem("user")){
         this.getList();
        }else{
            this.router.navigate(['/login']);
        }
        
    }
    filter(){
        this.tableList=[];
       this.alllist.map((item,i)=>{
       if( item.indexOf(this.keywords) >= 0||this.keywords==""){
       this.tableList.push(item);
       }
    })
}
filterByTable(){
        this.listTable=[];
       this.alllistByTable.map((item,i)=>{
       if( item.indexOf(this.keywordsMore) >= 0||this.keywordsMore==""){
       this.listTable.push(item);
       }
    })
}
    logout(){        
           this.welcomeService.logout().subscribe(list => {
            this.errorMassage = "";
            if (list.data) {
             localStorage.removeItem("user");
              this.router.navigate(['/login']);
            } else {
                this.errorMassage = list.message;
            }
        },
            error => {
                this.errorMassage = "服务器挂了";
            });
    }
    listByTable(data){
        this.Tableid=data;
        this.welcomeService.listByTable(data).subscribe(list => {
            this.errorMassage = "";
            if (list.data) {
                this.alllistByTable=list.data;
                this.filterByTable();
                this.alllistByTableMore="";
            } else {
                this.errorMassage = "数据有误，请重新输入";
            }
        },
            error => {
                this.errorMassage = "服务器挂了";
            });
    }
    listByTableMore(data){
        
        this.welcomeService.listByTableMore(this.Tableid,data).subscribe(list => {
            this.errorMassage = "";
            if (list.data) {
                let json = JSON.stringify(list.data,null,2);
                this.alllistByTableMore= this.syntaxHighlight(json);

            } else {
                this.errorMassage = "数据有误，请重新输入";
            }
        },
            error => {
                this.errorMassage = "服务器挂了";
            });
        
    }
    getList() {
        this.welcomeService.list().subscribe(list => {
            this.errorMassage = "";
            if (list.data) {
                this.alllist=list.data;
                
                this.filter();
            } else {
                this.errorMassage = "数据有误，请重新输入";
            }
        },
            error => {
                this.errorMassage = "服务器挂了";
            });
    }


    syntaxHighlight(json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }
}

