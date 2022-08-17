import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LOGO from "./assets/logo.png";
import { Button, Stepper } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepCard from "./components/StepCard";
import { CardData } from "./interface/General";
import { RiTeamFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

function App() {
  const steps = ["First", "Second", "Third", "Fourth"];
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };
  const sections: Array<CardData> = [
    {
      title: "Welcome! First things first...",
      subTitle: "You can always change them later.",
      buttons: [
        {
          title: "Create Workspace",
          onClick: handleNext,
        },
      ],
      inputFields: [
        {
          type: "text",
          label: "Full Name",
          placeholder: "Steve Jobs",
          onChange: (event: any) => {
            console.log(event.target.value);
          },
        },
        {
          type: "text",
          label: "Display Name",
          placeholder: "Steve",
          onChange: (event: any) => {
            console.log(event.target.value);
          },
        },
      ],
    },
    {
      title: "Let's setup a home for all your work",
      subTitle: "You can always create another workspace later. ",
      buttons: [
        {
          title: "Create Workspace",
          onClick: handleNext,
        },
      ],
      inputFields: [
        {
          type: "text",
          label: "Workspace Name",
          placeholder: "Eden",
          onChange: (event: any) => {
            console.log(event.target.value);
          },
        },
        {
          type: "url",
          domain: "www.eden.com/",
          disabled: true,
          label: "Workspace URL",
          optionalText: "(optional)",
          placeholder: "Example",
          onChange: (event: any) => {
            console.log(event.target.value);
          },
        },
      ],
    },
    {
      title: "How you are planning to use Eden?",
      subTitle: "We'll streamline your setup experience accordingly",
      buttons: [
        {
          title: "Create Workspace",
          onClick: handleNext,
        },
      ],
      cards: [
        {
          icon: BsFillPersonFill,
          title: "For myself",
          body: "Write better. Think more clearly. Stay organized",
        },
        {
          icon: RiTeamFill,
          title: "With my team",
          body: "Wikis,docs,tasks & projects, all in one place.",
        },
      ],
    },
    {
      title: "Congratulations, Eren!",
      subTitle: "You have completed onboarding,you can start using the Eden!",

      buttons: [
        {
          title: "Launch Eden",
          onClick: () => {},
        },
      ],
    },
  ];

  return (
    <div className="parent-container">
      <div
        className="logo"
        onClick={() => {
          setActiveStep(0);
        }}
      >
        <img className="logo-img" src={LOGO} alt="" />
      </div>
      <div className="stepper">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel>{}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      {sections.map((el, index) => {
        {
          return activeStep === index && <StepCard key={index} data={el} />;
        }
      })}
    </div>
  );
}

export default App;
