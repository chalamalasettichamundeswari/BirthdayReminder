import React, { useState } from 'react';
import data from './data';
function App() {
  const [people,setPeople] = useState(data);

  return (
    <main>
    <section className="container">
    <p>{people.length} birthdays today</p>
     {people.map((person,id)=>{
       const {name,image,age} = person;
       return(
         <article className="person" key={id}>
          <img src={image} alt={name}/>
          <div>
          <h4>{name}</h4>
          <p>{age} years</p>
          </div>
        </article>
       ); 
     })}
     <button classname="button" onClick={()=>setPeople([])}>Clear All</button>
    </section>
    </main>
  );
}

export default App;
