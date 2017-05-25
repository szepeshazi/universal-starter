import {NgModule} from "@angular/core";

import {SharedModule} from "../shared/shared.module";
import {PageListComponent} from "./page-list/page-list.component";
import {PageItemComponent} from './page-item/page-item.component';
import {PageRoutingModule} from './page-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PageRoutingModule
  ],
  declarations: [
    PageListComponent,
    PageItemComponent
  ]
})
export class PageModule {
}
