import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { SidebarComponent } from './app/sidebar/sidebar.component';

const bootstrap = () => bootstrapApplication(SidebarComponent, config);

export default bootstrap;
