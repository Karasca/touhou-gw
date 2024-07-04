import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { map } from 'rxjs';
import { Character } from '../character.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roller.component.html',
  styleUrl: './roller.component.css'
})
export class RollerComponent {
  characterList$: any;
  dataReady: boolean = false;
  rollTime: Date = new Date;
  character: Character | undefined;

  constructor(private httpService: HttpService){
    
  }
  
  ngOnInit() {
    this.characterList$ = this.httpService.getCharacters().pipe(
      map((res: any) => res)
    );

    this.dataReady = true;
    
  }

  roll() {
    

    this.characterList$.subscribe(
      ( value: any) => {  this.character = value[Math.floor(Math.random()*value.length)] }
      );

    this.rollTime = new Date;
  }

}
