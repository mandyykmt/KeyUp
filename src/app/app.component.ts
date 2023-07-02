import { Component, ViewChild } from '@angular/core';
import { DisplayComponent } from './component/display.component';
import { Observable, debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild(DisplayComponent)
  displayComponent!: DisplayComponent

  input$!: Observable<string>

  ngOnInit() {}

  ngAfterViewInit() : void {
    this.input$ = this.displayComponent.input.pipe(
      debounceTime(1000),
      map(s => s.toUpperCase())
    )
  }
}
