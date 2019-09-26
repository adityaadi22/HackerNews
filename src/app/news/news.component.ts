import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 
  newsarray: any;
newsId:number;
  newsIddata: any;
  comments1: any;
  allcomments: [];
  commentcounter: any;
  constructor(private newsservice:ServiceService) { }
  
  ngOnInit() {
  //this.newsarray =  this.newsservice.fetchNews();
  this.newsservice.fetchNews().subscribe(
    (data: any) => {
      this.newsarray = data;
      console.log(this.newsarray);
      for(let i=0;i<this.newsarray.length;i++){
       // console.log(this.newsarray[this.newsarray.id].comments[1].key);
      }
     // this.comments1=this.newsarray[0].comments;
      //console.log(this.comments1);
      //this.allcomments=this.comments1;
     // this.commentcounter=this.allcomments.length;
     //  console.log(this.abcdata.Title);
     //  console.log(this.abcdata.comments);
    console.log(this.commentcounter);

    });
  
  }
  fetchCommentsbasedonNewsId(newsId){
   this.newsIddata = newsId;
    
  }
}
