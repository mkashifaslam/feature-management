import {Component} from '@angular/core';
import {FeatureListComponent} from "./features/feature-list/feature-list.component";
import {Title} from "@angular/platform-browser";
import {HeaderComponent} from "./features/header/header.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FeatureListComponent,
    HeaderComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feature Management App';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

}
