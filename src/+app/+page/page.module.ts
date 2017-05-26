import {NgModule} from "@angular/core";

import {SharedModule} from "../shared/shared.module";
import {PageListComponent} from "./page-list/page-list.component";
import {PageItemComponent} from './page-item/page-item.component';
import {PageDetailComponent, Safe} from './page-detail/page-detail.component';
import {PageRoutingModule} from './page-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PageRoutingModule
  ],
  declarations: [
    PageListComponent,
    PageItemComponent,
    PageDetailComponent,
    Safe
  ]
})
export class PageModule {
}
