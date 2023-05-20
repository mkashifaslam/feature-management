import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FeatureFormComponent} from "../feature-form/feature-form.component";
import {FeatureService} from "../feature.service";
import {Feature} from "../feature";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-feature-list',
  standalone: true,
  imports: [CommonModule, FeatureFormComponent, FormsModule],
  providers: [FeatureService],
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent {
  features!: Feature[];
  filteredFeatures: Feature[] = [];
  searchQuery: string = '';
  isShowForm: boolean = false;
  loading: boolean = true;

  constructor(private featureService: FeatureService) {
  }

  ngOnInit() {
    this.fetchFeatures();
  }

  fetchFeatures() {
    this.featureService.getFeatures().subscribe(data => {
      this.features = data;
      this.filteredFeatures = data;
      this.loading = false;
    });
  }

  toggleFeature(feature: Feature) {
    feature.enabled = !feature.enabled;
    this.featureService.updateFeature(feature).subscribe();
  }

  addFeature(newFeature: Feature) {
    this.featureService.addFeature(newFeature).subscribe(() => {
      this.fetchFeatures();
    });
  }

  public filterFeatures(): void {
    // Filter features based on the search query
    this.filteredFeatures = this.features.filter(feature =>
      feature.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }


  toggleAddFeatureForm(event: any) {
    this.isShowForm = !this.isShowForm;
  }
}
