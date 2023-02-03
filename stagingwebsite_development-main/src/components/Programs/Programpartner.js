import React from 'react';
import { useState } from "react";
import { useEffect } from "react";

export default function Programpartner(props) {
    const [isActive, setIsActive] = useState(false);
  return (
    <div class="patner-left img_accordion">
    <img
                src={props.img}
                alt=""
              />

    <div class="accordion acc-color text-white" id="accordionExample acc-example" onClick={() => setIsActive(!isActive)}>
    <div class="accordion-item acc-color text-white">
                  <h2
                    class="accordion-header acc-color"
                    id="headingOne text-white"
                    
                  >
                  <button
                      class="accordion-button acc-color text-white"
                      type="button text-white"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                     
                    >

                <div>
                        <span class="oxy-dynamic-list">
                         {props.head}
                        </span>
                        <br />
                        <span
                          id="span-6564-352-1"
                          class="ct-span"
                          data-id="span-6564-352"
                        >
                         {props.title}
                         {isActive ? "" : ""}
                        </span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse in"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                  {isActive && <div class="accordion-body acc-color text-white">
                     {props.content}
                    </div>}
                </div>
              </div>
    </div>
    </div>

  )
}
