const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
    const { total, tipPercent, people } = req.body;

    if (!total || !people) {
        return res.status(400).json({ error: "Please provide 'total' and 'people'." });
    }

    const tip = tipPercent ? (total * tipPercent) / 100 : 0;
    const grandTotal = total + tip;
    const perPerson = grandTotal / people;

    res.json({
        totalBill: total,
        tipAmount: tip.toFixed(2),
        grandTotal: grandTotal.toFixed(2),
        people: people,
        amountPerPerson: perPerson.toFixed(2),
        message: `Each person should pay ${perPerson.toFixed(2)}.`
    });
});

module.exports = router;