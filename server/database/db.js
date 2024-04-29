const mongoose=require('mongoose')
 const Connection=async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@mycluster.y1bpkya.mongodb.net/crud?retryWrites=true&w=majority&appName=mycluster`;
    try {
        
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

module.exports=Connection;
