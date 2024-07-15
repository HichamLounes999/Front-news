import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {LatestNews} from "../../models/latest-new.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Output() showdetails: EventEmitter<boolean> = new EventEmitter<boolean>();
  newsDetails: LatestNews;

  constructor(private router: Router) {
    this.newsDetails = history.state;
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['news'])
    this.showdetails.emit(false);
  }
}
