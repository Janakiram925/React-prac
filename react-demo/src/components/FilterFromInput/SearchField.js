import React, {useState, useEffect} from 'react';
import List from './List'
 function SearchField() {
  // const country_list = ["Argentina","Australia","Belgium","Belize","China","Iceland","India","Indonesia","Iran","Poland","Portugal","Romania","Russia","Saudi Arabia","South Africa","South Korea","Swaziland","Sweden","Switzerland"]
   const [text, setText] = useState('');
   const selectedCountry = (value) => {
     setText(value)

   }
   return(
     <div>
       <input type = 'text'
       value = {text}
       selected={selectedCountry}
       onChange = {(e) => setText(e.target.value)} />
       {text}
       <List value={text} />
     </div>
   )
 }

 export default SearchField