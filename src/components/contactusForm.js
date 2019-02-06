import React from "react"
import "./contactus.css"

const ContactusForm = () => ( 
<div className="grid">
 <div className="flex p-10 bg-grey">
    <div className="w-1/2 column pl-20 pr-20">
      <div className="text-white">
      <p>Vi tillhandahåller topptalang inom mjukvaruutveckling </p>
      <ul>
          <li> Front End </li>
          <li> Backend </li>
          <li> Full Stack </li>
      </ul>
      <p> För mer information kontakta Andreas König:</p>
      <p><span>andreas@justarrived.se </span>0733-86 86 56</p>
      </div>
    </div>
    <div className="w-1/2 pl-20 pr-20">
      <form>
        <div className="flex flex-wrap justify-end">
          <div className="w-1/2 "> 
            <div className="sixteen wide column single-input-container">
              <div className="p-2">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline bg-grey focus:bg-white" type="text" placeholder="Namn" />
              </div>
              <div className="p-2">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline bg-grey focus:bg-white" type="text" placeholder="Foretag" />
              </div>
              <div className="p-2">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline bg-grey focus:bg-white" type="text" placeholder="Epost" />
              </div>
              <div className="p-2">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline bg-grey focus:bg-white" type="text" placeholder="Telefonnummer" />
              </div>
            </div>
          </div>
          <div className="w-1/2"> 
              <div className="p-2 h-full">
                <textarea 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-full bg-grey focus:bg-white"
                  type="text" value="" name="description" id="mce-DESCRIPTION" required placeholder="What do you need help with?"></textarea>
            </div>
          </div>
          <div className="w-20 p-2"> 
            <button className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline">Skicka</button>
          </div>
        </div>
    </form>
</div>
</div>
</div>
)

export default ContactusForm