import React from "react"
import "./contactus.css"

const ContactusForm = () => ( 
<div className="grid">
 <div className="flex p-10 bg-grey-darkest">
    <div className="w-1/2 column pl-20 pr-20">
      <div className="">
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
    <div className="w-1/2 column pl-20 pr-20">
      <form>
        <div className="flex">
          <div className="w-1/2 column"> 
            <div className="sixteen wide column single-input-container">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Namn" />
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Foretag" />
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Epost" />
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Telefonnummer" />
            </div>
          </div>
          <div className="w-1/2 column"> 
            <div className="column">
              <textarea 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-32"
               type="text" value="" name="description" id="mce-DESCRIPTION" required placeholder="What do you need help with?"></textarea>
            </div>
          </div>
        </div>
    </form>
</div>
</div>
</div>
)

export default ContactusForm