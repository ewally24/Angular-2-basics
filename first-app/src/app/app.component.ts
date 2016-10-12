import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  		<h1> App Works! </h1>
  		<fa-other> </fa-other>
  		<fa-another>
  			<div>
  				<h2> Hello World! </h2>
  				<h2> Hello Friend! </h2>
  			</div>
  		</fa-another>
  		<fa-databinding> </fa-databinding>
  	`,
  styles: [`
  	h1 {
  		color: red;
  	}	
  		`]
})
export class AppComponent {
  title = 'app works!';
}
