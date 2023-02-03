import React from 'react'
import { useState } from "react";

export default function Faq(props) {
    const [isActive, setIsActive] = useState(false);
    // const { title, content } = accordionData;

  return (
    <div>
    <div class="accordion" id="accordionExample">
              <div class="accordion-item"></div>
    <h2
    class="accordion-header"
    id="headingone"
    onClick={() => setIsActive(!isActive)}
  >
    <button class="accordion-button black" type="button">
      {">>"}
      {props.title}
      {isActive ? "" : ""}
    </button>
  </h2>
  <div class=" in">
    {isActive && <div class="accordion-body wrap">
    {props.content}
    </div>}
    
  </div>
  </div>
  </div>
  )
}
