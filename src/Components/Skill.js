import React from 'react';

const Skill = (props) => {
    return (
        <div className={"skill content-wrapper bordered "+props.className}>
        <h3>{props.title}</h3>
        <ul>
            {props.children}
        </ul>
      </div>
    );
};

export default Skill;