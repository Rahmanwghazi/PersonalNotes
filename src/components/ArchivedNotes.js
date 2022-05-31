import React from "react";
import NotesList from "./NotesList";

function ArchivedNotes({ data, onDelete, onArchive }) {
    return (
        <>
            <h1>Arsip</h1>
            <NotesList data={data} onDelete={onDelete} onArchive={onArchive} />
        </>
    )
}

export default ArchivedNotes;