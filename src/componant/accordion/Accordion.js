import "./Accordion.css";
import {useState} from 'react';
import { questions } from "./Api";
import MyAccordion from "./MyAccordion";

const Accordion = ()=>{
    const [data, setData] = useState(questions)
    return(
        <>
        <section className="main">
            <h1>Javascript & React Interview Q&A </h1>
        </section>
        {
            data.map((currElem)=>{
                const {id} = currElem
                return <MyAccordion key={id} {...currElem} />
            })
        }
        </>
    )
}
export default Accordion