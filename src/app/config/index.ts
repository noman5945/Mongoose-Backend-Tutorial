import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:path.join(process.cwd(),'.env')})

export default{
    port:process.env.PORT,
    db_connection_url:process.env.DB_CONNECTION,
    bycrypt_salt_rounds:process.env.BYCRYPT_SALT_ROUNDS
}
