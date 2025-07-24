import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initialValues = {
    image:'',
    location:'',
    name:'',
    startedAt: dayjs(),
    endAt: dayjs(),
  }

const Events = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formValues, setFormValues] = useState(initialValues)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)
    console.log("Start:", dayjs(formValues.startedAt).format("MM/DD/YYYY hh:mm A"));
    console.log("End:", dayjs(formValues.endAt).format("MM/DD/YYYY hh:mm A"));
    setFormValues(initialValues);
  }

  const handleFormChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  }

  const handleDateChange = (date, dateType) => {
    setFormValues({...formValues, [dateType]: date});
  }

  return (
    <div>
      <div className='p-5'>
        <Button onClick={handleOpen} variant="contained">Create New Event</Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit}>

              <Grid container spacing={3}>

                <Grid item size={{xs: 12}}>
                  <TextField 
                    name='image'
                    label="Image URL"
                    variant="outlined"
                    fullWidth
                    value={formValues.image}
                    onChange={handleFormChange}
                  />
                </Grid>

                <Grid item size={{xs: 12}}>
                  <TextField 
                    name='location'
                    label="Location"
                    variant="outlined"
                    fullWidth
                    value={formValues.location}
                    onChange={handleFormChange}
                  />
                </Grid>

                <Grid item size={{xs: 12}}>
                  <TextField 
                    name='name'
                    label="Event Name"
                    variant="outlined"
                    fullWidth
                    value={formValues.name}
                    onChange={handleFormChange}
                  />
                </Grid>

                <Grid item size={{xs: 12}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Start Date and Time"
                    value={formValues.startedAt}
                    onChange={(newValue) => {
                      handleDateChange(newValue, 'startedAt');
                    }}
                    inputFormat="MM/dd/yyyy hh:mm a"
                    className='w-full'
                    sx={{ width: '100%' }}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item size={{xs: 12}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="End Date and Time"
                    value={formValues.endAt}
                    onChange={(newValue) => {
                      handleDateChange(newValue, 'endAt');
                    }}
                    inputFormat="MM/dd/yyyy hh:mm a"
                    className='w-full'
                    sx={{ width: '100%' }}
                  />
                </LocalizationProvider>
              </Grid>

            </Grid>

            <Button type="submit" variant="contained" > Create Event</Button>
            </form>
          </Box>
        </Modal>
        </div>
    </div>
  )
}

export default Events