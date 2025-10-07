const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (your HTML)
app.use(express.static('.'));

// Log every request
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`🌐 [${timestamp}] ${req.ip} - ${req.method} ${req.url} - ${req.get('User-Agent')}`);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`📊 Ready for DDoS testing!`);
});