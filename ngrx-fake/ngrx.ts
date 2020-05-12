export interface Action {
  type: string;
  payload?: any;
}

export interface Reducer<T> {
  (state: I, action: Action): T
}
