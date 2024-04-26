
import "./Form.css"
export const Todoform = ({onChange, todo, onSubmit }) => {
  const handleClearTodos = () => {
    localStorage.clear("todos");
    setTodolist([]);
  };

return (
  <div>
  <form className='form' onSubmit={onSubmit}>
    
    <div>
    <input type='text'
          className='title'
      onChange={onChange}
      placeholder='Enter your task'
      name="title"
      value={todo?.title} 
      />
</div>
<div>
    <label htmlFor="date">Date</label>
    <input type= "date"
    name = "date"
      className= "date"
      onChange={onChange}
      value={todo?.date}
      />
</div>
    {/* div for completed task section  */}
    <div>
      <label htmlFor="completed">Completed</label>

      <select onChange={onChange} className='completed' value={todo?.completed} name="completed">
        <option value="select">choose</option>
        <option value="yes">YES</option>
        <option value="no">NO</option>

      </select>
    </div>
   <div>
   <button className='btn' type='submit'>Add task</button>
    <button className="btn" onClick={handleClearTodos}>Clear Task</button>
   </div>
    

  </form>
  </div>
)   
  
}