import { Component} from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
labels1: string[] = ['Pan', 'Refresco', 'Galletas'];
public data1 = [
  [350, 450, 100],
  
];

}
