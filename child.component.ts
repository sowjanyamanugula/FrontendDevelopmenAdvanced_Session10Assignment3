import { Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'child-app',
  template: `<h1>Child Component</h1>
             <label>Enter Child Component value</label>
             <input type="text" #childtext (keyup)="onChange(childtext.value)">
             <p>Value from Parent component is</p> {{parentdata}}
           `,
   inputs:[`parentdata`],
   outputs:[`childevents`]
})
export class ChildComponent  {
  public parentdata:string;
  childevents=new EventEmitter<string>();
  onChange(value:string){
      this.childevents.emit(value);
  }
  }



