const express = require('express');
const cors = require('cors');

// Import all our calculator routes
const bmiRoutes = require('./routes/bmi');
const mathRoutes = require('./routes/math');
const gdpRoutes = require('./routes/gdp');
const discountRoutes = require('./routes/discount');
const interestRoutes = require('./routes/interest');
const tempRoutes = require('./routes/temperature');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Allow everyone to use the API

// Welcome Route
app.get('/', (req, res) => {
    res.json({ 
        message: "Welcome to the Open Calculator API! 🧮", 
        docs: "Check out index.html for documentation."
    });
});

// Register all the routes
app.use('/api/bmi', bmiRoutes);
app.use('/api/math', mathRoutes);
app.use('/api/gdp', gdpRoutes);
app.use('/api/discount', discountRoutes);
app.use('/api/interest', interestRoutes);
app.use('/api/temperature', tempRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running cute and smooth on port ${PORT} 🚀`);
    console.log(`Try: http://localhost:${PORT}/api/bmi/calculate`);
});