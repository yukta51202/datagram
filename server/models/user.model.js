const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
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

  const eventSchema = new mongoose.Schema({
	selectedDate: {
	  type: Date,
	  required: true,
	},
	title: {
	  type: String,
	  required: true,
	},
	desc: {
	  type: String,
	  required: true,
	},
	email: {
	  type: String,
	  required: true,
	},
  });

  const fileSchema = new mongoose.Schema({
	name: {
	  type: String,
	  required: true,
	},
	data: {
	  type: Buffer,
	  required: true,
	},
	mimeType: {
	  type: String,
	  required: true,
	},
  });
  
const User = mongoose.model('User', UserSchema);
const Member = mongoose.model('Member', memberSchema);
const Event = mongoose.model('Event', eventSchema);
const File = mongoose.model('File', fileSchema);

module.exports = { User, Event, Member, File };