import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageListComponent } from './page-list/page-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'pages', component: PageListComponent }
    ])
  ]
})
export class PageRoutingModule { }
