const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		quote: { type: String },
	},
	{ collection: 'User' }
)

const memberSchema = new mongoose.Schema(
	{
	  id: { type: Number, required: true },
	  name: { type: String, required: true },
	  email: { type: String, required: true },
	  age: { type: Number, required: true },
	  phone: { type: String, required: true },
	  accessLevel: { type: String, required: true },
	},
	{ collection: 'members' }
  );

const model = mongoose.model('User', User)
const Member = mongoose.model('Member', memberSchema);

module.exports = {model, Member}