import React, {useEffect, useState} from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../firebase';
import {useNavigate} from 'react-router-dom';
import { uid } from "uid";
import {set, ref, onValue, remove, update} from "firebase/database";
import '../components/homepage.css'

export default function Homepage() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState('');
    const [isEdit, setIsEdit] = useState('');
    const navigate = useNavigate();
    const [tempUidd, setTempUidd] = useState(''); 

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                onValue(ref(db, `/${auth.currentUser.uid}`), snapshot => {
                    setTodos([]);
                    const data = snapshot.val();
                    if(data !== null){
                        Object.values(data).map(todo => {
                            setTodos((oldArray) => [...oldArray, todo])
                        })
                    }
                })
            }else if(!user){
                navigate('/')
            }
        })
    })

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/');
        })
        .catch(err => {
            alert(err.message);
        });
    }
const writeToDatabase = () => {
    const uidd = uid();
    set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
    todo: todo,
    uidd:uidd,

});
setTodo("")
};


const handleDelete = (uid) => {
    remove(ref(db, `/${auth.currentUser.uidd}/${uid}`));
};

const handleUpdate = (todo) => {
   setIsEdit(true)
   setTodo(todo.todo);
   setTempUidd(todo.uidd)
};

const handleEditConfirm = () => {
    update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`), {
        todo: todo,
        tempUidd: tempUidd
    });
    setTodo('');
}
 
  return (
    <div className="homepage">
        <h1>Todo-List</h1>
      <input type="text" 
      className="add-edit-input"
      placeholder="Add a Task..."
      value={todo} 
      onChange={(e) => setTodo(e.target.value)}
      />
     {todos.map((todo) => (
        <div className="todo">
          <h1>{todo.todo}</h1>
          <EditIcon
            fontSize="large"
            onClick={() => handleUpdate(todo)}
            className="edit-button"
          />
          <DeleteIcon
            fontSize="large"
            onClick={() => handleDelete(todo.uidd)}
            className="delete-button"
          />
        </div>
      ))}

      {isEdit ? (
        <div>
        <CheckIcon onClick={handleEditConfirm} className="add-confirm-icon"/>
        </div>
      ) : (
        <div>
          <AddIcon onClick={writeToDatabase} className="add-confirm-icon" />
        </div>
      )}
        <LogoutIcon onClick={handleSignOut} className="logout-icon" />
    </div>
  );
}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}