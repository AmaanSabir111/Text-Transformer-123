import React,{useState} from 'react'

export default function AB(k) {
    const [rango, setrango] = useState({
        color:"black",
        backgroundColor:"white"
    })
    const [txt, settxt] = useState("Enable Dark Mode");
    const btnClick=()=>{
        if(rango.backgroundColor==="black"){
            setrango({
                 color:"black",
        backgroundColor:"white"
        

            })
            settxt("Enable Dark Mode");
        }
        else{
            setrango({
                color:"white",
        backgroundColor:"black"

            })
            settxt("Enable Light Mode");
        }
    }
  return (
    <div className={`    bg-${k.ama}      container  my-4`}  >
        <div className={`    bg-${k.ama}      accordion`} id="accordionExample" >
  <div className={`    bg-${k.ama}      accordion-item`} style={{color:"white",border:k.ama==="dark"?"2px solid white":"2px solid black"}}>
    <h2 className={`    bg-${k.ama}      accordion-header`}>
      <button style={{color:"white"}} className={`    bg-${k.ama}      accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne"  className={`    bg-${k.ama}      accordion-collapse collapse show`} data-bs-parent="#accordionExample">
      <div className={`    bg-${k.ama}      accordion-body`} >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className={`    bg-${k.ama}      accordion-item`}  style={{color:"white",border:k.ama==="dark"?"2px solid white":"2px solid black"}}>
    <h2 className={`    bg-${k.ama}      accordion-header`} >
      <button style={{color:"white"}} className={`    bg-${k.ama}      accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className={`    bg-${k.ama}      accordion-collapse collapse`} data-bs-parent="#accordionExample">
      <div className={`    bg-${k.ama}      accordion-body`} >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className={`    bg-${k.ama}      accordion-item`} style={{color:"white",border:k.ama==="dark"?"2px solid white":"2px solid black"}}>
    <h2 className={`    bg-${k.ama}      accordion-header`}>
      <button style={{color:"white"}} className={`    bg-${k.ama}      accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className={`    bg-${k.ama}      accordion-collapse collapse`} data-bs-parent="#accordionExample">
      <div className={`    bg-${k.ama}      accordion-body`} >
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}
