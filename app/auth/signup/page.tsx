import React from 'react'
import Steps from '../../components/Singup/Steps/Steps'
import Grid from '../../components/Singup/Grid';
import StepList from '@/app/components/Singup/StepList/step-list';

const Signup = () => {
  return (
    <Grid>
      <StepList />
      <Steps />
    </Grid>
  )
}

export default Signup