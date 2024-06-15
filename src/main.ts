import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
