import mongoose from "mongoose";

const Todoschema=new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default: false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

//const todo=mongoose.model('todo',Todoschema);
const todo=mongoose.models.todo||mongoose.model("todo",Todoschema)


export default todo;