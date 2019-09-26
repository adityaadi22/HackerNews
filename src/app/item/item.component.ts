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
  
textcontent:string;
  abcd1: any;
  defdata: any;
  commentcounter: any;
  alldata: any;
  comments1: any;
  today = Date.now();
  constructor(private route: ActivatedRoute,private service:ServiceService) { }
  
  addTodo( textcontent:string, itemid:number,timeval:string)
  {
    console.log(timeval);

    this.service.store(itemid,textcontent,timeval).subscribe((data: any) => {
     this.alldata = data,
    this.comments1=this.alldata.comments;
    this.defdata=this.comments1;
     this.commentcounter=this.comments1.length;
   this.service.patch1(this.alldata.id,this.comments1,textcontent,timeval).subscribe((data:any)=>{
    
    });
    });  
   }
   addreply(text1content:string,itemid:number,commentid:number,timeval1:string,){
     console.log(commentid);
     console.log(text1content);
   }
  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params => {
      this.newid = params['id'];
    
      this.service.fetchNews().subscribe(
      (data: any) => {
        this.singlenewscomment = data;
      })
    }); 
  }
}
