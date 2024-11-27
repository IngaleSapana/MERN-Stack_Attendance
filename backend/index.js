
import { connect } from "mongoose";
import app from "./app.js";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import express from 'express';
import cors from 'cors';

dotenv.config();
dbConnection();



app.listen(process.env.PORT, () => {
    console.log( `Server listening on port ${process.env.PORT} `);
    
});



