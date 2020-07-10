import React, {useState} from 'react'

export const AddItem = () => {

    const [todo, setTodo] = useState('');


    return (
        <form>
            <div className="form-row add-item">
                <div className="col-12 col-md-9">
                    <input type="text" className="form-control form-control-lg" 
                    placeholder="What do you want to do today?"
                    value={todo} onChange={ (e) => setTodo(e.target.value)}
                     />
                </div>
                <div className="col-12 col-md-3">
                    <button className="btn btn-success btn-block btn-lg">ADD</button>
                </div>
            </div>
        </form>
    )
}
