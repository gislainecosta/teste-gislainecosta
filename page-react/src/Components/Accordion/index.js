import React from 'react';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ArrowDown from '../../img/arrowDownW.png';
import ArrowUp from '../../img/arrowUp.png';
import Photo from '../../img/photo1.jpg'

const useStyles = makeStyles((theme) => ({
    heading: {
        borderTop: '1px solid #bebebe',
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        margin: '0',
        padding: '0'
    },
    detailsDesktop: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: '0 3%',
        height: '42vh',
    },
    detailsMobile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '0 5%',
        height: '350px',
        textAlign: 'center',
        color: '#6f6f6f',
        fontSize:'16px'
    },
}));

const AccordionComponent = (props) => {
    const classes = useStyles();  
    
    return (
        <div id='accordion'>
            <Accordion expanded={props.isExpanded} onClick={props.onClick}>
                <AccordionSummary
                    style={{
                        backgroundColor: props.isExpanded ? 'white' : '#6f6f6f',
                    }}
                    className={classes.heading}
                >
                    <h4 className={props.isExpanded ? 'title-gray': 'title-white'}>Lorem ipsum</h4>
                    <img
                        id='icon-accordion'
                        src={props.isExpanded ? ArrowUp: ArrowDown}
                        alt='Arrow' 
                    />
                </AccordionSummary>
                <AccordionDetails className={window.screen.width >= 900 ? classes.detailsDesktop : classes.detailsMobile}>
                    <img
                        id='image-accordion'
                        src={Photo}
                        alt='Accordion'/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default AccordionComponent;