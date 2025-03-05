interface Observer<GenericType extends unknown> {
  id: number
  type: "info" | "warning" | "error"
  fn: (param: GenericType) => void
}

interface Subject<T extends unknown> {
  payload: T
  type: Observer<T>["type"]
}

export class Logger<T extends unknown> {
  private observers: Observer<T>[] = []
  private observerIdCount = 1

  subscribe(type: Observer<T>["type"], fn: Observer<T>["fn"]) {
    this.observers.push({ id: this.observerIdCount, type, fn })
    this.observerIdCount++
  }

  onInfo(fn: Observer<T>["fn"]) {
    this.observers.push({ id: this.observerIdCount, type: "info", fn })
    this.observerIdCount++
  }

  onWarning(fn: Observer<T>["fn"]) {
    this.observers.push({ id: this.observerIdCount, type: "warning", fn })
    this.observerIdCount++
  }

  onError(fn: Observer<T>["fn"]) {
    this.observers.push({ id: this.observerIdCount, type: "error", fn })
    this.observerIdCount++
  }

  unsubscribe(id: Observer<T>["id"]) {
    this.observers = this.observers.filter((x) => x.id != id)
  }

  notify({ payload, type }: Subject<T>) {
    this.observers.filter(x => x.type == type).forEach((x) => x.fn(payload))
  }
}
