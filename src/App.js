import React from 'react'
import Firstnotes from './components/Firstnotes'
import Homepage from './components/FirstProject/Homepage'
import index from './components/BlubProject/Bulb'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage2 from './components/BlubProject/Homepage2'
import ColorHome from './components/ColorChanger/ColorHome'
import CardParking from './components/CardParking/CardParking'
import HomePageBlog from './components/Blogweb/HomePageBlog'
import ProductDetail from './components/Blogweb/ProductDetail'
import Booking from './components/Blogweb/Booking'

export default function App() {
  return (
    <div>
<Homepage></Homepage>
<Homepage2></Homepage2>
<ColorHome></ColorHome>
<CardParking></CardParking>
<BrowserRouter>
<Routes>
<Route path='/' element={<HomePageBlog></HomePageBlog>}></Route>
<Route path='/Product/:id' element={<ProductDetail></ProductDetail>}></Route>
<Route path='/Booking/:name' element={<Booking></Booking>}></Route>
</Routes>

</BrowserRouter>
</div>
  )
}
