const {save, load} = require('./utils/notes_file_helper');

const insert = ({title, content}) => {
    const notes = load();
    const foundNote = notes.find(note => note.title === title);
    if (foundNote) {
        console.log("Title already exists, take another one.");
    }
    else {
        // save([...notes, {title, content}]); forma ideal
        notes.push({title, content})
        save(notes);
        console.log("Note saved!");
    }
}

const remove = (title) => {
    const notes = load();
    const index = notes.findIndex(note => note.title === title);
    if (index<0) {
        console.log('Note not found!');
    }
    else {
        notes.splice(index, 1);
    }
    save(notes);
    console.log('Note removed successfully');
}

const list = () => {
    const notes = load();
    if (notes.length ===0) {
        console.log("Empty notes");
    }
    else {
        console.table(notes);
    }
}

const search = (title) => {
    const notes = load();
    const foundNote = notes.find(note => note.title === title);
    if (!foundNote) {
        return console.log("Note not found.");
    }
    console.table(foundNote);
}

module.exports = {
    insert, remove, list, search
}