/**
 * Monitoring Service - index.js
 * Author: Subrat Tandon
 * Description: Advanced Express server with health checks, logging, and error handling.
 */

// Load New Relic FIRST (must be first line, no condition!)
require('newrelic');

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).send('Hello from Node.js + DevOps Project 🚀');
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage(),
    });
});

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Monitoring service listening on port ${PORT}`);
});
