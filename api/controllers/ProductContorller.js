const Product = require('../models/product')
const multer = require('multer')
const path = require('path');
const fs = require('fs')

const Storage = multer.diskStorage({
    destination: './public/products/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Solo Imagenes');
    }
}


const upload = multer({
    storage: Storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    }
}).single('image_url')

exports.index = async (req, res) => {
    try {
        const product = await Product.find()
        return res.status(200).json({
            message: 'Products',
            success: true,
            data: product
        })
    } catch (e) {
        console.log(e)
    }
}

exports.store = async (req, res) => {
    const product = await new Product()
    upload(req, res, (err) => {
        if (err) {

           return res.status(400).json({
                errors: {
                    error: {
                        message: err
                    }
                }
           })
        } else {
            if (req.file != undefined) {
                product.image_url = req.file.path
                console.log(req.file)
            }
            product.name = req.body.name
            product.description = req.body.description
            product.price = req.body.price
            product.quantity = req.body.quantity
            console.log(product)
            product.save(function (err) {
                if (err) {
                    switch (err.name) {
                        case 'ValidationError':
                            return res.status(400).json(err)
                            break;
                        default:
                            return res.status(500).json({
                                message: e.message,
                                errors: 'Error del servidor '
                            })

                    }
                }

                return res.status(200).json({
                    message: 'Producto Agregado',
                    success: true,
                    data: product
                })

            })
        }
    })

}

exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        product.name = req.body.name
        product.description = req.body.description
        product.price = req.body.price
        product.quantity = req.body.quantity
        product.save()
        console.log(product)
        return res.status(200).json({
            message: 'Product updated',
            success: true,
            data: product
        })
    } catch (e) {
        switch (e.name) {
            case 'ValidationError':
                return res.status(400).json({
                    message: e.message,
                    errors: e.errors,

                })
                break;
            default:
                return res.status(500).json({
                    message: e.message,
                    errors: 'Error del servidor '

                })

        }

    }
}

exports.delete = async (req, res) => {
    try {

        const id = req.params.id
        const product = await Product.findById(id)
        const path = product.image_url

        fs.access(path, err => {
            if(!err) {
                fs.unlink(path, function (err) {
                    console.log(err)
                })
            } else {
                console.log(err)
            }
        })

        product.remove()

        return res.status(200).json({
            message: 'Product deleted',
            success: true,

        })
    } catch (e) {
        console.log(e)
    }
}


