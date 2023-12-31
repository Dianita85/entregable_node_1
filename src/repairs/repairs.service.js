const Repair = require('./repairs.model')

class RepairService {
    static async findAll(){
        return await Repair.findAll({
            where: {
                status: 'pending'
            }
        })
    }

    static async findOne(id){
        return await Repair.findOne({
            where: {
                id,
                status: 'pending'
            }
        })
    }

    static async create(data){
        return await Repair.create(data)
    }

    static async update(repair){
        return await repair.update({ status: 'completed' })
    }

    static async delete(repair){
        return await repair.update({ status: 'cancelled' })
    }
}

module.exports = RepairService