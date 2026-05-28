import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from './configs/cloudinary.js';
import aiRouter from './routes/aiRoutes.js';
import userRouter from './middlewares/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Connect Cloudinary
connectCloudinary();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Routes
app.get('/', (req, res) => res.send('Quick AI Server Running ✅'));
app.use('/api/ai', aiRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));