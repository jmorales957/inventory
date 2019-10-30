const SaleService = require('../services/sale.service')

exports.store =async (req,res) => {
    try{
        const result  = await SaleService.saveSale(req.body)
        return res.status(200).json({
            data: result.data
        })
    }catch (e) {
    console.log(e)
    }
}