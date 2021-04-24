import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsApiService {

  readonly url = environment.apiUrl;
  readonly elos = [1500, 1630, 1760];

  constructor(private http: HttpClient) { }

  protected formatUrl(path: string, queryParams?: any): string {
    if (path[0] !== '/') path = '/' + path;
    if (queryParams && Object.keys(queryParams).length)
      return this.url + path + Object.entries(queryParams).map(kvp => `${kvp[0]}=${kvp[1]}`).join('&');
    else
      return this.url + path;
  }

  public getUsage(time: string, format: string, minElo?: number): Observable<any> {
    if (!minElo || !this.elos.includes(minElo)) minElo = 0;
    const url = this.formatUrl(`/v1/${time}/${format}-${minElo}/usage`);
    console.log(`Sending request to ${url}`);
    return this.http.get(url);
  }

  public getPokemonUsage(time: string, format: string, species: string, minElo?: number): Observable<any> {
    if (!minElo || !this.elos.includes(minElo)) minElo = 0;
    const url = this.formatUrl(`/v1/${time}/${format}-${minElo}/pokemon/${species}/complete`);
    console.log(`Sending request to ${url}`);
    return this.http.get(url);
  }
}
