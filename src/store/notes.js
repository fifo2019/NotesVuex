export default {
  state: {
    priority: [
      'standart',
      'important',
      'critical'
    ],
    message: null,
    notes: [
      {
        title: 'First Note',
        descr: 'Description for first note',
        date: new Date(Date.now()).toLocaleString(),
        priority: 'standart',
        change: {
          title: '',
          descr: '',
        }
      },
      {
        title: 'Second Note',
        descr: 'Description for second note',
        date: new Date(Date.now()).toLocaleString(),
        priority: 'standart',
        change: {
          title: '',
          descr: '',
        }
      },
      {
        title: 'Third Note',
        descr: 'Description for third note',
        date: new Date(Date.now()).toLocaleString(),
        priority: 'standart',
        change: {
          title: '',
          descr: '',
        }
      }
    ]
  },
  mutations: {
    addNote(state, data) {

      let {title, descr, priority} = data

      state.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
        priority,
        change: {
          title: '',
          descr: '',
        }
      })
    },
    removeNote(state, index) {
      state.notes.splice(index, 1)
    },
    setMessage(state, message) {
      state.message = message
    },
    removeMessage(state) {
      state.message = null
    },
    changeNote(state, data) {
      let note = state.notes[data.index]

      switch (data.type) {
        case 'title':
          note.change.title = note.title
          break
        case 'descr':
          note.change.descr = note.descr
          break
        default:
          break
      }
    },
    saveNote(state, data) {
      let note = state.notes[data.index]

      switch (data.type) {
        case 'title':
          note.title = note.change.title
          note.date = new Date(Date.now()).toLocaleString()
          note.change.title = ''
          break
        case 'descr':
          note.descr = note.change.descr
          note.date = new Date(Date.now()).toLocaleString()
          note.change.descr = ''
          break
        default:
          break
      }
    },
    exitChangeNote(state, data) {
      let note = state.notes[data.index]

      switch (data.type) {
        case 'title':
          note.change.title = ''
          break
        case 'descr':
          note.change.descr = ''
          break
        default:
          break
      }
    }
  },
  actions: {
    addNote({commit}, payload) {
      commit('addNote', payload)
    },
    removeNote({commit}, payload) {
      commit('removeNote', payload)
    },
    setMessage({commit}, payload) {
      commit('setMessage', payload)
    },
    removeMessage({commit}) {
      commit('removeMessage')
    },
    changeNote({commit}, payload) {
      commit('changeNote', payload)
    },
    saveNote({commit}, payload) {
      commit('saveNote', payload)
    },
    exitChangeNote({commit}, payload) {
      commit('exitChangeNote', payload)
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    },
    getMessage(state) {
      return state.message
    },
    getPriority(state) {
      return state.priority
    }
  }
}