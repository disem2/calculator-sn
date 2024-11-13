import { Component } from '@angular/core';
import { evaluate } from "@suprnation/evaluator";
import { FormsModule } from "@angular/forms";
import { EvaluationResult, EvaluationSuccess } from "../../models/evaluation.types";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  expression: string = '';
  result: EvaluationResult<number> = null;
  displayResult: number | null = null;
  errorMessage: string = '';
  history: { expression: string; result: number }[] = [];

  /**
   * Evaluate the entered expression
   * @param expression User entered string
   */
  onExpressionChange(expression: string): void {
    this.expression = expression;
    this.errorMessage = '';
    this.result = evaluate(expression);

    if (evaluate(expression).success) {
      this.displayResult = (this.result as EvaluationSuccess<number>).value;
    } else {
      this.displayResult = null;
      this.errorMessage = expression && 'Invalid expression' || '';
    }
  }

  /**
   * Adds the current expression and result to the history.
   * Clean inputs and current result
   */
  addToHistory(): void {
    const result = this.displayResult;

    if (result) {
      // Rewrite the history with new values
      this.history = [
        ...this.history.slice(-4), // Take the last 4 entries if history has 5 or more
        { expression: this.expression, result }
      ];
      this.expression = '';
      this.result = null;
      this.displayResult = null;
    }
  }
}
