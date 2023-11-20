import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export default function About(){


return(

    <div>
    <Accordion className='m-16'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>details of project</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
         well I had to do this project for a degree! and sorry if it had some problems or stupid css I didn't have much time though
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion className='m-16'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>future plans</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
     gotta start doing more projects soon...
        </Typography>
      </AccordionDetails>
    </Accordion>



    <h1 className='text-center text-bold text-xl'> Contact Ways : </h1>
    <h1 className='text-center text-bold text-xl mt-16'> Instagram : tfm3me</h1>
  </div>

)




}
