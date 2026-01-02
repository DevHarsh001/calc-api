const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
    const { value, from, to } = req.body;
    // Expected units: "celsius" or "fahrenheit"

    if (value === undefined || !from || !to) {
        return res.status(400).json({ error: "Please provide 'value', 'from', and 'to' (celsius/fahrenheit)." });
    }

    let result;
    let operation = `${from} to ${to}`;

    if (from.toLowerCase() === 'celsius' && to.toLowerCase() === 'fahrenheit') {
        result = (value * 9/5) + 32;
    } else if (from.toLowerCase() === 'fahrenheit' && to.toLowerCase() === 'celsius') {
        result = (value - 32) * 5/9;
    } else {
        result = value; // Same unit or invalid conversion
        operation = "No conversion needed";
    }

    res.json({
        input: `${value} ${from}`,
        output: `${result.toFixed(2)} ${to}`,
        message: `It is ${result.toFixed(2)} degrees ${to}!`
    });
});

module.exports = router;