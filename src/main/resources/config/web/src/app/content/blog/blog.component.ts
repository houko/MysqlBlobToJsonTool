import { Component, ViewEncapsulation,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { blogService } from "./blog.service"
import { Router } from '@angular/router';
import _ from "underscore"
var moment = require('moment');
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent {
  currentPage: number = 1;
  totalItems: number = 1000;
  pageSize: number = 10;
  articleLoading = true;
  tagLoading = true;
  tagList = [];
  keywords = "";
  articleList = [];
  tags = [];
  focus=false;
  showErr=false;
  inputTemp=""
  //  showCount: boolean;
  constructor(private blogService: blogService, private router: Router) {

  }
  @ViewChild('input')
  inputDom: ElementRef;

  onPageChange(data) {
    this.currentPage = data;
    this.getArticleList();
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTagList(0, 100)
    this.getArticleList();
  }
  onFocus(e){
    this.inputTemp=this.keywords+"";
  }
 
  ngAfterViewInit() {
    document.body.addEventListener("click",
      this.hideChild.bind(this));
  }
  hideChild(){
    this.keywords=this.inputTemp+""
  }
  resetKey(e){
    e.stopPropagation();
    this.keywords = "";
      this.inputDom.nativeElement.focus();
  }
  goArticleMore(data) {
    this.router.navigate(['/content/article/' + data.id]);
  }
  keywordSearch(e) {
    
    let keyCode = e.keyCode;
    if (keyCode == 13) {
        this.inputDom.nativeElement.blur();
      this.inputTemp=this.keywords+"";
      this.getArticleList();
    }
  }
  search() {
    this.inputTemp=this.keywords+"";
    this.getArticleList();
  }
  resetTag(){
    this.tags=[];
    this.getArticleList();
  }
  tagSearch(data) {
     var even = _.find(this.tags, function (num) {
      return num == data.id;
    });
    if(this.tags.length==5&&!even){
      this.showErr=true;
    }else{
 this.showErr=false;
    if (even) {
      this.tags = _.without(this.tags, data.id);
    } else {
      this.tags.push(data.id);
    }
    this.getArticleList();
    }
    
  }
  hasSearch(data){
    return _.find(this.tags, function (num) {
      return num == data.id;
    });
  }
  getArticleList() {
    this.articleLoading = true;
    let data = {
      "orderBy": "id",
      "IsDesc": true,
      "offsetHead": (this.currentPage - 1) * this.pageSize,
      "offsetTail": this.currentPage * this.pageSize,
      "keywords": this.keywords,
      "where":{
        "tag_ids":this.tags
      },
    }
    this.blogService.getArticleList(data).subscribe(list => {
      this.articleLoading = false;
      if (list.data) {
        this.articleList = list.data.list;
        this.totalItems = list.data.count;
      }
      if (list.errors) {
      }
    },
      error => {
        this.articleLoading = false;
      });
  }
  getTagList(offsetHead, offsetTail) {
    this.tagLoading = true;
    let data = {
      "orderBy": "current_date",
      "IsDesc": true,
      "offsetHead": offsetHead,
      "offsetTail": offsetTail
      
    }
    this.blogService.getTagList(data).subscribe(list => {
      this.tagLoading = false;
      if (list.data) {
        this.tagList = list.data.list;
      }
      if (list.errors) {
      }
    },
      error => {
        this.tagLoading = false;
      });
  }

}
