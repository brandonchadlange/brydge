declare type Stateful<T = any> = {
  get: T;
  set(value: T): void;
};
