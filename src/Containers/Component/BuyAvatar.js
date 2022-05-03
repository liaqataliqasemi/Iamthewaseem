import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Amazon from '../Assets/Amazon.svg';
import PayPal from '../Assets/PayPal.svg';
import Ensan from '../Assets/ensan.jpg';


export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={Amazon} sx={{ width: 200, height: 200 , borderRadius: '50%'}} />
      <Avatar alt="Remy Sharp" src={PayPal} sx={{ width: 200, height: 200 , borderRadius: '50%'}}/>
      <Avatar alt="Remy Sharp" src={Ensan} sx={{ width: 200, height: 200 , borderRadius: '50%'}}/>
    </Stack>
  );
}