import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors()) 
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log("Server running..."));
  })
  .catch((err) => console.log("DB connection failed:", err));


app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res) => res.send('API Working...'))


app.listen(PORT, ()=> console.log('Server running on port '+PORT))

