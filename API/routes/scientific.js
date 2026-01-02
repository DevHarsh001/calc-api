const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
    const { num, operation, power } = req.body; 
    // 'power' is only needed for the 'pow' operation

    if (num === undefined || !operation) {
        return res.status(400).json({ error: "Please provide 'num' and 'operation'." });
    }

    let result;
    const op = operation.toLowerCase();

    switch(op) {
        case 'sin':
            result = Math.sin(num); // Assumes radians
            break;
        case 'cos':
            result = Math.cos(num);
            break;
        case 'tan':
            result = Math.tan(num);
            break;
        case 'log':
            result = Math.log10(num);
            break;
        case 'sqrt':
            result = Math.sqrt(num);
            break;
        case 'pow':
            if (power === undefined) return res.status(400).json({ error: "For 'pow', please provide a 'power' number." });
            result = Math.pow(num, power);
            break;
        default:
            return res.status(400).json({ error: "Invalid operation! Try sin, cos, tan, log, sqrt, or pow." });
    }

    res.json({
        input: num,
        operation: op,
        result: result.toFixed(4),
        message: `Scientific calculation successful! 🧪`
    });
});

module.exports = router;