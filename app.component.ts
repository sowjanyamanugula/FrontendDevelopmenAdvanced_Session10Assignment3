import { Component } from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'my-app',
  template: `<h1>Parent Component</h1>
             <label>Enter Parent Component value</label>
             <input type="text" #ptext (keyup)="0">
             <p>Value from child component is</p> {{childata}}
             <child-app (childevents)="childata=$event" [parentdata]="ptext.value"></child-app>`,
    directives:[ChildComponent]
})
export class AppComponent  {
    public childata:string;
  }



