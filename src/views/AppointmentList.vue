<template>
	<!-- rendering appointments with v-for -->
	<div class="conatiner">
		<app-dialog-box v-if="dialogOpened"></app-dialog-box>
		<div class="search-wrapper">
			<input
				type="text"
				class="search"
				v-model="searchWord"
				placeholder="Type here to search"
			/>
			<svg
				class="icon"
				fill="#000000"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 26 26"
				width="26px"
				height="26px"
			>
				<path
					d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"
				/>
			</svg>
		</div>
		<div v-if="filteredAppointments.length === 0" class="no-result">
			<p>Sorry, no results found :-(</p>
		</div>
		<transition-group name="appointment" tag="div" class="appointment-list">
			<div
				class="particular-appointment"
				v-for="appointment in paginatedAppointments"
				:key="appointment._id"
			>
				<h3 class="particular-appointment__name">
					{{ appointment.fullName }}
				</h3>
				<p class="particular-appointment__date">
					Date: {{ appointment.date | humanReadable }}
				</p>
				<p class="particular-appointment__description">
					Description: {{ appointment.description }}
				</p>
				<label>
					<input
						type="checkbox"
						:checked="appointment.done"
						@change="changeDone(appointment._id, appointment.done)"
					/>
					{{ appointment.done | filterDone }}
				</label>
				<button @click="openDialog(appointment._id)" class="delete-btn">
					<svg
						height="427pt"
						viewBox="-40 0 427 427.00131"
						width="427pt"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
						/>
						<path
							d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
						/>
						<path
							d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"
						/>
						<path
							d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
						/>
					</svg>
				</button>
			</div>
		</transition-group>
		<paginate
			:pageCount="Math.ceil(filteredAppointments.length / limit)"
			:clickHandler="functionName"
			:prevText="'Prev'"
			:nextText="'Next'"
			:containerClass="'pagination'"
		>
		</paginate>
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex"

import AppDialogBox from "@/components/DialogBox"

export default {
	name: "AppointmentList",
	components: {
		AppDialogBox
	},
	data() {
		return {
			searchWord: "",
			page: 0,
			limit: 2
		}
	},
	computed: {
		...mapState(["appointments", "dialogOpened"]),
		filteredAppointments() {
			return this.appointments.filter((a) =>
				a.fullName.toLowerCase().includes(this.searchWord.toLowerCase())
			)
		},
		paginatedAppointments() {
			return this.filteredAppointments.slice(
				this.page * this.limit,
				this.page * this.limit + this.limit
			)
		}
	},

	methods: {
		...mapMutations(["changeDialog"]),
		...mapActions(["changeAppointment", "deleteAppointment"]),
		openDialog(_id) {
			this.changeDialog({ bool: true, _id })
		},

		changeDone(_id, val) {
			const changedVal = !val
			this.changeAppointment({ _id, newData: { done: changedVal } })
		},

		functionName(page) {
			this.page = page - 1
		}
	},
	filters: {
		filterDone(val) {
			return val ? "Done" : "Active"
    },
    humanReadable(date) {
      const h = String(
				new Date(date).getHours()
			).padStart(2, "0")
			const m = String(
				new Date(date).getMinutes()
			).padStart(2, "0")
			const dd = String(
				new Date(date).getDate()
			).padStart(2, "0")
			const mm = String(
				new Date(date).getMonth() + 1
			).padStart(2, "0")
      const yyyy = new Date(date).getFullYear()

      return `${yyyy}-${mm}-${dd} at ${h}:${m}`
    }
	}
}
</script>

<style lang="scss">
//animations
.pagination {
	padding: 0px;
	margin: 0;
	margin-bottom: 30px !important;
	li {
		display: inline-block !important;
		list-style: none;
		border: 3px solid black;
		cursor: pointer;
		margin: 1px;
		* {
			display: inline-block !important;

			padding: 5px 15px;
			outline: none !important;
		}
		&.active {
			background: black;
			color: white;
		}
		&.disabled {
			border: none;
			* {
				cursor: not-allowed;
			}
			cursor: not-allowed;
		}
	}
}

.appointment-enter {
	opacity: 0;
	transform: translateY(-40px);
}
.appointment-enter-active {
	transition: 0.3s ease-in-out all;
}
.appointment-leave-active {
	transition: 0.3s ease-in-out all;
	opacity: 0;
	position: absolute !important;
	transform: translateY(40px);
}

.appointment-move {
	transition: 0.4s ease-in-out transform;
}

.search-wrapper {
	position: relative;
	display: flex;
	left: 50%;
	transform: translateX(-50%);
	align-items: center;
	justify-content: center;
	margin-top: 40px;
	width: 400px;
	.icon {
		position: absolute;
		right: 10px;
		pointer-events: none;
	}
	.search {
		font-size: 18px;
		width: 100%;
		padding: 5px 10px !important;
		border: 3px solid black !important;
		border-radius: 15px;
		outline: none;
		transition: 0.3s ease border-radius;
		&:focus {
			border-radius: 0px;
			border-radius: 0px;
		}
	}
}
.conatiner {
	width: 100%;
}
.appointment-list {
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 0;
	margin-top: 2rem;
	height: auto;

	align-items: center;
	justify-content: space-around;
	.particular-appointment {
		display: inline-block !important;
		background: black;
		color: white;
		width: 400px;
		position: relative;
		padding: 1rem;
		border-radius: 10px;
		margin: 1.2rem;
		text-align: left;
		&__name {
			margin-top: 5px !important;
		}
		input[type="checkbox"] {
			cursor: pointer;
		}
		.delete-btn {
			background: white;
			border: none;
			border-radius: 5px;
			position: absolute;
			bottom: 10px;
			right: 10px;
			cursor: pointer;
			svg {
				width: 20px;
				height: 20px;
			}
		}
	}
}
</style>
