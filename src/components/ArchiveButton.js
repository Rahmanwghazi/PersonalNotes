import React from 'react';
import archiveImg from '../assets/archive.png';
import archiveImg2 from '../assets/archive2.png';

function ArchiveButton({ id, onArchive, isArchived }) {
    return <button className='btn-archive' onClick={() => onArchive(id)}>{isArchived ? 
        <img src={archiveImg} alt='archive' title='aktifkan'/> : 
        <img src={archiveImg2} alt='archive' title='arsipkan'/> }</button>
}

export default ArchiveButton;