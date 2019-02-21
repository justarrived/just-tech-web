import React from "react"

import bigLogo from "../images/full-logo.png"

const PageBreaker = () => (
    <div className="container mx-auto text-center">
        <p className="italic m-0 pt-3"> En del av </p>
        <a href="https://justarrived.se/">
            <img className="fill-current h-8 w-9 mr-2 mb-1" alt="Just Arrived logo" width="auto" height="auto" src={bigLogo} />
        </a>
    </div>
)

export default PageBreaker
