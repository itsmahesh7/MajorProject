
import React from 'react'
import './notices.css'

import { Box } from "@chakra-ui/react";
import Main from "./Main"

const Notices = () => {
   
  return (
    <Box>
        <div className="mainbox">
            <h1 className="head1">Notices And Updates</h1>
        </div>
        <div id="noticebox"></div>
        <Main />
       </Box> 
  )
}

export default Notices
