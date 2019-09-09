import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  routeSub: any;
  newid: any;
  singlenewscomment : any;
    just:[];
textcontent:string;
  abcd1: any;
  defdata: any;
  commentcounter: any;
  abcdata: any;
  comments1: any;
  today = Date.now();
  constructor(private route: ActivatedRoute,private service:ServiceService) { }
  addTodo( textcontent:string, itemid:number,timeval:string)
  {
    console.log(timeval);

    this.service.store(itemid,textcontent,timeval).subscribe((data: any) => {
     this.abcd1 = data,
    this.comments1=this.abcd1.comments;
    this.defdata=this.comments1;
     this.commentcounter=this.comments1.length;
 //console.log(this.commentcounter);
   this.service.patch1(this.abcd1.id,this.comments1,textcontent,timeval).subscribe((data:any)=>{
    
    });
    });  
   }
  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params => {
      this.newid = params['id'];
    // this.singlenewscomment = this.service.fetchNews();
      this.service.fetchNews().subscribe(
      (data: any) => {
        this.singlenewscomment = data;
       //  console.log(this.abcdata.Title);
       //  console.log(this.abcdata.comments);
      })
    }); 
  }

  


}
