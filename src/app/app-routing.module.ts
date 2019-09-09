import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { CommentsComponent } from './comments/comments.component';
import { HeaderComponent } from './header/header.component';
import { ServiceService } from './service.service';
import { ItemComponent } from './item/item.component';
import { AppComponent } from './app.component';


const routes: Routes = [
 { path: 'news/item/:id',
  component :ItemComponent },
  { path: 'news',
  component :NewsComponent },
  { path:'comments',
  component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
