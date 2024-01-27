import mongoose from "mongoose";

import 'dotenv/config'

//console.log(process.env) // remove this after you've confirmed it is working

const mongoConnection = process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/test'


export default function connect()  {
    try {
            return mongoose.connect(mongoConnection)
    } catch(e) {
        console.error(e)
    }
}
