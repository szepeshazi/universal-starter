import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {PageListComponent} from "./page-list/page-list.component";
import {PageDetailComponent} from "./page-detail/page-detail.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'pages', component: PageListComponent},
      {path: 'pageview/:id', component: PageDetailComponent}
    ])
  ]
})
export class PageRoutingModule {
}
