// import "./log-example"

import { containsWord } from "./first-assignment/first-assignment-guilherme"

async function main() {
  const promise = new Promise(
    (resolve: (value: unknown) => void, reject: (reason?: any) => void) => {
      setTimeout(() => {
        console.log("promise")
        resolve("wow!")
      }, 1000)
      
    },
  )

  promise.then((data) => console.log(`time's up 1! ${data}`))
  promise.then((data) => console.log(`time's up 2! ${data}`))
  promise.then((data) => console.log(`time's up 3! ${data}`))
  promise.catch(() => console.error("catch!"))
  promise.finally(() => console.log("finally!"))

  console.log(promise)

  // const result = await promise
  // console.log(result)
}

main()
