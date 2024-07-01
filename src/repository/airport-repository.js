const CrudRepository=require('./crud-repository')
const{Airport}= require('../models/index')
class AirportRepository extends CrudRepository{
    constructor(Airport){
        super(Airport);
    }
}

module.exports=AirportRepository;