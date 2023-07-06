import { useState } from "react";
import "./todoApp.css";


export default function Todo({item, onUpdate, onDelete}){

    const [Editar11, setEditar] = useState(false);
    // const [Eliminar22, setEliminar]
    

    function FormEdit(){

        const [newValue, setNewValue] = useState(item.title);
        

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }
    
        function handleClickUpdateToDo(){
            onUpdate(item.id, newValue);
            setEditar(false);
        }

        return (<form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
            <button className="button" onClick={handleClickUpdateToDo}>Update</button>
        </form>
        );
    }

    function TodoElement(){
        return(
        <div className="todoInfo">
            <span className="todoTitle">{item.title}</span>
            {item.title} <button className="buttonCC2" onClick={()=> setEditar(true)}>Editar</button>
            <button className="buttonCC3" onClick={(e)=> onDelete(item.id)}>Eliminar</button>
        </div>);
    }

    return (
    <div className="todo">
        {Editar11 ? <FormEdit /> : <TodoElement/>} 
        
    </div>

    // <div>
    //     {item.title} <button onClick={()=> setIsEdit(true)}>Editar</button>
    //     <button>Eliminar</button>
    // </div>
    
    
    
    )
}