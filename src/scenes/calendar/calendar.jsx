import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Topbar from "../global/Topbar";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  // const [desc, setDesc] = useState('');
  // const [email, setEmail] = useState('');

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    if (title && selectedDate) {
      const { dateStr, startStr, endStr, allDay } = selectedDate;
      const calendarApi = selectedDate.view.calendar;
      calendarApi.unselect();
      
      calendarApi.addEvent({
        id: `${dateStr}-${title}`,
        title: title,
        start: startStr,
        end: endStr,
        allDay: allDay,
      });
    }
  
    setShowModal(false); // Close the modal after submitting
    setTitle(''); // Clear the title input
  };

  const handleDateClick = (selected) => {
    setSelectedDate(selected);
    setShowModal(true);
  };


  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box marginTop={12}
    marginLeft={14}
    marginRight={4}>
      <Topbar title="Calendar" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h4" fontWeight="bold">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.blueAccent[400],
                  color: "white",
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            themeSystem="Lux"
            theme="Lux"
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
          <Dialog open = {showModal} onClose = {handleClose} >
            <DialogTitle 
              variant="h4"
              fontWeight="600"
              alignContent="center"
              margin = "20px 0px 0px 5px"
              > 
              Add Event 
            </DialogTitle>
            <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              id="title"
              value={title}
              label="Event Name"
              type="text"
              fullWidth
              variant="outlined"
              onChange={(event) => setTitle(event.target.value)}
            />
              {/* <TextField
                  required
                  multiline
                  autoFocus
                  margin="dense"
                  id="desc"
                  defaultValue="File System, Commands, Architecture, Advantages"
                  label="Description"
                  type="text"
                  maxRows={4}
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
              /> */}
            </DialogContent>
            <DialogActions>
              <Box marginRight="17px">
              <Button 
                    variant="contained" 
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleSubmit}
                    color="secondary"
                    type="submit"
                    >
                    Submit
                </Button>
              </Box>
            </DialogActions>
        </Dialog>
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;