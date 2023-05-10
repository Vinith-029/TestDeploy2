import mongoose from 'mongoose';

const transportSchema = mongoose.Schema({
  
    vehicle_Number:{
        type:String,
    },

    company_name: {
      type: String,
    },
    transport_id:{
        type:Number
    },
    contact: {
        type: Number
    },
    vehicle_type: {
      type: String,
    },

    goods_type: {
      type: String,
    },

    source: {
      type: String,
    },

    destination: {
      type: String,
    },

    price: {
      type: Number,
    },
    status:{
        type:String,
        default:"Pending"
    },
    document: {
      type: String,
    },
    vendor_details: {
        type: mongoose.Schema.ObjectId,
        ref:"Login",
    }
});

export default mongoose.model('Transport', transportSchema);
