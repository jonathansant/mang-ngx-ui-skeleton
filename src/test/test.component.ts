import { Component } from "@angular/core";

@Component({
	selector: "mm-test-component",
	templateUrl: "test.component.html"
})
export class TestComponent {
	public message: string;

	constructor() {
		this.message = "NOW IT's WORKING";
	}
}
