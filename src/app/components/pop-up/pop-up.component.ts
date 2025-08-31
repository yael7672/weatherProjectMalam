import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { PopUpServiceService } from 'src/app/pop-up.service';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  @Input() title!: string;
  @Input() ifX!: boolean;
  @Input() ifXt!: boolean;
  @Input() hideButton!: any;
  @Input() textButtonBack: any;
  @Output() ClickCancel = new EventEmitter<any>();
  @Output() ClickX = new EventEmitter<any>();
  whichPopUpOpen: any;

  constructor(private appService: AppService, private popUpService: PopUpServiceService) {
  }

  ngOnInit(): void {
  }
  closePopUp() {
    this.appService.setIsPopUpOpen(false);
    this.popUpService.setClosePopUp();
  }

}
