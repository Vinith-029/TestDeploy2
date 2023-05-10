import mongoose from 'mongoose';

const ware_currentSchema = mongoose.Schema({
    product_name:{
        type : String,
    },
    product_type:{
        type : String,
    },
    quantity:{
        type : Number
    },
    vendor_name:{
        type : String
    },
    product_ID:{
        type : Number
    },
    volume : {
        type : Number
    }
},
{ timestamps: true }
);



//module.exports = mongoose.model('Warehouse', warehouseSchema)
export default mongoose.model('Ware_current',ware_currentSchema)
