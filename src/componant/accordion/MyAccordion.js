import { useState } from "react"



const MyAccordion =({questions, answer})=>{
    const [show, setShow]= useState(false);
    return(
        <>
        <div className="headding">
      
        <p className="toggle" onClick={()=> setShow(!show)}>{ (show ? "➖" : "➕")}</p>
        <h3 className="ques">{questions}</h3>
        </div>
        {
            show && <p className="answers">{answer}</p>
        }
        
        </>
    )
}
export default MyAccordion