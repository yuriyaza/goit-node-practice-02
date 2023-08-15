const carsController = require('../controllers/Cars');
const isValidID = require('../middlewares/isValidID')

// Cannot GET /api/v1/cars

const carsRoutes = require('express').Router();

// Додати машину
carsRoutes.post('/cars', carsController.add);

// Отримати всі
carsRoutes.get('/cars', carsController.getAll);

// Отримати одну машину
carsRoutes.get('/cars/:id', isValidID, carsController.getOne);

// Обновити машину
carsRoutes.patch('/cars/:id', carsController.update);

// Видалити машину
carsRoutes.delete('/cars/:id', carsController.remove);

module.exports = carsRoutes;
