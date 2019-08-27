import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  secondes: number;
  counterSubscription: Subscription;

  constructor(private appareilService: AppareilService) {
   
  }
  
  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log("an erro occured : "+error);
      },
      () => {
        console.log("Observable complete")
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
