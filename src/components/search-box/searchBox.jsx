import React from "react";
import "./searchBox.styles.css"
const SearchBox = (props)=>{
        return <input className={`search-box ${props.className}`} type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
    }

export default SearchBox;