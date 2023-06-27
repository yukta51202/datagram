import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import TableViewIcon from '@mui/icons-material/TableView';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TuneIcon from '@mui/icons-material/Tune';
import axios from 'axios';
import {TextField} from '@mui/material';
import BarChart from '../../components/BarChart'

const Create = () => {
  const navigate = useNavigate(); // To navigate to the new route
  const [open, setOpen] = useState(false); // State to control the modal open/close
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file
  const [error, setError] = useState(null); // State to store error message
  const [chartData, setChartData] = useState(null); // State to store the formatted chart data

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files.item(0);
    setSelectedFile(file);
  };

  const processData = (data) => {
    // Process the data as needed to fit the format expected by the bar graph
    const formattedData = data.map((item, index) => ({
      id: `Item ${index + 1}`,
      value: item.value
    }));

    return formattedData;
  };

  const fetchData = async (filename) => {
    try {
      const response = await axios.get(`http://localhost:2000/api/data?filename=${filename}`);
      const data = response.data;
      const processedData = processData(data);
      setChartData(processedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile, selectedFile.name);

      try {
        const response = await axios.post('http://localhost:2000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('File uploaded successfully');
        navigate('/workspace')

        const filename = response.data.filename;
        fetchData(filename);
        saveFileToDatabase(filename); // Save the filename to the database
      } catch (error) {
        console.error('Error uploading file:', error.response?.data?.message || error.message);
        setError('Error uploading file');
      }
    }
  };

  const saveFileToDatabase = async (filename) => {
    try {
      const response = await axios.post('http://localhost:2000/api/save-file', { filename });
      console.log('File saved to database:', response.data);
    } catch (error) {
      console.error('Error saving file to database:', error);
    }
  };

  return (
    <Box marginTop={10} marginLeft={10} marginRight={4}>
      <Box>
        <Card sx={{ maxWidth: 1100, m: '50px', marginLeft: '140px', marginTop: '100px' }}>
          <CardActionArea sx={{ display: 'flex', marginLeft: '40px' }} onClick={handleOpen}>
            <CardContent sx={{ width: 700 }}>
              <Typography gutterBottom variant="h4" fontWeight="700" component="div">
                Build your first report
              </Typography>
              <Typography gutterBottom variant="h6" fontWeight="600" component="div">
                <TableViewIcon /> Add and prepare your data
              </Typography>
              <Typography gutterBottom variant="h6" fontWeight="600" component="div">
                <AssessmentIcon /> Generate report
              </Typography>
              <Typography gutterBottom variant="h6" fontWeight="600" component="div">
                <TuneIcon /> Customize to suit your needs
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="300"
              image={`../../assets/addReport.jpg`}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Box>

      <Typography variant="h3" fontWeight="600" component="div" marginLeft={60}>
        Add data to start building a report
      </Typography>

      <Box marginLeft={55}>
        <Box display="flex">
          <Card sx={{ maxWidth: 300, m: 5 }}>
            <CardActionArea onClick={handleOpen}>
              <CardContent>
                <CardMedia
                  component="img"
                  image={`../../assets/addTable.png`}
                  height={100}
                  width={100}
                  style={{ maxWidth: '60%', maxHeight: '60%', margin: 'auto' }}
                />
                <Typography marginTop={2} variant="h6">
                  Submit your data file
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 300, m: 5 }}>
            <CardActionArea>
              <CardContent>
                <CardMedia
                  component="img"
                  image={`../../assets/addData.png`}
                  height={100}
                  width={100}
                  style={{ maxWidth: '60%', maxHeight: '60%', margin: 'auto' }}
                />
                <Typography marginTop={2} variant="h6">
                  Pick a published dataset
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>

      {chartData && <BarChart data={chartData} />}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontSize: 20, color: 'black' }}>Submit Your Data File</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Box display="flex" alignItems="center">
              <Box display="flex" flexDirection="column" alignItems="flex-start" width="100%">
              <TextField label="Name" variant="outlined" fullWidth />
                <Typography sx={{ fontSize: 16, fontWeight: 'bold', marginBottom: '5px', marginTop: 3}}>Choose a file:</Typography>
                <input type="file" name='file' onChange={handleFileChange} />
                {error && <Typography color="red">{error}</Typography>}
              </Box>
            </Box>
            <DialogActions sx={{marginTop: 3}}>
              <Button onClick={handleClose} variant="contained" color="error">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Create;
