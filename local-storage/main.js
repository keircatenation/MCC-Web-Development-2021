const model = {
    notes: [],
    init() {
        if (localStorage.getItem('notes')) {
            this.notes = JSON.parse(localStorage.getItem('notes'))
        }
    },
    addNote(note) {
        this.notes.push(note);
        localStorage.setItem('notes', JSON.stringify(this.notes))
    },
    clearNotes() {
        this.notes = []
        localStorage.removeItem('notes')
    },
    getNotes() {
        return this.notes
    }
}

const controller = {
    init() {
        model.init();
        view.init();
    },
    getNotes() {
        return model.getNotes()
    },
    addNote(note) {
        model.addNote(note)
        view.render();
    },
    clear() {
        model.clearNotes()
        view.render()
    }
}

const view = {
    init() {
        this.form = document.querySelector('form')
        this.input = document.querySelector('#input')
        this.output = document.querySelector('#storage')
        this.clear = document.querySelector('#clear')

        this.form.addEventListener('submit', e => {
            e.preventDefault()
            let note = { content: this.input.value };
            this.input.value = '';
            controller.addNote(note);
        })

        this.clear.addEventListener( 'click', e => {
            e.preventDefault()
            controller.clear()
        } )

        this.render();
    },
    render() {
        this.output.innerHTML = this.template()
    },
    template() {
        let html = '';
        controller.getNotes().forEach(note => {
            html += `<div>${note.content}</div>`
        });
        return html
    }
}

controller.init()