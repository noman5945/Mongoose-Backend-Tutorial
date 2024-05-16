import express, { Request, Response } from 'express'
import cors from 'cors'
import { StudentRouters } from './app/modules/student/student.routes'
const app = express()

//parsers
app.use(express.json())
app.use(cors())

//API Routes
app.use('/api/v1/students',StudentRouters)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})



export default app