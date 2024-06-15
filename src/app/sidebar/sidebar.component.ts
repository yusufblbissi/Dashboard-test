import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee,faGear,faGauge,faHourglassHalf,faPortrait,faUserGroup,faFile ,faFileSignature,faCalendar,faBell} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  standalone:true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports:[FontAwesomeModule]
})
export class SidebarComponent {
  @Input() isSidebarVisible: boolean = false;
  faCoffee = faCoffee;
  faGear = faGear;
  faGauge = faGauge;
   faHourglassHalf = faHourglassHalf;
   faPortrait = faPortrait;
   faUserGroup = faUserGroup;
   faFile = faFile;
    faFileSignature = faFileSignature;
    faCalendar = faCalendar;
     faBell = faBell;

}