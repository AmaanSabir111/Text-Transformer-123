import React, { useState } from 'react'

export default function AB(k) {
  const [rango, setrango] = useState({
    color: "black",
    backgroundColor: "white"
  })
  const [txt, settxt] = useState("Enable Dark Mode");
  const btnClick = () => {
    if (rango.backgroundColor === "black") {
      setrango({
        color: "black",
        backgroundColor: "white"


      })
      settxt("Enable Dark Mode");
    }
    else {
      setrango({
        color: "white",
        backgroundColor: "black"

      })
      settxt("Enable Light Mode");
    }
  }
  return (
    <div className={`         container  my-4`}  >
      <h1 >About US</h1>
      <div className={`    bg-${k.ama}      accordion`} id="accordionExample" >
        <div className={`    bg-${k.ama}      accordion-item  `}  style={{ color: "white", border: k.ama === "dark" ? "2px solid white" : "2px solid black" }}>
          <h2 className={`    bg-${k.ama}      accordion-header`} > 
            <button style={{ color: "white" }} className={`    bg-${k.ama}      accordion-button`} type="button" data-bs-toggle="collapse"  data-bs-target="#collapseOne" aria-expanded="true"  aria-controls="collapseOne">
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div id="collapseOne"   className={`    bg-${k.ama}      accordion-collapse collapse show`} data-bs-parent="#accordionExample" >
            <div className={`    bg-${k.ama}      accordion-body`} >
              Text Transformer is free to use for everyone any body can transform it's it text according to their neend we are not charging anything.
            </div>
          </div>
        </div>
        <div className={`    bg-${k.ama}      accordion-item`} style={{ color: "white", border: k.ama === "dark" ? "2px solid white" : "2px solid black" }}>
          <h2 className={`    bg-${k.ama}      accordion-header`} >
            <button style={{ color: "white" }} className={`    bg-${k.ama}      accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <b>Our History</b>
            </button>
          </h2>
          <div id="collapseTwo" className={`    bg-${k.ama}      accordion-collapse collapse`} data-bs-parent="#accordionExample">
            <div className={`    bg-${k.ama}      accordion-body`} >
              Text transformer is the first website that we have developed,looking forward to provide more quality websites for your help,you can visit our webite time by time for more querries you can contact to us on our email.
            </div>
          </div>
        </div>
        <div className={`    bg-${k.ama}      accordion-item`} style={{ color: "white", border: k.ama === "dark" ? "2px solid white" : "2px solid black" }}>
          <h2 className={`    bg-${k.ama}      accordion-header`}>
            <button style={{ color: "white" }} className={`    bg-${k.ama}     accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <b>Reason</b>
            </button>
          </h2>
          <div id="collapseThree" className={`    bg-${k.ama}      accordion-collapse collapse`} data-bs-parent="#accordionExample">
            <div className={`    bg-${k.ama}      accordion-body`} >
              The reason behind developing Text Transformer was to provide people a platform on which they can transform their text as they want and can use it anywhere.
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
