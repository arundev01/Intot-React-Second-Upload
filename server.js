const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://arundev2318:arun2118@cluster0.wv8a5.mongodb.net/registrationDB")

app.post('/api/SignUp', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
		
	}

	if(user){

		return res.json({ status: 'ok', user: true })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.get("/api/data", async(req,res) => {

	User.find()
	.then(foundDetails => res.json(foundDetails))
})

app.listen(4000, () => {
	console.log('Server started on 4000')
})

