import {Component, Input, OnInit} from "@angular/core";
import {Page} from "../page.model";

@Component({
  selector: 'page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent {
  @Input() entity: Page;
}
