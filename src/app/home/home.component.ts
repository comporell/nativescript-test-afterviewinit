import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core'
import { DataService, DataItem } from '../shared/data.service'
import {ActivityIndicator, ListView, Page} from "@nativescript/core";

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {

  items: Array<DataItem>
  aiTasks: ActivityIndicator;
  testList: ListView;
  page:Page;

  constructor(private _itemService: DataService, private page2: Page) {}

  ngOnInit(): void {
    this.items = this._itemService.getItems()
  }
  ngAfterViewInit(): void{
    console.log(this.page2);
    console.log(this.page2.nativeView);
  }

  loaded(args){
    console.log("loaded");
    console.log(this.page2);
    console.log(this.page2.getViewById("aiTasks"));
    /*this.page = <Page> args.object;
    this.aiTasks = <ActivityIndicator> this.page.getViewById("aiTasks");
    //this.testList = <ListView> getViewById("testList");
    console.log(this.aiTasks);
    setTimeout(() => this.aiTasks.busy = false, 2000);*/
  }
}
