const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    // 1. Check if numbers are there
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: "Please provide 'num1' and 'num2'!" });
    }

    let result;
    
    // 2. Do the math based on the 'operation' they asked for
    switch(operation.toLowerCase()) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if(num2 === 0) return res.status(400).json({ error: "You can't divide by zero! 💥" });
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: "Invalid operation! Try add, subtract, multiply, or divide." });
    }

    // 3. Send back the answer
    res.json({
        input: `${num1} ${operation} ${num2}`,
        result: result,
        message: "Calculation success! ✨"
    });
});

module.exports = router;