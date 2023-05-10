import mongoose from "mongoose";
const packageSchema = mongoose.Schema({
        //first page
        source:{
            type:String,
        },
        destination:{
            type:String,
        },    
        volume:{
            type:Number
        },
        quantity:{
            type:String
        },
        product_type:{
            type:String
        },
        document:{
            type:String
        },
        status:{
            type:String,
            default:"pending"
        },
        transport_id:{
            type: mongoose.Schema.ObjectId,
            ref:"Transport",
        },
        check_in:{
            type: Date,
            default : "2020-05-18T14:10:30Z"
        },
        check_out:{
            type: Date,
            default : "2020-05-18T14:10:30Z"
        },

       

    });

export default  mongoose.model('Package', packageSchema)
