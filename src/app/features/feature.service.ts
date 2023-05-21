import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Feature} from './feature';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private apiUrl = `${environment.API_URL}/api/v1/features`;

  constructor(private http: HttpClient) {
  }

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.apiUrl);
  }

  updateFeature(feature: Feature): Observable<Feature> {
    return this.http.patch<Feature>(`${this.apiUrl}/${feature.id}`, feature);
  }

  addFeature(newFeature: Feature): Observable<Feature> {
    return this.http.post<Feature>(this.apiUrl, newFeature);
  }

  deleteFeature(feature: Feature) {
    return this.http.delete<boolean>(`${this.apiUrl}/${feature.id}`);
  }
}
