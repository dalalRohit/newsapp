import React from 'react';
import classes from './Sections.css';
import Section from './Section/Section';
const sections = (props) => {
    let sections = ['General', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science', 'Health']
    let list = sections.map((section) => {
        return <Section
            key={Math.random()}
            name={section}
            click={() => props.click(section)}
        />
    })
    return (
        <div className={classes.Sections}>
            <div className={classes.Custom}>
                USER RELATED
            </div>

            {list}

            <div className={classes.Change}>
                CHANGE COUNTRY
            </div>
        </div>
    );
};


export default sections;