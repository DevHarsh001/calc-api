const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
    const { principal, rate, time } = req.body;

    if (!principal || !rate || !time) {
        return res.status(400).json({ error: "Please provide 'principal', 'rate' (%), and 'time' (years)." });
    }

    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    res.json({
        principal: principal,
        interest: interest.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        message: `After ${time} years, you will have ${totalAmount.toFixed(2)}.`
    });
});

module.exports = router;