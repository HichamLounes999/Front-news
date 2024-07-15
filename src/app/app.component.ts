import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {LatestNews} from "../models/latest-new.model";
import {LatestNewsService} from "../services/latest-news.service";
import {FormBuilder, UntypedFormGroup} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) private _paginator: MatPaginator;

  public latestNewsList!: LatestNews[];
  private destroy$: Subject<void> = new Subject<void>();
  latestNewsFilterForm: UntypedFormGroup;
  showFilterForm: boolean = false;
  isFilterButtonClicked: boolean = false
  showdetails: boolean = false

  public constructor(private latestNewsService: LatestNewsService, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getAll();
    this.createFilterForm();
  }

  getAll() {
    this.latestNewsService.getAll().pipe(takeUntil(this.destroy$)).subscribe(list => this.latestNewsList = list);

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  onDetails() {
    this.showdetails = true
  }

  private createFilterForm() {
    this.latestNewsFilterForm = this._formBuilder.group({
      category: [],
      source: [],
    })
  }

  filterLatestNews(sortEvent: any, Index = 0, Size = 50) {
    const filterParams = this.latestNewsFilterForm.getRawValue();
    this.latestNewsService.getLatestNewsFiltred(filterParams, this._paginator.pageIndex, this._paginator.pageSize)
      .pipe(takeUntil(this.destroy$)).subscribe(list => this.latestNewsList = list);
  }

  resetFilterForm() {
    if (this.isFilterButtonClicked) {
      this.getAll()
      this.isFilterButtonClicked = false
    }
    this.latestNewsFilterForm.reset()
  }

  onChanged(value: boolean) {
    this.showdetails = value;
  }
}
