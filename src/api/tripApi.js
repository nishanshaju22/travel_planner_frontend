import api from './axios'

export const tripsApi = {
	getAllTrips: async() => {
		const response = await api.get('/trip/')
		return response.data
	},

	getTrip: async(tripId) => {
		const response = await api.get(`/trip/${tripId}`)
		return response.data
	},

	createTrip: async(tripData) => {
		const response = await api.post('/trip/', tripData)
		return response.data
	},

	updateTrip: async(tripId, tripData) => {
		const response = await api.patch(`/trip/${tripId}`, tripData)
		return response.data
	},

	deleteTrip: async(tripId) => {
		const response = await api.delete(`/trip/${tripId}`)
		return response.data
	},
}
