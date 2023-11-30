import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface AffirmationsResponse {
  daily: string[];
  random: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AffirmationService {
  private readonly affirmationsUrl = 'assets/affirmations.json';

  constructor(private http: HttpClient) {}

  getDailyAffirmation(): Observable<string[]> {
    return this.http.get<AffirmationsResponse>(this.affirmationsUrl)
      .pipe(map(data => data.daily));
  }

  getRandomAffirmation(): Observable<string[]> {
    return this.http.get<AffirmationsResponse>(this.affirmationsUrl)
      .pipe(map(data => data.random));
  }
}
