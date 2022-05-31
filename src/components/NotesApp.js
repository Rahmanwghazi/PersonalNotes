import React from 'react';
import { getInitialData } from '../utils';
import ActiveNotes from './ActiveNotes';
import ArchivedNotes from './ArchivedNotes';
import Header from './Header';
import NotesInput from './NotesInput';
import SearchInput from './SearchInput';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            search: '',
        }
        
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) =>
            note.id === id ? { ...note, archived: !note.archived } : note
        );
        this.setState({ notes });
    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        isArchived: false
                    }
                ]
            }
        });
    }

    onFilterNotes() {
        const { notes, search } = this.state;
        const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()));
        return filteredNotes;
    }

    onChange = e => {
        this.setState({ search: e.target.value });
    };

    render() {
        const filteredNotes = this.onFilterNotes();
        const archivedNotes = filteredNotes.filter(note => note.archived);
        const unarchivedNotes = filteredNotes.filter(note => !note.archived);

        return (
            <div className="container">
                <Header />
                <NotesInput addNotes={this.onAddNotesHandler} />
                <SearchInput onChange={this.onChange} />
                <ActiveNotes data={unarchivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                <ArchivedNotes data={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
            </div>
        )
    }
}

export default NotesApp;