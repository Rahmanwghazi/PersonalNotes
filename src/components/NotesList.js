import React from "react";
import NotesCard from "./NotesCard";

function NotesList({ data, onDelete, onArchive }) {
    const notesCard = data.map(note => (
        <NotesCard key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchived={note.archived} {...note} />
    ))
    return (
        <div className="notes-list">
            {
                data.length > 0 ? notesCard : <p className="text-empty">-------Belum ada catatan disini</p>
            }
        </div>
    )
}

export default NotesList;