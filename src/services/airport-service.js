const CrudService = require('./crud-service');
const CrudRepository = require('../repository/crud-repository');
const { Airport } = require('../models');

class AirportService extends CrudService {
  constructor() {
    const airportRepository = new CrudRepository(Airport);
    super(airportRepository);
  }
}

module.exports = AirportService;
