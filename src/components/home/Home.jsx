import React, { useState, useEffect } from 'react'
import {Box, Typography, Link, Card, CardContent} from '@mui/material'
import axios from 'axios'

const Home=()=>{
    const [blogs, setBlogs] = useState([])
    const [userId, setUserId] = useState('')
    const [Id, setId] = useState('')
    const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setBlogs(response.data)
      })
      .catch(error => {
        console.error('Error fetching blogs:', error)
      });
  }, []);

  const whenClicked = (userid, id, title)=>{
    setUserId(userid)
    setId(id)
    setTitle(title)
  }

  return (
    <Box sx={{display:'flex', justifyContent:'start', flexDirection:'column', fontFamily:'sans-serif', fontSize:'30px'}}>
        <Box sx={{position:'fixed', backgroundColor:'ButtonShadow', width:'100%', height:'5%', padding:'0 0 0.4vh 0.3vw', display:'flex', justifyContent:'right'}}>
            <Card sx={{paddingLeft:'75vw'}}>
                <CardContent>
                    <Link href="/home" sx={{fontSize:'22px',color:'black', textDecoration:'none', padding:'3px 3.35vw'}}>Home</Link>{''}
                    <Link href="/blogform" sx={{fontSize:'22px', color:'black', textDecoration:'none', padding:'3px 3.35vw'}}>Add Blog</Link>
                </CardContent>
            </Card>
        </Box>

        <Box sx={{backgroundImage:`url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbG9yJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')`, backgroundRepeat:'no-repeat', backgroundSize:'cover',display:'flex', justifyContent:'center', marginTop:'5vh'}}>
            <Box sx={{display:'flex', justifyContent:'top', flexDirection:'column', alignItems:'center',border:'2px solid black', width:'25%', margin:'1%'}}>
                <Typography variant='h4' sx={{backgroundColor:'black', color:'white',border:'1px solid black', width:'100%', textAlign:'center'}}>Blog Dashboard</Typography>
                <ul style={{listStyleType:'none', padding:'0', backgroundColor:'white', marginTop:'-0.009vh', borderTop:'2px solid black', height:'100%', marginBottom:'-0.5vh'}}>
                    {blogs.map(blog => (
                        <li key={blog.id} style={{borderBottom:'1px solid black', width:'100%'}}>
                            <p><a onClick={()=>whenClicked(blog.userId, blog.id, blog.title)} style={{cursor:'pointer'}}>{blog.id}.{blog.title}</a></p>
                        </li>
                    ))}
                </ul>
            </Box>
        
            <Box sx={{border:'2px solid black', width:'75%', margin:'1%', marginLeft:'-0.5vw'}}>
                <Card sx={{width:'86%', height:'98.4%', padding:'10vh 5vw',backgroundColor:'ButtonHighlight'}}>
                    <CardContent>
                        <Typography variant='h4' sx={{color:'white', backgroundColor:'black', textAlign:'center'}}>Blogs</Typography>
                        <p>UserId: {userId}</p> 
                        <p>Id: {Id}</p>  
                        <p>Title: {title}</p> 
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Box>
  )
}

export default Home

