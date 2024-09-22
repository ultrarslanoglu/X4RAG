// backend/src/routes.js
const express = require('express');
const router = express.Router();
const { fetchGitHubData } = require('./utils');

// Sorgu rotası
router.get('/query', async (req, res) => {
  const { question } = req.query;
  if (!question) {
    return res.status(400).json({ error: 'Soru eksik' });
  }

  try {
    const data = await fetchGitHubData(question);
    res.json({ answer: data });
  } catch (error) {
    res.status(500).json({ error: 'Veri alınamadı' });
  }
});

module.exports = router;
