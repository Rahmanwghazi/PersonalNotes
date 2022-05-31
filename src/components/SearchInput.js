import React from "react";

function SearchInput({ onChange }) {
    return (
        <div className="search-input">
            <input
                type="text"
                placeholder="Cari judul catatanmu..."
                onChange={onChange}
            />
        </div>
    );
}

export default SearchInput;