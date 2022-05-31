import React from "react";
import NotesList from "./NotesList";

function ActiveNotes({ data, onDelete, onArchive }) {
    return (
        <>
            <h1>Catatan Aktif</h1>
            <NotesList data={data} onDelete={onDelete} onArchive={onArchive} />
        </>
    )
}

export default ActiveNotes;