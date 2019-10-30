const SaleModel = require('../models/sale')
const SAleDetailModel = require('../models/sal_detail')

module.exports = {
    saveSale: async data => {
        const sale = await new SaleModel()
        sale.date = new Date()
        sale.client_id= "5db9bc262103650e63e80192"

        const sale_detail = await new SAleDetailModel()
        sale_detail.sale_id = sale._id
        sale_detail.product_id = "5db9bc262103650e63e80192"
        sale_detail.quantity = 2
       // sale.save()

        return {
            data: {
                ...sale._doc,
                ...sale_detail._doc
            }
        }

    }
}