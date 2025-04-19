import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-getdate',
  imports: [ReactiveFormsModule],
  templateUrl: './getdate.component.html',
  styleUrl: './getdate.component.css'
})
export class GetdateComponent {
  dateForm = new FormGroup({
    day: new FormControl(''),
    month: new FormControl(''),
    year: new FormControl('')
  })

  invalidmonth: boolean = true;
  invalidyear: boolean = true;
  invalidday: boolean = true;

  futuredate: boolean = false;

  @Output() send = new EventEmitter<{ day: string; month: string; year: string }>();

  checkdate(): boolean{
    const yearU = Number(this.dateForm.value.year);
    const monthU = Number(this.dateForm.value.month);
    const dayU = Number(this.dateForm.value.day);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Los meses en JavaScript son 0-indexed
    const currentDay = new Date().getDate();

    this.checkyear();
    this.checkmonth();
    this.checkday();
    this.checkfuturedate();

    if(this.invalidmonth == false || this.invalidyear == false || this.invalidday == false || this.futuredate == true) {
      return false;
    }

    if(yearU==currentYear){
      if(monthU>currentMonth){
        return false
      }
      
      if(monthU==currentMonth){
        if(dayU>currentDay){
          return false
        }
      }
    }

    return true
  }  

  checkfuturedate(): boolean {
    const yearU = Number(this.dateForm.value.year);
    const monthU = Number(this.dateForm.value.month);
    const dayU = Number(this.dateForm.value.day);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Los meses en JavaScript son 0-indexed
    const currentDay = new Date().getDate();

    if(yearU==currentYear){
      if(monthU>currentMonth){
        return this.futuredate=true
      }
      
      if(monthU==currentMonth){
        if(dayU>currentDay){
          return this.futuredate=true
        }
      }
    }

    return this.futuredate=false

  }

  checkyear(): boolean {
    const yearU = Number(this.dateForm.value.year);
    const currentYear = new Date().getFullYear();
    if(this.dateForm.value.year == '' || isNaN(yearU)) {
      return this.invalidyear = false;
    }

    if (yearU < 1900 || yearU > currentYear ) {
      return this.invalidyear = false;
    }

    return this.invalidyear = true;

  }

  checkmonth(): boolean {
    const monthU = Number(this.dateForm.value.month);
    if(this.dateForm.value.month == '' || isNaN(monthU)) {
      return this.invalidmonth = false;
    }

    if (monthU < 1 || monthU > 12) {
      return this.invalidmonth = false;
    }

    return this.invalidmonth = true;
  }

  checkday(): boolean {
    const dayU = Number(this.dateForm.value.day);
    if(this.dateForm.value.day == '' || isNaN(dayU)) {
      return this.invalidday = false;
    }

    if (dayU < 1 || dayU > 31) {
      return this.invalidday = false;
    }

    return this.invalidday = true;
  }


  senddate() {
    if(!this.checkdate()) {
      return; // Si la fecha no es válida, no se envía el evento
    }
    const dayU = this.dateForm.value.day;
    const monthU = this.dateForm.value.month;
    const yearU = this.dateForm.value.year;

    //validamos las fechas ingresdas

    // Emitimos los datos como un objeto con propiedades day, month, year
    this.send.emit({ day: dayU!, month: monthU!, year: yearU! });
  }
}
