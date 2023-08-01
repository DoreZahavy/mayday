import dotenv from 'dotenv'

dotenv.config()

// export default {
//   dbURL: 'mongodb+srv://theUser:thePass@cluster0-klgzh.mongodb.net/test?retryWrites=true&w=majority',
//   dbName : 'board_db'
// }

export default {
  dbURL: process.env.ATLAS_URL,
  dbName: process.env.ATLAS_DB_NAME,
}