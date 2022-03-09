const {writeFileSync: write, readFileSync: read} = require('fs')
const DESTINATION = 'data/nodes_file.json';

/**
 * 
 * @param {*} notes Salvar nota 
 */
const save = (notes = []) => {
    const notesJSON = JSON.stringify(notes);
    write(DESTINATION, notesJSON);
}

/**
 * @returns Array
 */
const load = () => {
    try {
        const notesJSON = read(DESTINATION).toString();
        return JSON.parse(notesJSON);
    } catch (error) {
        return [];
    }
}

module.exports = {save, load}