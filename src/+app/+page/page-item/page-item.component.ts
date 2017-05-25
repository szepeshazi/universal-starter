import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Page} from "../page.model";

@Component({
  selector: 'page-item',
  templateUrl: './page-item.component.html',
})
export class PageItemComponent implements OnInit {

  @Input() entity: Page;
  @Input() view = 'full';

  constructor(private currentRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentRoute.url.subscribe(
      routeParts => console.log(routeParts));
  }
}
