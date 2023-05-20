import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Feature} from './feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private apiUrl = 'http://localhost:3000/features'; // Replace with your API endpoint

  constructor(private http: HttpClient) {
  }

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.apiUrl);
  }

  updateFeature(feature: Feature): Observable<Feature> {
    return this.http.put<Feature>(`${this.apiUrl}/${feature.id}`, feature);
  }

  addFeature(newFeature: Feature): Observable<Feature> {
    return this.http.post<Feature>(this.apiUrl, newFeature);
  }

  deleteFeature(feature: Feature) {
    return this.http.delete<boolean>(`${this.apiUrl}/${feature.id}`);
  }
}
