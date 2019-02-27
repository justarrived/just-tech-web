import React from "react"

import './parallax.css'

export const ParallaxContainer = ({ children }) => (
    <div class="parallax">
        {children}
    </div>
)

export const ParallaxSection = ({ id, fore, children, back, deep, height, zIndex, style }) => (
    <div id={id} class="parallax__group" style={{ height, zIndex, ...style }}>
        {fore &&
            <div class="parallax__layer parallax__layer--fore">
                {fore}
            </div>
        }
        {children &&
            <div class="parallax__layer parallax__layer--base">
                {children}
            </div>
        }
        {back &&
            <div class="parallax__layer parallax__layer--back">
                {back}
            </div>
        }
        {deep &&
            <div class="parallax__layer parallax__layer--deep">
                {deep}
            </div>
        }
    </div>
)