import { Component, ViewChildren } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from '../character.model';
import { CardComponent } from '../card/card.component';
import { HttpService } from '../http.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cards',
    standalone: true,
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.css',
    imports: [CardComponent, CommonModule],
    animations: [
      trigger('fadeIn', [
        transition(':enter', [
          style({ opacity: '0' }),
          animate('1s ease-out', style({ opacity: '1' })),
        ]),
      ]),
    ],

})
export class CardsComponent {

  title = 'TouhouGW';
  characterList$: Observable<Character[]> | undefined;
  dataReady = false;
  @ViewChildren('appCard') appCards!: CardComponent[]; 

  constructor(private httpService: HttpService, private router: Router){
    
  }

  ngOnInit() {
    this.characterList$ = this.httpService.getCharacters().pipe(
      map((res: any) => res)
    );

    this.dataReady = true;
    
  }

  goTo(urlString: string) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([urlString])
    );
  
    window.open(url, '_blank');
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
