import React from 'react';

const Skill = (props) => {
    return (
        <div className={"content-wrapper bordered "+props.className}>
        <h2>{props.title}</h2>
        <ul>
            {props.children}
        </ul>
      </div>
    );
};

export default Skill;