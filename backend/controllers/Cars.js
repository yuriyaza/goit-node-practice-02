const CarsModel = require('../models/carsModel');
const asyncHandler = require('express-async-handler');

class Cars {
  add = asyncHandler(async (req, res) => {
    const { title, price } = req.body;
    if (!title || !price) {
      res.status(400);
      throw new Error('Provide all required fields');
    }
    const car = await CarsModel.create({ ...req.body });
    res.status(201).json({ code: 201, data: car });
  });

  getAll = asyncHandler(async (req, res) => {
    const cars = await CarsModel.find({});
    res.status(200).json({ code: 200, data: cars, qty: cars.length });
  });

  getOne = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const car = await CarsModel.findById(id, '-__v');
    if (car === null) {
      res.status(404);
      throw new Error('Car not found');
    }
    res.status(200).json({ code: 200, data: car });
  });

  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const car = await CarsModel.findByIdAndUpdate(id, { ...data }, { new: true });
    res.status(200).json({ code: 200, data: car });
  });

  remove = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const car = await CarsModel.findById(id, '-__v');
    await car.deleteOne();
    res.status(200).json({ code: 200, data: car._id });
  });
}

module.exports = new Cars();
