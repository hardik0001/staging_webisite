import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

export default function syllabuscontent(props) {
   const [isActive, setIsActive] = useState(false);
  return (
    <div>
    <div class="accordion-item ">
    <h2 class="accordion-header acc-syll " id="headingOne" onClick={() => setIsActive(!isActive)}>
      <button
        class="accordion-button black btn-syll-text"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        {props.syll_title}
        {isActive ? "" : ""}
      </button>
    </h2>
    <div
      
      class="accordion-collapse collapse in acc-syll-body"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
    {isActive && <div class="accordion-body">
        <div
          class="accordion acc-box-2 "
          id="accordionExample acc-ex">
          <div class="accordion-item ">
            <h2
              class="accordion-header acc-syll "
              id="headingOne"
              onClick={() => setIsActive(!isActive)}>
              <button
                class="accordion-button black btn-syll-text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne-1"
                aria-expanded="true"
                aria-controls="collapseOne-1"
              >
              {props.sub_syll_title}
              {isActive ? "" : ""}
              </button>
            </h2>
            <div
              
              class="accordion-collapse collapse in acc-syll-body"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
            {isActive && <div class="accordion-body">
            {props.sub_syll_content}
              </div>}
            </div>
          </div>
        </div>
    </div>}
</div>
</div>
    
      
    </div>
  )
}
