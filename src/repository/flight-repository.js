const { Flights } = require("../models/index");
const { Op } = require("sequelize");  

class FlightRepository {
    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if (data.minPrice && data.maxPrice) {
            filter.price = { 
                [Op.gte]: data.minPrice,
                [Op.lte]: data.maxPrice
            };
        } else if (data.minPrice) {
            filter.price = { [Op.gte]: data.minPrice };
        } else if (data.maxPrice) {
            filter.price = { [Op.lte]: data.maxPrice };
        }
      
        console.log("Filter created:", filter);  
        return filter; 
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer:", error);
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer:", error);
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            console.log("Filter Object:", filterObject);  // Log the filter object before querying
            const flights = await Flights.findAll({
                where: filterObject
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer:", error);
            throw { error };
        }
    }
}

module.exports = FlightRepository;
