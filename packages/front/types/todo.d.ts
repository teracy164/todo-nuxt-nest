export interface Todo {
  id: number;
  contents: string;
  start: string | null;
  end: string | null;
  isCompleted: boolean;
}
