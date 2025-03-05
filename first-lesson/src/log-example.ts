import {
  consoleLog,
  consoleWarning,
  consoleError,
} from "./observer/console-log"
import { fileLog } from "./observer/file-log"
import { Logger } from "./observer/logger"

const logger = new Logger<string>()

logger.subscribe("info", consoleLog)
logger.subscribe("info", fileLog)
logger.subscribe("warning", consoleWarning)
logger.subscribe("warning", fileLog)
logger.subscribe("error", consoleError)
logger.subscribe("error", fileLog)

logger.notify({ type: "info", payload: "this is my test!" })

export { logger }

// console.log("texto texto texto")

// function log(text: string) {
//   console.log(text)
//   filelog(text)
//   databaselog
// }