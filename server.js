// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Dummy data for charts
const salesData = [10, 20, 30, 40, 50];
const revenueData = [30, 40, 35, 50, 49];
const candlestickData = [
    { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
    { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] }
];

// Route for column chart data
app.get('/sales', (req, res) => {
    res.json({
        series: [{ name: 'Sales', data: salesData }],
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    });
});

// Route for line chart data
app.get('/revenue', (req, res) => {
    res.json({
        series: [{ name: 'Revenue', data: revenueData }],
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    });
});

// Route for candlestick chart data
app.get('/candlestick', (req, res) => {
    res.json({
        series: [{ data: candlestickData }],
        xaxis: { type: 'datetime' }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
