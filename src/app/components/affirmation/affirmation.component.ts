import { Component, OnInit } from '@angular/core';
import { AffirmationService } from '../../services/affirmation.service';

@Component({
  selector: 'app-affirmation',
  templateUrl: './affirmation.component.html',
  styleUrls: ['./affirmation.component.css'],
})
export class AffirmationComponent implements OnInit {
  //public dailyAffirmation: string | undefined;
  public randomAffirmation: string | undefined;

  constructor(private affirmationService: AffirmationService) { }

  ngOnInit(): void {
    this.loadRandomAffirmation();
  }

  /* loadDailyAffirmation(): void {
    this.affirmationService.getDailyAffirmation()
      .subscribe(data => {
        this.dailyAffirmation = data[Math.floor(Math.random() * data.length)];
      });
  } */

  loadRandomAffirmation(): void {
    this.affirmationService.getRandomAffirmation()
      .subscribe(data => {
        this.randomAffirmation = data[Math.floor(Math.random() * data.length)];
      },
      error => {
        console.error('Error loading random affirmation:', error);
    });
  }
}
