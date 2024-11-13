type Token = {
  type: "NUMBER" | "OPERATOR" | "OPEN_PARENTHESIS" | "CLOSE_PARENTHESIS" | "EMPTY";
  value: string;
};
type Success = {
  success: true;
  value: Token[];
  rest: string;
};
type Failure = {
  success: false;
  reason: string;
};
type Result = Success | Failure;
type Parser = (input: string) => Result;
export declare const tokenize: Parser;
export type EvaluationSuccess<A> = {
  success: true;
  value: A;
  rest: Token[];
};
export type EvaluationFailure = {
  success: false;
  reason: string;
};
export type EvaluationResult<A> = EvaluationSuccess<A> | EvaluationFailure | null;
