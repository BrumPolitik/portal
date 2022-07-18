const express = require("express")
var cors = require("cors")
const multer = require("multer")
const compression = require("compression");
const connectDB = require('./config/db');
var bodyParser = require('body-parser');
const helmet = require("helmet");
const exhibitions = require('./API/exhibitions')
const artists = require('./API/artists')
const { BlobServiceClient, StorageSharedKeyCredential } = require('@azure/storage-blob');
const { DefaultAzureCredential } = require('@azure/identity');

const app = express()
connectDB()
app.use(cors({origin: true, credentials: true}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs");

app.use(compression())
app.use(helmet());
app.use(express.json({extended: false}))

//routes api
app.use('/API/exhibitions', exhibitions)
app.use('/API/artists', artists)


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`));