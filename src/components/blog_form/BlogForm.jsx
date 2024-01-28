import { Box, Typography, Card, Stack, Input, InputLabel, TextareaAutosize, Button, CardContent, Link } from '@mui/material';
import React from 'react'
import {useNavigate} from 'react-router-dom'

const BlogForm=()=>{
    const navigate=useNavigate()

    return (
        <Box sx={{backgroundImage:`url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbG9yJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')`, backgroundRepeat:'no-repeat', backgroundSize:'cover', display:'flex', justifyContent:'center'}}>
                <Card sx={{backgroundColor:'ButtonFace', padding:'3vh 3vw', width:'20vw', marginTop:'20vh', marginBottom:'33vh'}}>
                    <CardContent>
                        <Typography variant='h3'>Add Blog</Typography>
                        <Stack style={{width:'100%'}}>
                            <InputLabel htmlFor="blogName">Blog Name:</InputLabel>
                            <Input variant='contained' type="text" id="blogName" name="blogName"/>
                            
                            <InputLabel htmlFor="authorName" sx={{marginTop:'1vh'}}>Author Name:</InputLabel>
                            <Input variant='contained' type="text" id="authorName" name="authorName"/>

                            <InputLabel htmlFor="description" sx={{marginTop:'1vh'}}>Description:</InputLabel>
                            <TextareaAutosize variant='contained' id="description" name="description" minRows={5}></TextareaAutosize>
                                
                            <Button variant='contained' onClick={()=>{navigate('/home')}} type="submit" sx={{marginTop:'5vh'}}>Submit Blog</Button>
                        </Stack>
                    </CardContent>
                </Card>

        </Box>
      )
  }
  
export default BlogForm