import { readFileSync, writeFileSync } from "fs"

const filePath = "./log.txt"

export const fileLog = (text: string) => {
  const logFile = readFileSync(filePath).toString()
  writeFileSync(
    filePath,
    `${logFile}${logFile.length > 1 ? "\n" : ""}[${new Date().toISOString()}]: ${text}`,
  )
}
