//vid 23
const mongoose = require('mongoose')

const model1 = require('../models/model1')
const productModel = require('../models/product_model')
const teacherModel = require('../models/teacher')
const arrayQuery = async (req, res) => {
    try {

        // const data =await model1.find()


        //find who work in amazon
        //   const data =await model1.find({"experience.company":"Amazon"})

        //how many student who work in 3 compinies
        //   const data =await model1.find({experience:{$size:3}})


        // find student whose  expereince have 3  or more dcoc
        //    const data =await model1.find({$and :[{experience:{$exists:true}},{$expr:{$gte:[{$size:"$experience"},3]}}]})



        //find student whose hobbies "Walking" or "reading   "
        //  const data =await model1.find({Hobbies:{$all:['Walking','Reading']}})

        //find hobbies in this
        const data = await model1.find({ Hobbies: { $in: ['Walking', 'Reading'] } })


        //document that have at least a product with name apple  and quantity 15
        return res.status(200).json({ data: data })
    } catch (error) {
        return res.status(400).json({ success: false, error: error })
    }
}


//add product

const addProduct = async (req, res) => {

    var list = [

        // "_id":1,
        [
            {
                "name": 'apple',
                "quantity": 10
            },
            {
                "name": 'orange',
                "quantity": 5
            },
            {
                "name": 'banana',
                "quantity": 20
            },
        ],


        // "_id":2,
        [
            {
                "name": 'apple',
                "quantity": 15
            },
            {
                "name": 'orange',
                "quantity": 10
            },
            {
                "name": 'banana',
                "quantity": 5
            },
        ],


    ]



    var lst = [
        {
            "name": 'apple',
            "quantity": 15
        },
        {
            "name": 'orange',
            "quantity": 10
        },
        {
            "name": 'banana',
            "quantity": 5
        },
    ];

    var doc = { product: lst }
    try {
        const d = await productModel(
            {
                product: lst
            }
        )
        var data = await d.save()
        return res.status(200).json({ data: data })
    } catch (error) {
        return res.status(400).json({ success: false, error: error })
    }
}



const addTeacher = async (req, res) => {







    var doc = { name: "jarry", age: 32, gender: 'male' }
    try {
        const d = await teacherModel(doc)

        var data = await d.save()

        return res.status(200).json({ data: data })
    } catch (error) {
        return res.status(400).json({ success: false, error: error })
    }
}



const QueryOnTeacher = async (req, res) => {

    try {

        //assending =1  small to large
       // desending=-1   lage to small
       //when age is same sort with name
       //inital mongo print only 20 result
        // const data = await teacherModel.find().sort({age:1,name:1})


        // const data = await teacherModel.find().sort({age:1,name:1}).forEach(x => printjson(x))


        
        // const data = await teacherModel.find().sort({age:1,name:1}).limit(5)

        const data = await teacherModel.find().sort({age:1,name:1}).count()


        return res.status(200).json({ data: data })
    } catch (error) {
        return res.status(400).json({ success: false, error: error })
    }
}


module.exports = {
    arrayQuery,
    addProduct,
    addTeacher,
    QueryOnTeacher

}