import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  @Output()
  input = new Subject<string>()

  insertInput(event : any) {
    console.info(">> input: ", event.target.value)
    this.input.next(event.target.value)
  }
}