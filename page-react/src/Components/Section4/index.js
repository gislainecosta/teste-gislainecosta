import React, { useState } from 'react';
import './index.css';
import AccordionComponent from '../Accordion';

const Section4 =()=>{
    const [values, setValues] = useState({
        expanded1: false,
        expanded2: false,
        expanded3: false,
        expanded4: false,
    });

    const open = (panel) => {
        setValues({ [panel]: true });
    };

    const close = (panel) => {
        setValues({ [panel]: false });
    };

    return(
        <div id='section4'>
            <section>
                <AccordionComponent 
                    id='panel1' 
                    isExpanded={values.expanded1} 
                    onClick={() => { values.expanded1? close('expanded1') : open('expanded1')}} 
                />
            </section>
            <AccordionComponent 
                isExpanded={values.expanded2}
                onClick={() => { values.expanded2? close('expanded2') : open('expanded2') }}
            />
            <AccordionComponent
                id='panel3'
                isExpanded={values.expanded3}
                onClick={() => { values.expanded3? close('expanded3') : open('expanded3')}} 
            />
            <section>
                <AccordionComponent
                    id='panel4'
                    isExpanded={values.expanded4}
                    onClick={() => { values.expanded4? close('expanded4') : open('expanded4') }}
                />
            </section>
        </div>
    )
}

export default Section4;