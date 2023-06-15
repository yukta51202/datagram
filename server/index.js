const connectToMongo = require('./db');
connectToMongo();
const User = require('./models/user.model')

const express = require('express')
const app = express()

const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

app.post('/api/login', async (req, res) => {
	console.log(req.body)
    const {email, password} = req.body;
    const user = await User.findOne({email})

	if (!user) {
		return res.json({ status: 'error', user: false })
	}

	const isPasswordValid = await bcrypt.compare(
		password,
		user.password
	)

    if (isPasswordValid) {
        // JWT allows us to create a unique token to verify that the user is legit.
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123' // The token generated upon Login is a base-64 encoded version of your payload encoded. The payload is between the two dots. No one can temper with the token as it will lead to it's distortion.
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.listen(2000, () => {
    console.log("Server running at 2000")
})