import React from "react"
import "./contactus.css"


const ContactusForm = () => (
  <div className="grid">
    <div className="form-gradient flex flex-wrap lg:p-10 lg:pb-0 md:p-8 p-2 bg-grey pt-10 py-3">
      <div className="lg:w-1/2 w-full lg:pl-20 lg:pr-20 px-4 py-3">
        <div className="text-white">
          <p className="font-bold">Vi tillhandahåller topptalang inom mjukvaruutveckling </p>
          <ul className="pl-3">
            <li className="pl-4 m-0"> Front End </li>
            <li className="pl-4 m-0"> Backend </li>
            <li className="pl-4 m-0"> Full Stack </li>
          </ul>
          <p className="m-0 font-bold"> För mer information kontakta Andreas König:</p>
          <p className="m-0"><span>andreas@justarrived.se </span>0733-86 86 56</p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:pl-20 lg:pr-20 pl-2 pr-2">
        <form data-netlify="true" name="contactus" method="POST">
          <input type="hidden" name="form-name" value="contactus" />
          <div className="flex flex-wrap justify-end">
            <div className="lg:w-1/2 md:w-1/2 w-full">
              <div className="sixteen wide column single-input-container">
                <div className="p-2">
                  <input className="shadow appearance-none border rounded w-full py-2 lg:px-3 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline bg-transparent focus:bg-white" type="text" placeholder="Namn" name="Namn" />
                </div>
                <div className="p-2">
                  <input className="shadow appearance-none border rounded w-full py-2 lg:px-3 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline bg-transparent focus:bg-white" type="text" placeholder="Foretag" />
                </div>
                <div className="p-2">
                  <input className="shadow appearance-none border rounded w-full py-2 lg:px-3 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline bg-transparent focus:bg-white" type="text" placeholder="Epost" name="Epost" />
                </div>
                <div className="p-2">
                  <input className="shadow appearance-none border rounded w-full py-2 lg:px-3 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline bg-transparent focus:bg-white" type="text" placeholder="Telefonnummer" name="Telefonnummer" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full">
              <div className="p-2 h-full">
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 lg:px-3 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-full bg-transparent focus:bg-white"
                  type="text" name="description" id="mce-DESCRIPTION" required placeholder="Beskriv gärna kort ditt personalbehov"></textarea>
              </div>
            </div>
            <div className="w-20 p-2">
              <button className="shadow appearance-none border rounded w-full py-2 lg:px-3 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="submit">Skicka</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default ContactusForm
