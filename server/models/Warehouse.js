import mongoose from 'mongoose';

const warehouseSchema = mongoose.Schema({
    warehouse_email:{
        type:String
    },
    warehouse_name:{
        type:String
    },
    // product_id:[{
    //     type : mongoose.Schema.ObjectID,
    //     ref : "Package",
    // }],
    total_area:{
        type: String
    },
    area_occupied:{
        type: String
    },
    area_remaining:{
        type: String
    },
    check_in:{
        // type: Date,
        // required:true,
        // default : "2020-05-18T14:10:30Z"
        type:String,
        required:true
    },
    check_out:{
        // type: Date,
        // required:true,
        type:String,
    },
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
    w_email:{
        type: String,
    },
    w_password:{
        type: String,
    },  
    img :{
        data : String,
        contentType : String
    },
    // employee_details:[{
    //     employee_name:{
    //         type:String
    //     },
    //     job_title:{
    //         type:String
    //     },
    //     employee_contact:{
    //         type:Number
    //     },
    //     warehouse_id:{
    //         type:mongoose.Schema.ObjectId,
    //         ref:"Warehouse",
    //     },

   

    // }],
},
{ timestamps: true }
);



//module.exports = mongoose.model('Warehouse', warehouseSchema)
export default mongoose.model('Warehouse',warehouseSchema)
