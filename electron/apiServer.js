import express from 'express';
import { automate } from './automation.js';

const app = express();
const port = 3001;

app.use(express.json());

app.post('/automate', async (req, res) => {
  try {
    const { text, website, selectors, credentials } = req.body;
    const result = await automate(text, website, selectors, credentials);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Automation error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export function startApiServer() {
  app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
  });
}