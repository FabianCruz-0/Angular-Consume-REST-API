import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(public json:JsonService) 
  {
    this.json.getJson('https://fcruz-springboot-api.herokuapp.com/').subscribe((res:any) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    
  }

}
