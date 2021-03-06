import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges, DoCheck  } from '@angular/core';

@Component({
	selector: 'zvn-lifecycle-two',
  template: `
    <h3>{{ distance }}</h3>
		<ul class="list">
			<li *ngFor="let hook of hooks">
				{{ hook }}
			</li>
		</ul>
	`
})
export class TwoComponent implements OnInit, DoCheck, OnChanges {

  hooks: string[] = [];
  distance: number = 0;

	@Input('value1') value1: string;
	@Input('value2') value2: string;
	@Input('value3') value3: string = "a";

	constructor() {
		this.hooks.push("constructor");
  }

  ngOnChanges(simple: SimpleChanges){
    console.log(simple);
    this.hooks.push("ngOnChanges");
    let tmpObj: SimpleChange  = simple['value1'];
		if(!tmpObj.isFirstChange()) {
			this.distance = parseInt(tmpObj.currentValue) - parseInt( tmpObj.previousValue);
		}
	}

	ngOnInit(){
		this.hooks.push("ngOnInit");
  }

	ngDoCheck(){
		this.hooks.push("ngDoCheck");
	}
}
