import React from 'react';

function List(props) {
  const country_list = ["Argentina","Australia","Belgium","Belize","China","Iceland","India","Indonesia","Iran","Poland","Portugal","Romania","Russia","Saudi Arabia","South Africa","South Korea","Swaziland","Sweden","Switzerland"]
  const filteredData = country_list.filter((ele) => {
    if(props.value === '') {
      return country_list
    } else {
      return ele.toLowerCase().includes(props.value)
    }
  })
  console.log(filteredData, props)
  return(
    <div>
      <ul style={{listStyle: 'none'}}>
        {
          filteredData.map((item) => (
            <li key={item}>{item}
            </li>
          ))
        }
      </ul>
      {/* {props.value} */}
    </div>
  )
}

export default List;