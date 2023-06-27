import { Box, Dialog, DialogContent, Card, CardContent, CardMedia, CardActionArea, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Topbar from "../global/Topbar";
import axios from 'axios';

const Pie = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();

  const navigatePie = () => {
    navigate('/pieChart');
  };

  const navigatePie1 = () => {
    navigate('/pieChart1');
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:2000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('File uploaded successfully');
      navigate('/pieChart1')
      const filename = response.data.filename;
    } catch (error) {
      console.error('Error uploading file:', error.response?.data?.message || error.message);
    }

    console.log(selectedFile);
    setSelectedFile(null);
    setOpenDialog(false);
  };

  return (
    <Box marginTop={10} marginLeft={14} marginRight={4}>
      <Topbar title="Pie Chart" />
      <Box display="flex">
        <Card sx={{ maxWidth: 345, m: "20px" }}>
          <CardActionArea onClick={navigatePie}>
            <CardMedia
              component="img"
              height="200"
              image={`../../assets/pie.jpg`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" fontWeight="600" component="div">
                Recent Data
              </Typography>
              <Typography variant="h5" color="text.secondary">
                This bar graph represents the usage of mobile brands across selected countries.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, m: "20px" }}>
          <CardActionArea onClick={() => setOpenDialog(true)}>
            <CardMedia
              component="img"
              height="200"
              image={`../../assets/add.jpg`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" fontWeight="600" component="div">
                Add File
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Submit your file for data visualization and analysis.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent>
          <Typography variant="h5">Upload File</Typography>
          <TextField
            type="file"
            onChange={handleFileChange}
            variant="outlined"
            fullWidth
          />
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button onClick={handleCloseDialog} variant="contained" sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button onClick={handleFileUpload} variant="contained" color="primary">
              Upload
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Pie;
