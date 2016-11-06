// recommendation.js
// Endorse

// CALL PACKAGES
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// recommendation schema
var RecommendationSchema = new Schema({
	category : {type : String, required : true},
	comment : {type : String, required : false},
	title : {type : String, required : true},
	from_id : {type : String, required : true},
	to_id : {type : String, required : true},
}, {
	timestamps: true
});

// return model
module.exports = mongoose.model("Recommendation", RecommendationSchema);