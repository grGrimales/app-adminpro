import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color, defaultColors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input() title: string = 'Sin título';
  
  @Input('labels') doughnutChartLabels: Label[] = ['labels1', ' labels2', 'labels3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    
  ];

  public colors: Color[]  = [
      {backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
  ];

}
