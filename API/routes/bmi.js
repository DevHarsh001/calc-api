const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
    const { weight, height } = req.body;

    // 1. Validation: Make sure they sent us numbers!
    if (!weight || !height) {
        return res.status(400).json({ 
            error: "Oh no! Please provide both 'weight' (kg) and 'height' (m)." 
        });
    }

    // 2. The Math Logic (BMI = kg / m^2)
    const bmiValue = (weight / (height * height)).toFixed(2);
    let category = '';

    // 3. Determine Category
    if (bmiValue < 18.5) category = 'Underweight';
    else if (bmiValue < 24.9) category = 'Normal weight';
    else if (bmiValue < 29.9) category = 'Overweight';
    else category = 'Obesity';

    // 4. Send the result back
    res.json({
        bmi: parseFloat(bmiValue),
        category: category,
        message: `Your BMI is ${bmiValue} which is considered ${category}.`
    });
});

module.exports = router;