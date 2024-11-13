import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from "@angular/common";
import { CalculatorComponent } from "../components/calculator/calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculator';
}
