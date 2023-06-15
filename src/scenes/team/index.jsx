import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showModal, setShowModal] = useState(false);
  const [access, setAccess] = useState('Admin');

  const handleChange = (event) => {
    setAccess(event.target.value);
  };

  const handleClickOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {

  }

  const columns = [
    { 
      field: "registrarId", 
      headerName: "ID" 
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1, // flex is used to grow the size of cell
      cellClassName: "name-column--cell",
      color: "white"
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left", // by default the alignment is right
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      // customize the roles of the user
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            // set the color as per the access
            backgroundColor={
              access === "admin"
                ? colors.redAccent[500]
                : access === "manager"
                ? colors.greenAccent[500]
                : colors.redAccent[300]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box display = "flex" justifyContent = "space-between" alignItems = "center">
        <Header title="TEAM MEMBERS" />
        <AddButton onClick = {handleClickOpen} variant="contained" endIcon={<AddIcon />}> 
          Add Member
        </AddButton>
        <Dialog open = {showModal} onClose = {handleClose} >
            <DialogTitle 
              variant="h4"
              fontWeight="600"
              alignContent="center"
              margin = "20px 0px 0px 5px"
              > 
              Add Member 
            </DialogTitle>
            <DialogContent>
            <TextField
                  required
                  autoFocus
                  margin="dense"
                  id="id"
                  defaultValue="12345"
                  label="ID"
                  type="number"
                  fullWidth
                  variant="outlined"
              />
              <TextField
                  required
                  autoFocus
                  margin="dense"
                  id="name"
                  defaultValue="Stefan Salvatore"
                  label="Name"
                  type="text"
                  fullWidth
                  variant="outlined"
              />
              <TextField
                  required
                  autoFocus
                  margin="dense"
                  id="email"
                  defaultValue="stefan@xyz.com"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="outlined"
              />
              <TextField
                  required
                  autoFocus
                  margin="dense"
                  id="age"
                  defaultValue="25"
                  label="Age"
                  type="number"
                  fullWidth
                  variant="outlined"
              />
              <TextField
                  required
                  autoFocus
                  margin="dense"
                  id="phone"
                  defaultValue="9667314916"
                  label="Phone No."
                  type="number"
                  fullWidth
                  variant="outlined"
              />
              <Select
                 id="access"
                 value={access}
                 label="Acess Level"
                 placeholder="Access"
                 defaultValue="User"
                 onChange={handleChange}
              >
                  <MenuItem value="admin"> Admin </MenuItem>
                  <MenuItem value="user"> User </MenuItem>
                  <MenuItem value="manager"> Manager </MenuItem>
              </Select>
            </DialogContent>
            <DialogActions>
              <Box marginRight="17px">
              <Button 
                    variant="contained" 
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleSubmit}
                    color="secondary"
                    >
                    Submit
                </Button>
              </Box>
            </DialogActions>
        </Dialog>
      </Box>
      <Box
        m="0px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[400],
            borderBottom: "none",
            color: "white"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[400],
            color: "white",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.primary[800]} !important`,
          },
          "&. MuiDataGrid-cellContent":{
            color: `${colors.primary[100]} !important`,
          }
        }}
      >
        <DataGrid 
            checkboxSelection
            rows={mockDataTeam} 
            columns={columns}
            components={{ Toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
};

const AddButton = styled(Button)({
  backgroundColor: "#3a86ff",
  color: "white",
  padding: "-20px"
})

export default Team;