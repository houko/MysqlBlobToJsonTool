import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.less']

})
export class PaginationComponent {
    @Input() currentPage: number;
    @Input() totalItems: number;
    @Input() pageSize: number;
    @Input() showCount: boolean;
    @Output() onPageChange = new EventEmitter<any>();
    totals = [];
    pageLength = Math.ceil(this.totalItems / this.pageSize)
    ngOnInit() {
        this.totals = [];
        this.pageLength = Math.ceil(this.totalItems / this.pageSize)
        if (this.pageLength <= 8) {
            for (let i = 0; i < Math.ceil(this.totalItems / this.pageSize); i++) {
                
                    this.totals.push(i)
                
            }
        }else{
            if(this.currentPage>2){
            this.totals.push(this.currentPage-2)
            this.totals.push(this.currentPage-1)
            this.totals.push(this.currentPage)
            }
             
        }

    }
    ngOnChanges() {
       this.totals = [];
        this.pageLength = Math.ceil(this.totalItems / this.pageSize)
        if (this.pageLength <= 8) {
            for (let i = 0; i < Math.ceil(this.totalItems / this.pageSize); i++) {
                
                    this.totals.push(i)
                
            }
        }else{
            if(this.currentPage>2){
            this.totals.push(this.currentPage-2)
            this.totals.push(this.currentPage-1)
            this.totals.push(this.currentPage)
            }
             
        }
    }
}