import express from 'express';
import cors from 'cors';
import { PrismaClient } from './src/generated/prisma/index.js';

const app = express();
const prisma = new PrismaClient();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// GET all logs
app.get('/api/logs', async (req, res) => {
  try {
    const logs = await prisma.log.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch logs' });
  }
});

// GET single log by ID
app.get('/api/logs/:id', async (req, res) => {
  try {
    const log = await prisma.log.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    if (!log) {
      return res.status(404).json({ error: 'Log not found' });
    }
    res.json(log);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch log' });
  }
});

// CREATE new log
app.post('/api/logs', async (req, res) => {
  try {
    const { title, content } = req.body;
    const log = await prisma.log.create({
      data: { title, content }
    });
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create log' });
  }
});

// UPDATE log
app.put('/api/logs/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const log = await prisma.log.update({
      where: { id: parseInt(req.params.id) },
      data: { title, content }
    });
    res.json(log);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update log' });
  }
});

// DELETE log
app.delete('/api/logs/:id', async (req, res) => {
  try {
    await prisma.log.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json({ message: 'Log deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete log' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

