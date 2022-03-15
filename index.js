const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const session = require('express-session')
const app = express();

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


// fallback page
app.use((req,res,next)=>{
	return res.status(404);
})


const port = 3000
app.listen(port,async()=>{
	console.log(`Server is running on port ${port}`)
})