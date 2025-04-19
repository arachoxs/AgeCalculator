import { Component, Input , OnChanges , SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-calcdate',
  imports: [],
  templateUrl: './calcdate.component.html',
  styleUrl: './calcdate.component.css'
})
export class CalcdateComponent {
  @Input() date_user: { day: string; month: string; year: string } = { day: '', month: '', year: '' }; // Cambiado a objeto

  currentDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  };

  UserAge = {
    years: 0,
    months: 0,
    days: 0
  };

  calculateAge() {
    const userDay = parseInt(this.date_user.day, 10) ;
    const userMonth = parseInt(this.date_user.month, 10) ;
    const userYear = parseInt(this.date_user.year, 10);

    let years = this.currentDate.year - userYear;
    let months = this.currentDate.month - userMonth;
    let days = this.currentDate.day - userDay;

    if (days < 0) {
      months--;
      days += new Date(this.currentDate.year, this.currentDate.month - 1, 0).getDate(); // Días del mes anterior
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    this.UserAge.years = years || 0;
    this.UserAge.months = months || 0;
    this.UserAge.days = days || 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['date_user']){
      this.calculateAge();
    }
  }

}
