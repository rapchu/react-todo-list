import React, {useState, useContext} from 'react';
import {GlobalContext} from "../contexts/GlobalState";
import shortid from  'shortid';

export const AddItem = () => {

    const {addItem} = useContext(GlobalContext);

    const [todo, setTodo] = useState('');
    
    

    const onSubmit = (e) => {
        e.preventDefault();
        if(todo==='')
        {
            alert("You cannot leave an empty field");
        }
        else
        {
            const newItem = {
                id: shortid.generate(),
                todo,
                done: false
            }
            addItem(newItem);
            setTodo('')
        }
       

    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-row add-item">
                <div className="col-12 col-md-9">
                    <input type="text" className="form-control form-control-lg" 
                    placeholder="What do you want to do today?"
                    value={todo} onChange={ (e) => setTodo(e.target.value)}
                     />
                </div>
                <div className="col-12 col-md-3">
                    <button type="submit" className="btn btn-success btn-block btn-lg">ADD</button>
                </div>
            </div>
        </form>
    )
}
