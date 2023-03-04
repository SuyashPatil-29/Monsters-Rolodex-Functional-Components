import React from "react";
import "./card.styles.css"
const CardList = (props)=>{
        const {monsters} = props
        let i=0;
        return( 
            <div className="card-list">
                {monsters.map((monster)=>{
                    const { name, email } = monster
                    return(<div className="card-container" key={++i}>
                        <img alt="monster" src={`https://robohash.org/${++i}?set=set2&size=180x180`}/>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>)
                })}
            </div>
         )
            }

export default CardList;