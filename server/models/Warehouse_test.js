import mongoose from "mongoose";

const testSchema = mongoose.Schema({
    // warehouse_name : {
    //     tpye:String
    // },
    product_name:{
        type : String
    },
    product_id:{
        type : Number
    },
    product_type:{
        type : String
    },
    vendor_name:{
        type : String
    },
    quantity:{
        type : Number
    },
    volume :{
        type : Number
    },
    check_in:{
        type : String
    },
    check_out:{
        type : String
    }
},
{ timestamps: true}
);

export default mongoose.model("Warehouse_test", testSchema)