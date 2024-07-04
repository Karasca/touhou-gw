import { Routes } from '@angular/router';
import { RollerComponent } from './roller/roller.component';
import { CardsComponent } from './cards/cards.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'cards'},
    { path: 'cards', component: CardsComponent},
    { path: 'roller', component: RollerComponent }
];
