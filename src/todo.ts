export type Todo = {
  id: string
  title: string
  description: string
}

export function getTodos(): Promise<Todo[]> {
  return fetch('http://localhost:3001/todo').then((res) => res.json())
}

export function getTodo(id: string): Promise<Todo> {
  return fetch(`http://localhost:3001/todo/${id}`).then((res) => res.json())
}
