import {Component, OnInit, Pipe} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {Page} from "../page.model";
import {ModelService} from "../../shared/model/model.service";

@Pipe({name: 'safeHtml'})
export class Safe {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
    // return this.sanitizer.bypassSecurityTrustStyle(content);
    // return this.sanitizer.bypassSecurityTrustXxx(content); - see docs
  }
}

@Component({
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  public entity: Page;

  constructor(public modelService: ModelService, private currentRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.currentRoute.params.subscribe(
      params => {
        let id = params['id'];
        console.log('Page details called with id: ' + id);
        if (id) {
          this.modelService.get('/getpages').subscribe(
            pagesJson => {
              this.entity = Object.assign(new Page(), pagesJson.data.find(page => page['id'] == id));
              console.log('Got entity: ' + this.entity.id + ' ' + this.entity.title);
            }
          );
        }
      }
    );

  }
}

