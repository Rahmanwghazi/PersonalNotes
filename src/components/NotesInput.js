import React from 'react';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            errMsg: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        if (this.validate()) {
            this.props.addNotes(this.state);
            this.setState({
                title: '',
                body: '',
                errMsg: '',
            });
        }
    }

    validate() {
        let errMsg = '';
        if (this.state.title.length === 0 || this.state.body.length === 0) {
            errMsg = 'Title dan Description harus diisi!';
        } else {
            if (this.state.title.length > 50) {
                errMsg = 'Title tidak boleh lebih dari 50 karakter';
            }
        }

        if (errMsg !== '') {
            this.setState({ errMsg });
            return false;
        }
        return true;

    }

    render() {
        const characterLeft = 50 - this.state.title.length;

        return (
            <form className='notes-input' onSubmit={this.onSubmitEventHandler}>
                <h2 className="text-center">Buat Catatan </h2>
                <input type="text" placeholder="masukkan judul catatan" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                {
                    characterLeft !== 50 && characterLeft > 0 ?
                        <p>{characterLeft} karakter tersisa</p> :
                        (characterLeft < 0 ?
                            <p className="text-danger">{Math.abs(characterLeft)} karakter berlebih!</p> :
                            null
                        )
                }
                <textarea type="text" placeholder="tuliskan catatanmu di sini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <div className='notes-input-bottom'>
                    <span className="text-danger">{this.state.errMsg}</span>
                    <button className="btn-submit" type="submit">Buat</button>
                </div>
            </form>
        )
    }
}

export default NotesInput;