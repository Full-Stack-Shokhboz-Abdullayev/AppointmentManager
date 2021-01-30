<template>
	<nav class="nav-bar">
		<div class="logo">
			<h2>
				Apooi
			</h2>
		</div>
		<ul class="nav-item-list">
			<router-link tag="li" :to="{ name: 'appointment-list' }" exact exact-active-class="ex-active" class="nav-item" >
				All
			</router-link>
			<router-link tag="li" :to="{ name: 'add-appointment' }" exact exact-active-class="ex-active"  class="nav-item">
				Add
			</router-link>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "NavBar"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav-bar {
	height: 80px;
	display: grid;
	grid-template-columns: 2fr 1fr;
	background: black;
	color: white;
	box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.26);
	.logo {
		align-self: center;
		font-family: cursive;
	}
	.nav-item-list {
		display: flex;
		justify-content: space-around;
		align-items: center;
		.nav-item {
			list-style: none;
			cursor: pointer;
			border-radius: 5px;
			transition: 0.3s ease-in-out all;
			padding: 10px 30px;
			&.ex-active,
			&:hover {
				background: rgb(255, 255, 255);
				color: black;
			}
		}
	}
}
</style>
