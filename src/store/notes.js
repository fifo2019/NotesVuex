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
        descr: 'DEscription for first note',
        date: new Date(Date.now()).toLocaleString(),
        priority: 'standart',
        change: {
          title: '',
          descr: '',
        }
      },
      {
        title: 'Second Note',
        descr: 'DEscription for second note',
        date: new Date(Date.now()).toLocaleString(),
        priority: 'standart',
        change: {
          title: '',
          descr: '',
        }
      },
      {
        title: 'Third Note',
        descr: 'DEscription for third note',
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

      let {title, descr} = data

      state.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString()
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