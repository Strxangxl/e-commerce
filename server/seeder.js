import mongoose from "mongoose";
import dotenv from "dotenv";

import users from "./users.js";
import User from "./models/userModels.js";

import connectDB from "./config/db.js";

dotenv.config()
connectDB()

const importData = async () => {
	try {
		await User.deleteMany()

		const createdUsers = await User.insertMany(users)
		const adminUser = createdUsers[0]._id

		console.log("Data imported successfully!!!")
	} catch (error) {
		console.error(error)
		process.exit(1)
	}
}

const destroyData = async () => {
	try {
		await User.deleteMany()

		console.log("Data destroyed successfully!!!")
	} catch (error) {
		console.error(error)
		process.exit(1)
	}
}

if(process.argv[2] === '-d'){
	destroyData()
} else {
	importData()
}