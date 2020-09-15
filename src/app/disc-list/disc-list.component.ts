import { Component} from '@angular/core';
import { discos } from '../discos';

@Component({
  selector: 'app-disc-list',
  templateUrl: './disc-list.component.html',
  styleUrls: ['./disc-list.component.css']
})
export class DiscListComponent implements OnInit {
  listLabel = 'Categorias';
  discos = discos;
  constructor(){}
  ngOnInit(){
    
  }

  
}