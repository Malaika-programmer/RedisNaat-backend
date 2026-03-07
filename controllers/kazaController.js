const { redisClient } = require("../server"); // Redis client import karein

exports.calculateKaza = async (req, res) => {
  try {
    const { userId, dob, startAge } = req.body; // dob: "1995-05-20", startAge: 7

    const birthDate = new Date(dob);
    const startDate = new Date(
      birthDate.setFullYear(birthDate.getFullYear() + parseInt(startAge)),
    );
    const today = new Date();

    // Days difference calculate karein
    const diffTime = Math.abs(today - startDate);
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (today < startDate) {
      return res.status(400).json({ message: "Start age is in the future!" });
    }

    // Default totals (5 Namazein + Witr = 6 per day)
    const initialKaza = {
      fajr: totalDays,
      dhuhr: totalDays,
      asr: totalDays,
      maghrib: totalDays,
      isha: totalDays,
      witr: totalDays,
      totalDays: totalDays,
    };

    // Redis mein save karein (Key: kaza:userId)
    await redisClient.hSet(`kaza:${userId}`, {
      dob: dob,
      startAge: startAge.toString(),
      fajr: initialKaza.fajr.toString(),
      dhuhr: initialKaza.dhuhr.toString(),
      asr: initialKaza.asr.toString(),
      maghrib: initialKaza.maghrib.toString(),
      isha: initialKaza.isha.toString(),
      witr: initialKaza.witr.toString(),
      completed_fajr: "0",
      completed_dhuhr: "0",
      completed_asr: "0",
      completed_maghrib: "0",
      completed_isha: "0",
      completed_witr: "0",
    });

    res.json({
      message: "Kaza calculated and saved to Redis",
      data: initialKaza,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
