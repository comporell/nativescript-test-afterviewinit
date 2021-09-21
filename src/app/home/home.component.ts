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
  page1:Page;

  constructor(private _itemService: DataService, private page2: Page) {}

  ngOnInit(): void {
    this.items = this._itemService.getItems()
  }
  ngAfterViewInit(): void{
	console.log("aftweviewinit fired");
    
	//comment here below to fire loaded
	console.log(this.page2);
    console.log(this.page2.nativeView);
	this.aiTasks = <ActivityIndicator> this.page1.getViewById("aiTasks");
    console.log(this.aiTasks);
  }

  loaded(args){
    console.log("loaded fired");
    console.log(this.page2);
	console.log(this.page2.getViewById("aiTasks"));
    this.page1 = <Page> args.object;
    this.aiTasks = <ActivityIndicator> this.page1.getViewById("aiTasks");
    console.log(this.aiTasks);
    setTimeout(() => this.aiTasks.busy = false, 2000);
  }
}
