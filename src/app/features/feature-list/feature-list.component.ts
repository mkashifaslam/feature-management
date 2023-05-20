import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FeatureFormComponent} from "../feature-form/feature-form.component";
import {FeatureService} from "../feature.service";
import {Feature} from "../feature";
import {FormsModule} from "@angular/forms";
import {DialogComponent} from "../../dialog/dialog.component";

@Component({
  selector: 'app-feature-list',
  standalone: true,
  imports: [CommonModule, FeatureFormComponent, FormsModule, DialogComponent],
  providers: [FeatureService],
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent {
  features!: Feature[];
  filteredFeatures: Feature[] = [];
  selectedFeature: Feature | null = null;
  searchQuery: string = '';
  isShowForm: boolean = false;
  isShowDialog: boolean = false;
  loading: boolean = true;
  dialogTitle: string = 'Confirm Action';
  dialogMessage: string = 'Are you sure you want to perform this action?';

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

  deleteFeature() {
    this.featureService.deleteFeature(this.selectedFeature as Feature)
      .subscribe(() => {
        this.selectedFeature = null;
        this.fetchFeatures();
      });
  }

  showDeleteDialog(feature: Feature) {
    this.selectedFeature = feature;
    const featureName = this.selectedFeature.name;
    const dialogTitle = 'Delete Action!';
    const dialogMessage = `Please confirm if you want to delete "${featureName}"?`;
    this.setDialogContext(dialogTitle, dialogMessage);
    this.isShowDialog = true;
  }

  selectedOption(event: any) {
    this.isShowDialog = false;
    if (event) {
      this.deleteFeature();
    }
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

  setDialogContext(title: string, message: string) {
    this.dialogTitle = title;
    this.dialogMessage = message;
  }
}
