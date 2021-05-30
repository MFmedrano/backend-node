const mongoose = require('mongoose');



const dbConecction = async ()=>{
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex:true
        });

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error inicio de sesión');
    }    
}

module.exports = {
    dbConecction
}