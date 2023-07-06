import winston from "winston";
import config from "config";

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}

const level = () => {
    const env = config.get<string>('env') || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'warn'
}

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'blue',
    debug: 'gray'
}

winston.addColors(colors)

const format = winston.format.combine(
    winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss ZZ'
    }),
    winston.format.colorize({
        all: true
    }),
    winston.format.printf((info) => {
        return `${info.timestamp} - ${info.level}: ${info.message}`
    })
)

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/all.log',
    }),
    new winston.transports.File({
        filename: `logs/error.log`,
        level: 'error'
    })
]

const Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports
})

export default Logger