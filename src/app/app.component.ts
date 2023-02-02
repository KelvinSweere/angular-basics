import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.scss'
	],
})

export class AppComponent {
  title = 'angular-basics';	
	name = 'luis ramirez';
	imgUrl = 'https://picsum.photos/id/237/500/500'
	images = [
		'https://picsum.photos/id/964/500/500',
		'https://picsum.photos/id/236/500/500',
		'https://picsum.photos/id/237/500/500'
	]

	currentDate = new Date();
	currentAmount = 2000;
	temperature = 25.3;
	pizza = {
		toppings: ['pepperoni', 'bacon'],
		size: 'large'
	};
	blueClass = false;
	fontSize = 16;

	getName() {
		return this.name;
	}

	changeImage(e: KeyboardEvent) {
		this.imgUrl = (e.target as HTMLInputElement).value;
	}

	logImg(event: string) {
		console.log(event);
	}

}