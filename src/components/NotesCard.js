import React from 'react';
import moment from 'moment';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NotesCard({ id, title, body, createdAt, onDelete, onArchive, isArchived }) {

  return (
    <div className="card-notes">
      <h5 className="card-title">{title}</h5>
      <p className="card-date">{moment(createdAt).format('dddd, MMMM DD, YYYY')}</p>
      <p className="card-text">{body}</p>
      <div className="card-action">
        <ArchiveButton id={id} onArchive={onArchive} isArchived={isArchived} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NotesCard;