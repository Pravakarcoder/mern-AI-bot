 
import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
         await connect(process.env.MONGODB_URL)
       
    } catch (error) {
        throw new Error(`Error are ${error}`)
    }
}

async function disconnectFromDatabase() {
    try {
       await disconnect() 
       console.log("Sucessfully Disconnect From Database")
    } catch (error) {
         throw new Error(`Error to  Disconnect From Database ${error}`)
    }
}

export {connectToDatabase, disconnectFromDatabase}