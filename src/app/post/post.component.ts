import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, 
	AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy {
	@Input("img") postImg: string = ''
	@Output() imgSelected = new EventEmitter<string>();
	 
	constructor() {
		console.log('constructor called');
	}

	ngOnInit() {
		console.log('ngOnInit called');
	}

	ngOnChanges() {
		console.log('ngOnChanges called');	
	}

	ngDoCheck() {
		console.log('ngDoCheck called');
	}

	ngAfterContentChecked() {
		console.log('ngAfterContentChecked called');
		
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit called');
		
	}

	ngAfterViewChecked() {
		console.log('ngAfterViewChecked called');
	}

	ngOnDestroy(): void {
		console.log('ngOnDestroy called');
	}

}
