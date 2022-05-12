import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar"
import SinglePost from '../../components/SinglePost/SinglePost'
import "./single.css"

const Single = () => {
  return (
    <div className="single">
        {/* post */}
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single