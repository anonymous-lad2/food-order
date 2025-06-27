import React from 'react'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card sx={{ width: 345 }}>
            <CardMedia 
                sx={{height:345}}
                image='https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg'
            />

            <CardContent>
                <Typography variant='h5'>
                    Indian Fast Food
                </Typography>
                <Typography variant='body'>
                    50% off on your first order.
                </Typography>
                <div className='space-y-2 py-2'>
                    <p>{"mumbai"}</p>
                    <p className='text-sm text-blue-500'>February 14, 2024 12:00 AM</p>
                    <p className='text-sm text-red-500'>February 15, 2024 12:00 AM</p>
                </div>
            </CardContent>

            {true && 
                <CardActions>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            }
        </Card>
    </div>
  )
}

export default EventCard