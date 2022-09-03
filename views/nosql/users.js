const mongoose = require('mongoose')

const clientScheme = new mongoose.Schema(
    {
        nombre:{
            type:String

        },
        tel:{
            type:Number
            
        },
        ubicacion:{
            
            center:[Number, Number],
            zoom:{
                type:Number
            }
        },
            
        totalComprado:{
            type:Number
        },
        historicoCompras:{
            type:Number
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model ("cliente", UserScheme) 