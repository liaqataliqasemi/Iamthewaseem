import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BuyButton from './BuyButton';
import { Box } from '@material-ui/core';
import BuyNew from '../Component/BuyButtonNewTab';
import Avatar from '@mui/material/Avatar';
import Ensan from '../Assets/ensan.jpg';
import Amazon from '../Assets/Amazon.svg';
import Paypal from '../Assets/PayPal.svg';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{marginTop:'5vh'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <Avatar sx={{ width: 50, height: 50 }} alt="Ensan Publishers" src={Ensan} />
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', fontFamily: 'vazir', color: '#3F72AF', fontSize: '1.5em' }}>خرید مستقیم از انتشارات انسان</Typography>
        </AccordionSummary>
        <AccordionDetails>
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="2vh 0"
                >
                 <BuyButton text="خرید" link="/Volume4"/> 
                </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'titr', fontSize: '1.2em', color: '#112D4E' }}>
          <Avatar sx={{ width: 50, height: 50 }} alt="Amazon" src={Amazon} />
            </Typography>
          <Typography sx={{ color: 'text.secondary', fontFamily: 'vazir' , color: '#3F72AF', fontSize: '1.5em'}}>
          خرید از ویب‌سایت آمازون
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="2vh 0"
                >
                 <BuyNew text="خرید" link="https://www.amazon.com/dp/0578357828?ref=myi_title_dp"/> 
                </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'titr', fontSize: '1.2em', color: '#112D4E' }}>
          <Avatar sx={{ width: 50, height: 50 }} alt="Paypal" src={Paypal} />
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontFamily: 'vazir', color: '#3F72AF', fontSize: '1.5em' }}>
          خرید از پی‌‌پال 
          </Typography>
        </AccordionSummary>
            <AccordionDetails>
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="2vh 0"
                >
                 <BuyNew text="خرید" link="https://paypal.me/ensanpublishers"/> 
                </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
