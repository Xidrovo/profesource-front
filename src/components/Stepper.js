import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}))

function getSteps() {
  return [
    'Iniciar Sesión',
    'Escribir el post',
    'Seleccionar categoria (Tag) ',
    'Publicar',
  ]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          <div className="my-2">{'Escriba su correo:'}</div>
          <TextField
            required
            type="email"
            id="outlined-required"
            label="Required"
            defaultValue="Email"
            variant="outlined"
          />
          <div className="mt-5 mb-2">{'Escriba su contraseña:'}</div>
          <TextField
            required
            type="password"
            id="outlined-required"
            label="Required"
            defaultValue="Password"
            variant="outlined"
          />
        </div>
      )
    case 1:
      return (
        <div>
          <div className="my-2">{'Titulo del post:'}</div>
          <TextField id="standard-basic" label="Tittle" />
          <div className="mt-5 mb-2">{'Escriba su Contenido del post:'}</div>
          <TextField id="standard-basic" label="Content" />
        </div>
      )
    case 2:
      return (
        <div>
          <div className="my-2">
            {
              'Escribir tag de la o las materias donde quiera hacer su publicación:'
            }
          </div>
          <TextField id="standard-basic" label="Tag" />
        </div>
      )
    case 3:
      return 'Submit post al server de ProfeSource'
    default:
      return 'Unknown step'
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className="h-screen flex">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>
            Todos los pasos completados - Terminaste! Bienvenido!
          </Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  )
}
