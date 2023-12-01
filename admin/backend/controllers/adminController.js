const Admin = require('../models/AdminModel');

const updateLimit = async (req, res) => {
  try {
    const { limit } = req.body;
    console.log(limit);
    const updatedAdmin = await Admin.findOneAndUpdate(
      {},
      { limit: limit },
      { new: true, upsert: true }
    );

    res.status(200).json(updatedAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getLimit = async (req, res) => {
  try {
    const admin = await Admin.findOne({});
    if (!admin) {
      res.status(404).json({ message: 'Admin document not found' });
      return;
    }

    const limit = admin.limit;
    res.status(200).json({ limit });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { 
  updateLimit 
}
