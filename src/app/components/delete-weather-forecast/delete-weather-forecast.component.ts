import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { PopUpServiceService } from 'src/app/pop-up.service';
import { WeatherForecastService } from 'src/app/weather-forecast.service';

@Component({
  selector: 'app-delete-weather-forecast',
  templateUrl: './delete-weather-forecast.component.html',
  styleUrls: ['./delete-weather-forecast.component.scss']
})
export class DeleteWeatherForecastComponent  implements OnInit {
  ifShowSpinner!: boolean;

  ifSortDown = true;
  showMassgeToUser = true;
  massgeUserHeader = "";
  massgeUserBody = "האם אתה בטוח שברצונך למחוק רשומה זו?"
  massgeUserFooter = "";
  kindOfMassage = 'deleteWeatherForecast';
  massageToUser = "";
  @Input() weatherForecastId: any
  @Input() dataArr: any
  @Output() deleteData = new EventEmitter<{ id: any; name: string; salary: number; dueDate: any; age: number; }>();
  constructor(private appService: AppService, private popUpService: PopUpServiceService, private weatherService: WeatherForecastService) {
    this.popUpService.getSpinner().subscribe(res => {
      this.ifShowSpinner = res;
    })
  }
  ngOnInit(): void {
  }

  clickYes() {
    debugger
    this.deleteWeatherForecast()
  }

  clickNo(kindOfMassage: string) {
    this.showMassgeToUser = false;
    this.popUpService.setClosePopUp();
  }

 deleteWeatherForecast() {
    this.popUpService.setSpinner(true);

    this.weatherService.deleteWeatherForecast(this.weatherForecastId).subscribe({
      next: () => {
        // מחיקה מקומית מהמערך (optional, אם אין רינדור מחדש מלא)
        this.dataArr = this.dataArr.filter((item: any) => item.id !== this.weatherForecastId);

        // סוגרים פופאפים וספינר
        this.appService.setIsPopUpOpen(false);
        this.popUpService.setSpinner(false);
        this.popUpService.setClosePopUp();
        this.showMassgeToUser = false;

        alert("!הרשומה נמחקה בהצלחה");
        // שולחים לאבא כדי שימחק ברשימה הראשית
        this.deleteData.emit({ id: this.weatherForecastId, name: '', salary: 0, dueDate: '', age: 0 });
      },
      error: (err) => {
        console.error('שגיאה במחיקה:', err);
        alert('אירעה שגיאה במחיקת הרשומה');
        this.popUpService.setSpinner(false);
      }
    });
  }

}

