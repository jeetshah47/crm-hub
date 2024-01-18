import React from 'react'
import Grid from '../components/Grid'
import StepList from '../components/StepList/step-list'
import Steps from '../components/Steps/Steps'

interface SingupProps {
  params: { id: number }
}

const Signup = ({params: {id}}: SingupProps) => {
  return (
    <Grid>
      <StepList id={id} />
      <Steps id={id} />
    </Grid>
  )
}

export default Signup