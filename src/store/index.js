import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

let uniqueId = 0

export default new Vuex.Store({
	state: {
		dialogOpened: false,
		dialogAppointment: {},
		appointments: [
			{
				_id: (uniqueId += 1),
				fullName: `App${uniqueId}`,
				description: "Should be done.",
				date: "2020-01-01",
				done: false
			},
			{
				_id: uniqueId++,
				fullName: `App${uniqueId}`,
				description: "Should be done.",
				date: "2020-01-01",
				done: false
			},
			{
				_id: uniqueId++,
				fullName: `App${uniqueId}`,
				description: "Should be done.",
				date: "2020-01-01",
				done: false
			},
			{
				_id: uniqueId++,
				fullName: `App${uniqueId}`,
				description: "Should be done.",
				date: "2020-01-01",
				done: false
			},
			{
				_id: uniqueId++,
				fullName: `App${uniqueId}`,
				description: "Should be done.",
				date: "2020-01-01",
				done: false
			}
		]
	},
	mutations: {
		changeAppointmentStraight({ appointments }, payload) {
			const index = appointments.findIndex((a) => a._id === payload._id)
			console.log(payload, index)

			//detect any changes in payload.newData and accordingly change actual value in state
			Object.keys(payload.newData).forEach((p) => {
				Vue.set(appointments[index], p, payload.newData[p])
			})
		},
		deleteAppointmentStraight({ appointments }, _id) {
			const index = appointments.findIndex((a) => a._id === _id)
			Vue.delete(appointments, index)
		},
		addAppointmentStraight(state, payload) {
			const data = { ...payload, _id: uniqueId++ }
			state.appointments.unshift(data)
		},
		changeDialog(state, { bool, _id }) {
			if (_id) {
				const val = state.appointments.find((a) => a._id === _id)
				console.log(val)
				state.dialogAppointment = val
			}
			console.log(state.dialogAppointment)
			state.dialogOpened = bool
		}
	},
	actions: {
		changeAppointment({ commit }, payload) {
			commit("changeAppointmentStraight", payload)
		},
		deleteAppointment({ commit }, payload) {
			commit("deleteAppointmentStraight", payload)
		},
		addAppointment({ commit }, payload) {
			commit("addAppointmentStraight", payload)
		}
	},
	modules: {}
})
