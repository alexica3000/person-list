import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const Person = ({img, name, job, children}) => {
    const imageUrl = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

    return (
        <article className="person">
            <img src={imageUrl} alt="person"/>
            <h4>{name}</h4>
            <h4>{job}</h4>
            {children}
        </article>
    )
}

const PersonList = () => {
    return (
        <section className="person-list">
            <Person img="34" name="john" job="developer" />
            <Person img="30" name="lee" job="tester" >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, recusandae.</p>
            </Person>
            <Person img="25" name="bobby" job="devops" />
        </section>
    )
}

ReactDom.render(<PersonList/>, document.getElementById('root'));
