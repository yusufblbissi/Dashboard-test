// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LeaveReportComponent } from './leave-report/leave-report.component';
import { RequestForLeaveComponent } from './request-for-leave/request-for-leave.component';
import { OffTodayComponent } from './off-today/off-today.component';
import { ReportComponent } from './report/report.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, FontAwesomeModule, LeaveReportComponent, RequestForLeaveComponent, OffTodayComponent,ReportComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  isSidebarVisible: boolean = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    console.log("testing")
  }
}
