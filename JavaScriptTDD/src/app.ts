import express, {Application, Request, Response} from 'express'
import createServer from 'server'
import "dotenv/config"

const startServer = () => {
    const app = createServer()
    const port: number = parseInt(<string>process.env.PORT, 10) || 4000

    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
}

startServer()