const mongoose = require('mongoose')
const DB_URI = 'mongodb+srv://Dylgara:Dylangara1999@clusteradsi2364482.6l3dg.mongodb.net/?retryWrites=true&w=majority'

    const dbConnect = () => {
        mongoose.connect(
            DB_URI,
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (err){
                console.log('DB: ERROR !!');
            } else {
                console.log('Conexion Correcta!');
        }
    }
);   
};

module.exports = dbConnect;