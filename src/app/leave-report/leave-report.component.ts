import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables);
;
@Component({
  selector: 'app-leave-report',
  standalone: true,
  imports: [],
  templateUrl: './leave-report.component.html',
  styleUrl: './leave-report.component.css'
})
export class LeaveReportComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {
    new Chart("myChart", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Purple'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19],
          // borderWidth: 1
        }]
      },
      // options: {
      //   responsive: true,
      //   scales: {
      //     y: {
      //       beginAtZero: true
      //     }
      //   }
      // }
    });
  }
}
