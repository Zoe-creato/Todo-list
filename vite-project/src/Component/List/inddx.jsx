import React from 'react'

const Todolist = ({ list}) => {
  return (
    <div>
<ul>
        {list.map((item, index) => (
          <li key={index} className="list">
            
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <p>{item.completed}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Todolist 