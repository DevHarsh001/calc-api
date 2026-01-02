const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
    // We expect these values from the user
    const { consumption, investment, government, exports, imports } = req.body;

    // 1. Validation: Check if everything is a number
    if (isNaN(consumption) || isNaN(investment) || isNaN(government) || isNaN(exports) || isNaN(imports)) {
        return res.status(400).json({ 
            error: "Please provide numbers for: consumption, investment, government, exports, and imports." 
        });
    }

    // 2. The Logic: GDP = C + I + G + (X - M)
    const netExports = exports - imports;
    const gdpValue = consumption + investment + government + netExports;

    // 3. Send back the answer
    res.json({
        formula: "C + I + G + (X - M)",
        components: {
            consumption,
            investment,
            government,
            netExports
        },
        gdp: gdpValue,
        message: `The calculated Gross Domestic Product is ${gdpValue}`
    });
});

module.exports = router;