const connectToMongo = require('./db');
connectToMongo();
const { User, Event, Member, File } = require('./models/user.model');
const multer = require('multer');

const express = require('express')
const app = express()

const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

// Create a storage instance specifying the destination and filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // set where you want to store
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original file name for storing
  },
});

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

app.post('/api/members', async (req, res) => {
  try {
    // Extract the form values from the request body
    const { id, name, email, age, phone, accessLevel } = req.body;
    await Member.create({
      id,
      name,
      email,
      age,
      phone,
      accessLevel,
    });
    res.status(200).json({ message: "Member created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Creating Member" });
  }
})

app.get('/api/members', async (req, res) => {
  try {
    const members = await Member.find({});
    res.status(200).json(members);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error showing" });
  }
})

// app.post('/api/save-event', async (req, res) => {
//   const { date, title, desc, email } = req.body; // Update variable names here

//   try {
//     // Create a new event document
//     const event = new Event({
//       selectedDate: date, // Use the 'date' variable instead of 'selectedDate'
//       title,
//       desc,
//       email,
//     });

//     // Save the event to the database
//     await event.save();

//     res.status(201).json({ message: 'Event saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error saving event' });
//   }
// });

// app.get('/api/events', async (req, res) => {
//   try {
//     const events = await Event.find({});
//     res.status(200).json(events);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error retrieving events' });
//   }
// });

// Create the multer instance with the storage configuration
const upload = multer({ storage });

app.post('/api/save-file', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file was uploaded' });
    }

    // Create a new file document
    const file = new File({
      name: req.file.originalname, // Set the name field
      mimeType: req.file.mimetype, // Set the mimeType field
      data: req.file.buffer, // Set the data field
    });

    // Save the file to the database
    await file.save();

    res.status(201).json({ message: 'File saved to database successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving file to database' });
  }
});


app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file was uploaded' });
  }

  console.log('File uploaded:', req.file.filename);

  return res.status(200).json({ filename: req.file.filename });
});

app.get('/api/data', async (req, res) => {
	try {
	  const files = await File.find({}); // Fetch all uploaded files from the 'File' model
	  res.status(200).json(files);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: 'Error retrieving data' });
	}
  });

app.listen(2000, () => {
  console.log('Server running at 2000');
});
