import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Feature} from "../feature";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-feature-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.css']
})
export class FeatureFormComponent {
  @Output() featureAdded = new EventEmitter<Feature>();
  @Output() toggleForm = new EventEmitter<Boolean>();
  feature: Feature = {
    id: 0,
    name: '',
    enabled: false
  };

  saveFeature() {
    const {name: featureName} = this.feature;
    if (featureName && featureName.length > 3) {
      this.featureAdded.emit(this.feature);
    }
    this.feature = {
      id: 0,
      name: '',
      enabled: false
    };
  }

  toggleAddFeatureForm() {
    this.toggleForm.emit(true);
  }
}
