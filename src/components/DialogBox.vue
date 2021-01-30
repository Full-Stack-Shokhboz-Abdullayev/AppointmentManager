<template>
	<div class="dialog-container">
		<div class="dialog">
			<h4 class="question">
				Are you sure to delete an appoinment "{{
					dialogAppointment.fullName
				}}"?
			</h4>
			<div class="button-group">
				<button
					class="button-delete dialog-button"
					@click="deleteAppointmentByID(dialogAppointment._id)"
				>
					Yes
				</button>

				<button
					@click="closeDialog"
					class="button-cancel dialog-button"
				>
					No
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex"
export default {
	computed: {
		...mapState(["dialogAppointment", "dialogOpened"])
	},
	methods: {
		...mapMutations(["changeDialog"]),
		...mapActions(["deleteAppointment"]),
		closeDialog() {
			this.changeDialog(false)
		},
		deleteAppointmentByID(_id) {
			this.deleteAppointment(_id)
			this.closeDialog()
		}
	}
}
</script>

<style lang="scss" scoped>
.dialog-container {
	position: fixed;
	width: 100%;
	height: 100%;
	backdrop-filter: blur(10px);
	background: rgba(0, 0, 0, 0.5);
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: calc(-2rem - 88px);
	.dialog {
		background: white;
		padding: 20px;
		border-radius: 10px;
	}
    .button-group {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .dialog-button {
            padding: 5px 10px;
            margin-top: 20px;
            border: 3px black solid;
            border-radius: 5px;
            background: white;
            cursor: pointer;
        }
    }
}
</style>
