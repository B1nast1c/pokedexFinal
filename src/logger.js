import { logger } from "react-native-logs"


export let log = logger.createLogger({
    dateFormat: "utc",
    printLevel: true,
    printDate: true,
    transportOptions: {
        colors: {
            error: "blueBright"
        },
    },
})