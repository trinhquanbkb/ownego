const express = require('express')
const app = express();
const { sequelize } = require('./models/index')
const { rootRouter } = require('./router/indexRouter')
var cors = require('cors')

app.use(express.json())

app.use(cors())
app.use("/api/v1", rootRouter)


app.listen(3000, async () => {
    console.log(`listening http://localhost:3000`)
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})