import React, { useState } from 'react'
import { BlogApi } from './BlogApi'

import Showblog from './Showblog'
import Search from './Search'
export default function HomePageBlog() {
    const[blogData,setblogData]=useState(BlogApi)
    const[input,setinput]=useState('')
    const onChangeData=(e)=>{
        const value=e.target.value
        setinput(e.target.value)
        if(value==='')
        {
            setblogData(BlogApi)
        }
    }
    console.log(input)
    const formsubmit=(e)=>{
        e.preventDefault()
        console.log("This is ")
        filteritem()
    }

    const filteritem=()=>{
        const blogitem=BlogApi.filter((blog)=>{
            return blog.name.toLocaleLowerCase().includes(input.toLowerCase().trim())
        })
        setblogData(blogitem)
    }
  return (
    <div>
    <p>1:orange 2:carriot 3:potao</p>
    <h1>shahid-{input}</h1>
    <Search formsubmit={formsubmit} onChangeData={onChangeData} input={input}/>
{
    !blogData.length ?"No Data":<Showblog blogData={blogData} ></Showblog>

}
    
    </div>
  )
}
