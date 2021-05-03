const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
								 
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    

}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })

}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
	
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
					   
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

// const fs = require('fs')
// const chalk = require('chalk')

// const getNotes = function () {
//     return 'Your notes...'
// }

// const addNote = (title, body) => {
//     const notes = loadNotes()
//     const duplicateNote = notes.find((note) => note.title === title)

//     if (!duplicateNote) {
//         notes.push({
//             title: title,
//             body: body
//         })
//         saveNotes(notes)
//         console.log('New note added!')
//     } else {
//         console.log('Note title taken!')
//     }
// }

// const removeNote = function (title) {
//    const notes = loadNotes()
//    const notesToKeep = notes.filter((note) => note.title !== title)
   

//    if(notes.length>notesToKeep.length) {
//        console.log(chalk.green.inverse('Note Removed!'))
//        saveNotes(notesToKeep)
//    } else {
//        console.log(chalk.red.inverse('note not found'))
//    }

// }

// const listNotes = () => {
//    const notes = loadNotes()
//     console.log(chalk.inverse('Your notes!'))

//     notes.forEach((note) =>{
//         console.log("title: "+note.title+",","body: "+note.body)
//     })

// }

// const readNotes = (title) => {
//     const notes = loadNotes()
//     const foundNote = notes.find((note)=> note.title === title)
    
//     if (foundNote) {
//         console.log(chalk.inverse(foundNote.title))
//         console.log(chalk.inverse(foundNote.body))
//     } else {
//         console.log(chalk.red.inverse("note not found or can be read"))
//     }


//      notes.forEach((note) =>{
//          saveNotes(note.title,note.body);
//      })
 
//  }

// const saveNotes = function (notes) {
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', dataJSON)
// }

// const loadNotes = function () {
//     try {
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     } catch (e) {
//         return []
//     }
// }

// module.exports = {
//     getNotes: getNotes,
//     addNote: addNote,
//     removeNote: removeNote,
//     listNotes: listNotes,
//     readNotes: readNotes
// }