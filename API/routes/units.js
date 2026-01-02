const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
    const { value, type } = req.body; 
    // type example: "meters_to_feet", "lbs_to_kg"

    if (value === undefined || !type) {
        return res.status(400).json({ error: "Please provide 'value' and 'type'." });
    }

    let result;
    let unitDisplay = "";

    switch(type.toLowerCase()) {
        case 'meters_to_feet':
            result = value * 3.28084;
            unitDisplay = "ft";
            break;
        case 'feet_to_meters':
            result = value / 3.28084;
            unitDisplay = "m";
            break;
        case 'kg_to_lbs':
            result = value * 2.20462;
            unitDisplay = "lbs";
            break;
        case 'lbs_to_kg':
            result = value / 2.20462;
            unitDisplay = "kg";
            break;
        default:
            return res.status(400).json({ error: "Invalid type! Try meters_to_feet, feet_to_meters, kg_to_lbs, or lbs_to_kg." });
    }

    res.json({
        input: value,
        type: type,
        result: result.toFixed(2),
        unit: unitDisplay,
        message: `Converted value is ${result.toFixed(2)} ${unitDisplay}.`
    });
});

module.exports = router;