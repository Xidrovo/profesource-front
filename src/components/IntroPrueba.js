import React, { useState } from 'react'
import { Steps, Hints } from 'intro.js-react'

import 'intro.js/introjs.css'
const IntroPrueba = () => {
  const [stepsEnabled, setStepsEnabled] = useState(true)
  const [initialStep, setInicialStep] = useState(0)
  const [steps, setSteps] = useState([
    {
      element: '.hello',
      intro: 'Hello step',
    },
    {
      element: '.world',
      intro: 'World step',
    },
  ])
  const [hintsEnabled, setHintsEnabled] = useState(false)
  const [hints, setHints] = useState([
    {
      element: '.hello',
      hint: 'Hello hint',
      hintPosition: 'middle-right',
    },
  ])



  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       stepsEnabled: true,
  //       initialStep: 0,
  //       steps: [
  //         {
  //           element: ".hello",
  //           intro: "Hello step"
  //         },
  //         {
  //           element: ".world",
  //           intro: "World step"
  //         }
  //       ],
  //       hintsEnabled: true,
  //       hints: [
  //         {
  //           element: ".hello",
  //           hint: "Hello hint",
  //           hintPosition: "middle-right"
  //         }
  //       ]
  //     };
  //   }

  //   render() {
  //     const {
  //       stepsEnabled,
  //       steps,
  //       initialStep,
  //       hintsEnabled,
  //       hints
  //     } = this.state;

  return (
    <div>
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={initialStep}
        onExit={() => {setStepsEnabled(false)}}
      />
      <Hints enabled={hintsEnabled} hints={hints} />

      {/* <h1 className="hello">Hello,</h1> */}
      <hr />
      <p className="world">Hola</p>
    </div>
  )
}

export default IntroPrueba
