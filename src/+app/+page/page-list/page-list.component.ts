import {Component, OnInit} from "@angular/core";
import {ModelService} from "../../shared/model/model.service";
import {Page} from "../page.model";

@Component({
  templateUrl: './page-list.component.html',
})
export class PageListComponent implements OnInit {

  public pages: Page[];

  constructor(public modelService: ModelService) {
  }

  ngOnInit() {
    this.modelService.get('/getpages').subscribe(
      pagesJson => {
        this.pages = pagesJson.data.map(page => Object.assign(new Page(), page));
        console.log(this.pages);
      }
    );
  }
}
