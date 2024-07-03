import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren, viewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HttpService } from './http.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Character } from './character.model';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('1s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit{
  title = 'TouhouGW';
  characterList$: Observable<Character[]> | undefined;
  dataReady = false;
  @ViewChildren('appCard') appCards!: CardComponent[]; 

  constructor(private httpService: HttpService){
    
  }

  ngOnInit() {
    this.characterList$ = this.httpService.getCharacters().pipe(
      map((res: any) => res)
    );

    this.dataReady = true;
    
  }

  ngAfterViewInit(){
    //this.unFlipCards();
    console.log(this.characterList$);
  }

  unFlipCards(){
    for(let card of this.appCards){
      card.flipped = false;
    }
  }

  flipCards(){
    for(let card of this.appCards){
      card.flipped = true;
    }
  }

}
