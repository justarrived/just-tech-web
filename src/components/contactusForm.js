import React from "react"


const ContactusForm = () => (
  <div className="grid bg-black text-white">
    <div className="flex flex-wrap lg:p-10 lg:pb-0 md:p-8 p-2 pt-10 py-3">
      <div className="lg:w-1/2 w-full lg:pl-20 lg:pr-20 px-4 py-3">
        <div>
          <p className="m-0 font-bold"> För mer information kontakta Andreas König:</p>
          <p className="m-0"><span>andreas@justarrived.se</span> | 0733-86 86 56</p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:pl-20 lg:pr-20 pl-2 py-3">
        <p className="m-0 font-bold"> Vill du att vi ringer upp dig?</p>
        <p>Skriv in era detaljer så tar vi kontakt med er.</p>

        <div className="-m-4">
          <iframe
            title="Upsales Contact Form"
            src="https://pages.upsales.com/9084u0a61f381e979430c882e0881569e6eee-frame"
            width="360"
            height="529"
            style={{border: 0}}>
          </iframe>
        </div>
      </div>
    </div>
  </div>
)

export default ContactusForm
