import {CUSTOM_ELEMENTS_SCHEMA, Component} from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-off-today',
  standalone: true,
  imports: [],
  templateUrl: './off-today.component.html',
  styleUrl: './off-today.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class OffTodayComponent  {

}
