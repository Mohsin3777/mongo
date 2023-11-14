const mongoose =require('mongoose')
const weSourceModelResturantSchema =mongoose.Schema({

    
        address: {
          "building": {
            "type": "Date"
          },
          coord: {
            "type": [
              "Number"
            ]
          },
          street: {
            "type": "String"
          },
          zipcode: {
            "type": "Date"
          }
        },
        borough: {
          "type": "String"
        },
        cuisine: {
          "type": "String"
        },
        grades: {
          "type": [
            "Mixed"
          ]
        },
        name: {
          "type": "String"
        },
        restaurant_id: {
          "type": "String"
        }
      
})

module.exports = mongoose.model("weSourceModelResturantSchema", weSourceModelResturantSchema);