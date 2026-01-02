const express = require('express');
const cors = require('cors');
const bmiRoutes = require('./routes/bmi');
const mathRoutes = require('./routes/math')
const gdpRoutes = require('./routes/gdp');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (This lets people send JSON data to you)
app.use(express.json());
app.use(cors()); // This lets everyone use your API from any website!

// Welcome Route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Calculator API! 🧮" });
});

// Use the BMI routes
app.use('/api/bmi', bmiRoutes);
app.use('api/math', mathRoutes);
app.use('/api/gdp', gdpRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running cute and smooth on port ${PORT} 🚀`);
});