import app from './app'
import config from './app/config';
import mongoose from 'mongoose';

const port=config.port
const connection_string=config.db_connection_url

async function main() {
    try{
        await mongoose.connect(connection_string as string);
        app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
        })
  
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }catch(error){

    }
    
}

main()

