import React from "react"


const ContactusForm = () => (
  <div className="grid bg-black text-white">
    <div className="flex flex-wrap lg:p-10 lg:pb-0 md:p-8 p-2 pt-10 py-3">
      <div className="lg:w-1/2 w-full lg:pl-20 lg:pr-20 pl-2 py-3">
        <p className="font-bold">Om JustTech</p>
        <p>
          Utvecklare är ett av de vanligaste jobben i Sverige idag. Ändå utbildas det idag för få utvecklare i Sverige och personalbristen inom IT-sektorn är större än någonsin enligt Svenskt Näringsliv.
        </p>
        <p>
          Det här vill vi vara med och förändra. För att snabbt och effektivt få in rätt kompetens och möta arbetsmarknadens behov behöver utrikesfödd techtalang rekryteras in från utlandet. Just Tech är ett dotterbolag till Just Arrived AB med syfte att rekrytera utrikesfödd techtalang till Sverige.
        </p>
        <p>
          <ul>
            <li><i>Kollektivavtal</i></li>
            <li><i>Medlemmar i Almega</i></li>
            <li><i>Certifierade av Migrationsverket</i></li>
          </ul>
        </p>
        <p className="m-0 font-bold">För mer information kontakta Andreas König:</p>
        <p className="m-0"><span>andreas@justarrived.se</span> | 0733-86 86 56</p>
      </div>
      <div className="lg:w-1/2 w-full lg:pl-20 lg:pr-20 pl-2 py-3">
        <p className="m-0 font-bold">Vill du att vi ringer upp dig?</p>
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
