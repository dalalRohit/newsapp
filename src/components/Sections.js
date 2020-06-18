import React from 'react';
// import './sections.scss';



const sections = (props) => {

    let sections = ['General', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science', 'Health']
    
    let list = sections.map((section) => {
        return <p
            key={Math.random()}
            click={props.click}
    > {section} </p>
    })

    return (
        <div className="Sections">
            <div className="Custom">
                USER RELATED
            </div>

            {list}

            <div className="Change">
                CHANGE COUNTRY
            </div>
        </div>
    );
};


export default sections;