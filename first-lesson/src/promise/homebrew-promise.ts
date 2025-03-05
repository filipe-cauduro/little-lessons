type PromiseFn = (
  resolve: (param: unknown) => void,
  reject: (err: unknown) => void,
) => HPromise

const promise = new HPromise(
  (resolve, reject) => {
    try {
      const retorno = chamadaApi()
      resolve(retorno)
    } catch (e) {
      reject(e)
    }
  }
)

promise.then(x => console.log(x))


class HPromise {
  public thens: ((data: unknown) => unknown)[] = []
  public catchFn?: (data: unknown) => unknown
  public finallyFn?: (data: unknown) => unknown

  constructor(fn: PromiseFn) {
    fn(this.resolve, this.reject)
  }

  public then(fn: (data: unknown) => unknown) {
    this.thens.push(fn)
  }

  public catch(fn: (data: unknown) => unknown) {
    this.catchFn = fn
  }

  public finally(fn: (data: unknown) => unknown) {
    this.finallyFn = fn
  }

  private resolve(param: unknown) {
    try {
      for (const curr of this.thens) curr(param)

      if (!this.finallyFn) return

      this.finallyFn(param)
    } catch (e) {
      this.reject(e)
    }
  }

  private reject(err: unknown) {
    if (!this.catchFn) return

    this.catchFn(err)

    if (!this.finallyFn) return

    this.finallyFn(err)
  }
}
