import { Component } from '@angular/core';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';

@Component({
  selector: 'app-root',
  imports: [RecipeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
