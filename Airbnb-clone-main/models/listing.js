const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { string } = require('joi');

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {

        url:String,
        filename:String,
        // type: String,
        // default:
        //     'https://images.unsplash.com/photo-1584493737987-b2f0c75a8729?w=500&auto=format&fit=crop&q=60',
        // set: (v) =>
        //     v === ''
        //         ? 'https://images.unsplash.com/photo-1584493737987-b2f0c75a8729?w=500&auto=format&fit=crop&q=60'
        //         : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    category:{
        type:String,
        enum:["moutains","arctic","farms","deserts"],
    }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing) {
        await Review.deleteMany({_id: {$in:listing.reviews}});
    }
    });
    


const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
