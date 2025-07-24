import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CreateIngredientForm = () => {

    const [formData, setFormData] = useState({name: '', ingredientCategoryId: ''})

    const handleSubmit = () => {
        const data = {
            name: formData.name,
            ingredientCategoryId:{
                id: 1
            }
        }
        console.log(data)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]:value
        })
    }
  return (
    <div className=''>
        <div className='p-5'>
            <h1 className='text-gray-400 text-center text-xl pb-10'>Create Food Category</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>

                <TextField
                    fullWidth
                    id='categoryName'
                    name='categoryName'
                    label='Category Name'
                    variant='outlined'
                    onChange={handleInputChange}
                    value={FormData.categoryName}
                    />

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.ingredientCategoryId}
                        label="Category"
                        onChange={handleInputChange}
                        name='ingredientCategoryId'
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>

                <Button type='submit' variant='contained' color='primary'> Create Category</Button>
            </form>

        </div>
    </div>
  )
}

export default CreateIngredientForm