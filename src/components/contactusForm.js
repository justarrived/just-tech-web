import React from "react"


const ContactusForm = () => (
  <div className="grid bg-black">
    <div className="flex flex-wrap lg:p-10 lg:pb-0 md:p-8 p-2 pt-10 py-3">
      <div className="lg:w-1/2 w-full lg:pl-20 lg:pr-20 px-4 py-3">
        <div className="text-white">
          <p className="m-0 font-bold"> För mer information kontakta Andreas König:</p>
          <p className="m-0"><span>andreas@justarrived.se</span> | 0733-86 86 56</p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:pl-20 lg:pr-20 pl-2 pr-2">
        <form data-netlify="true" name="contactus" method="POST">
          <input type="hidden" name="form-name" value="contactus" />
          <div className="flex flex-wrap justify-end">
            <div className="lg:w-1/2 md:w-1/2 w-full">
              <div className="sixteen wide column single-input-container">

                {["Namn", "Foretag", "Epost", "Telefonnummer"].map((name, i) =>
                  <div key={`${name}-wrapper`} className="p-2">
                    <input className="comp-form-input" type="text" placeholder={name} name={name} />
                  </div>
                )}

              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full">
              <div className="p-2 h-full">
                <textarea
                  className="comp-form-input h-full"
                  type="text" name="description" id="mce-DESCRIPTION" required placeholder="Beskriv gärna kort ditt personalbehov"></textarea>
              </div>
            </div>
            <div className="w-20 p-2">
              <button className="comp-form-input" type="submit">Skicka</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default ContactusForm
