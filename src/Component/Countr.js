import React from 'react';

const Countr = (props) => {
    const {name,population,region,flag}=props.country;
const flagStyle={width:'200px'}
const country={border:'1px solid red' ,margin:'10px',padding:'10px'}
const handleAddCountry=props.handleAddCountry

    return (
        <div style={country}>
            <h3>this is country of the name:{name}</h3>
            <img style={flagStyle} src={flag} alt=""/>
            <p>population={population}</p>
            <p>region:{region}</p>
            <button onClick={ () => handleAddCountry}>add country</button>
        </div>
    );
};

export default Countr;