import express from 'express'
import type { Request, Response } from 'express'
const app = express()

app.get('/', (_req: Request, res: Response): void => {
  res.send('Hello World')
})

app.listen(3000, (): void => {
  console.log('server is run 3000 port')
})
