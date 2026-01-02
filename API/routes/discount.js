const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
    const { originalPrice, discountPercent } = req.body;

    if (!originalPrice || !discountPercent) {
        return res.status(400).json({ error: "Please provide 'originalPrice' and 'discountPercent'." });
    }

    const saved = (originalPrice * discountPercent) / 100;
    const finalPrice = originalPrice - saved;

    res.json({
        originalPrice: originalPrice,
        discountPercent: discountPercent + "%",
        amountSaved: saved.toFixed(2),
        finalPrice: finalPrice.toFixed(2),
        message: `You save ${saved.toFixed(2)} and pay ${finalPrice.toFixed(2)}! 💸`
    });
});

module.exports = router;