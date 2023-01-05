import mongoose from "mongoose";

const Connection = async (username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@mern-todo.jlncukk.mongodb.net/?retryWrites=true&w=majority`;

    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect(URL);
        console.log("!!! Connected to Database");
    }catch(error){
        console.log('Error while connecting to database',error);
    }
}

export default Connection;