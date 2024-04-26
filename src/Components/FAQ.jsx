import React from "react";
import { faqData } from "./utilityDemoData";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { RiArrowDropDownLine } from "react-icons/ri";

function FAQ() {
  return (
    <div className=" my-24">
      <p className="primary-text-gradient text-4xl font-bold">FAQ</p>
      <ul className=" w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw]">
        {faqData.map((item, index) => {
          return (
            <li key={index} className="my-4">
              <Accordion style={{border: '1px solid blue', borderRadius: '12px'}}>
                <AccordionSummary
                  expandIcon={<RiArrowDropDownLine size={30} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FAQ;
