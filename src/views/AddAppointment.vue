<template>
	<div class="add-appointment">
		<h1>There you can add new Appointment.</h1>
		<form class="form" @submit.prevent="add">
			<label class="form-input-conatainer">
				<input
					type="text"
					v-model="newAppointment.fullName"
					class="form-input full-name"
					required
				/>
				<span>Appointment Full Name</span>
			</label>
			<div class="form-input-conatainer">
				<datetime
					type="datetime"
					v-model="newAppointment.date"
					input-class="form-input date"
					required
				></datetime>
				<span>Pick a Date and Time of Appointment</span>
			</div>

			<label class="form-input-conatainer">
				<textarea
					required
					name="description"
					class="form-input description"
					cols="10"
					v-model="newAppointment.description"
				></textarea>
				<span>Add a Description</span>
			</label>
			<button class="submit-btn">
				Add
			</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from "vuex"

export default {
	name: "AddAppointment",
	data() {
		return {
			newAppointment: {
				fullName: "",
				description: "",
				date: "",
				done: false
			}
		}
	},
	methods: {
		...mapActions(["addAppointment"]),
		add() {
			this.addAppointment(this.newAppointment)

			this.$router.push({ name: "appointment-list" })
		}
	}
}
</script>

<style lang="scss">
.add-appointment {
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	.form {
		.submit-btn {
			border: 3px solid black !important;
			outline: none;
			background: white;
			display: block;
			margin: auto;
			margin-top: 30px;
			width: 60%;
			padding: 10px;
			border-radius: 15px;
			font-size: 18px;
			cursor: pointer;
			transition: 0.3s ease border-radius;

			&:hover {
				border-radius: 0px;
			}
		}
		width: 500px;
		.form-input-conatainer {
			margin-top: 20px;
			display: flex;
			flex-direction: column-reverse;
			text-align: left;
			span {
				margin-bottom: 10px;
				font-style: italic;
			}
			.form-input {
				width: 100%;
				max-width: 100%;
				min-width: 100%;
				font-size: 18px;
				padding: 5px 10px !important;
				border: 3px solid black !important;
				border-radius: 15px;
				outline: none;
				transition: 0.3s ease border-radius;
				&:focus {
					border-radius: 0px;
					border-radius: 0px;
				}
				&:focus ~ span {
					font-weight: bold;
					font-style: normal;
				}
			}
		}
	}
}
</style>
