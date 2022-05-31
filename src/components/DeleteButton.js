import React from 'react';
import deleteImg from '../assets/delete.png';
 
function DeleteButton({ id, onDelete }) {
  return <button className='btn-delete' onClick={() => onDelete(id)}>
    <img src={deleteImg} alt='delete' title='hapus'/>
  </button>
}
 
export default DeleteButton;