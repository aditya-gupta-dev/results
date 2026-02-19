import { t } from "elysia"

export const resultsBodyRequest = t.Object({ 
    regid: t.String(),
    pass: t.String()
})