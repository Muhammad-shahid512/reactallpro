import React,{useState} from 'react'
import Firstnotes from '../Firstnotes'
import Shownotes from './Shownotes';

export default function Homepage() {
 const[sub,setSub]=useState([]);
const[name,setname]=useState("")
const[phone,setphone]=useState("");
const handlename=(e)=>{
    setname(e)
}
const handlephone=(e)=>{
    setphone(e)
}

const handlesubmit=(e)=>{
    e.preventDefault();
    if(name.trim()!==""){
        const subdata={
            name:name,
            phone:phone,
        }
        setSub([...sub,subdata])
    }
    
else{
    alert("Please Enter the Data")
}
setname('')
    setphone('')
    console.log(sub)
}
function deleteid(id){
    console.log(id)
    const filterItems=sub.filter((items,i)=>{
        return i!==id
    })
    setSub(filterItems)
}

const [searchItem,setSearch]=useState('');

const handleInputChange=(e)=>{
    setSearch(e.target.value.toLowerCase())
    console.log(searchItem)
    // console.log(e.target.value)
}
  return (
    <div>
    <input
    type="text"
    value={searchItem}
    onChange={handleInputChange}
    placeholder='Type to search'
  />
    <Firstnotes name={name} phone={phone}  handlename={handlename} handlephone={handlephone} handlesubmit={handlesubmit}></Firstnotes>
    { !sub.length ?"Empty items ":        <Shownotes searchItem={searchItem} sub={sub} deleteid={deleteid}></Shownotes>
}
        </div>
  )
}
