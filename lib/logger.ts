// A simple logger implementation
// In production, you would use a more robust solution like Winston or Pino

type LogLevel = "info" | "warn" | "error" | "debug"

interface LogEntry {
  level: LogLevel
  message: string
  timestamp: string
  data?: any
}

// In a real app, you might store logs in a database or send them to a service
const logs: LogEntry[] = []

function log(level: LogLevel, message: string, data?: any) {
  const entry: LogEntry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    data,
  }

  logs.push(entry)

  // In development, also log to console
  if (process.env.NODE_ENV === "development") {
    const consoleData = data ? ` ${JSON.stringify(data)}` : ""
    console[level](`[${entry.timestamp}] ${level.toUpperCase()}: ${message}${consoleData}`)
  }

  // In production, you might send logs to a service like Logtail, Datadog, etc.
}

export const logger = {
  info: (message: string, data?: any) => log("info", message, data),
  warn: (message: string, data?: any) => log("warn", message, data),
  error: (message: string, data?: any) => log("error", message, data),
  debug: (message: string, data?: any) => log("debug", message, data),
  getLogs: () => [...logs],
}
