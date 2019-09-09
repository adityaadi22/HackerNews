import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentsarray: [];
  

  constructor(private newsservice:ServiceService) { }

  ngOnInit() {
    this.newsservice.fetchNews().subscribe(
      (data: any) => {
        this.commentsarray = data;
console.log(this.commentsarray)

      });
    }
}
