const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Simulated database to store cylinder inventory data
const cylinderInventory = {
  cylinder1: { remainingVolume: 1000 },
  cylinder2: { remainingVolume: 800 },
  // ... Add more cylinders as needed
};

app.get('/get_remaining_volume/:cylinderId', (req, res) => {
  const { cylinderId } = req.params;
  if (cylinderInventory[cylinderId]) {
    res.json(cylinderInventory[cylinderId]);
  } else {
    res.status(404).json({ error: 'Cylinder not found' });
  }
});

app.post('/update_volume/:cylinderId', (req, res) => {
  const { cylinderId } = req.params;
  const { volumeUsed } = req.body;
  
  if (cylinderInventory[cylinderId] && typeof volumeUsed === 'number') {
    cylinderInventory[cylinderId].remainingVolume -= volumeUsed;
    res.json({ message: 'Volume updated successfully' });
  } else {
    res.status(400).json({ error: 'Invalid data format' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
