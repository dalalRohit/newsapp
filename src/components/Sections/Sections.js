import React from 'react';
import classes from './Sections.css';
import Section from './Section/Section';
const sections = (props) => {
    let sections = ['Breaking News', 'Colleges and Universities', 'Current Events', 'Environmental', 'Government', 'Magazines', 'Media', 'Newspapers', 'Politics', 'Regional News', 'Religion - and - Spirituality', 'Sports', 'Technology', 'Traffic & Roads', 'Weather', 'Weblogs']

    let keyWords = [

    ];
    let list = sections.map((section) => {
        return <Section
            key={Math.random()}
            name={section}
            click={() => props.click(section)} />
    })
    return (
        <div className={classes.Sections}>
            <h5>Sections</h5>
            {list}
        </div>
    );
};


export default sections;