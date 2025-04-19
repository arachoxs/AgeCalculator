import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetdateComponent } from "./getdate/getdate.component";
import { CalcdateComponent } from "./calcdate/calcdate.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GetdateComponent, CalcdateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AgeCalculator';
  date = { day: '', month: '', year: '' };

  saveDate(event: { day: string; month: string; year: string }) {
    this.date = event; // Update 'date' with the emitted event
  }
  
}
