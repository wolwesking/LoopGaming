<script>
	import Header from './header.svelte';
	import Footer from './footer.svelte';
</script>

<Header HouseActive="true" />

<div id="joinTag">
	<div>
		<h1>Avalon</h1>
		<p>Avalon is a reliable Discord Giveaway Bot designed to make hosting Giveaways a breeze.</p>
		<button onclick="window.open('https://discord.com/api/oauth2/authorize?client_id=1066431310358380625&permissions=8&scope=applications.commands%20bot', '_blank');">Invite bot</button>
		<button style="background-color: grey;" onclick="window.open('https://discord.gg/6heyUUREUP', '_blank')">Support server</button>

	</div>
	<div>
		<img src="/logo.png" alt="" />
	</div>
</div>

<div class="line" />

<!-- TODO Backend server cound, user count -->

<div id="functions">
	<nav>
		<img src="/decoration1.svg" alt="decoration1" />
	</nav>
	<div>
		<div>
			<img src="/logo1.svg" alt="logo1" />
			<div>
				<h1>Organized Giveaway System</h1>
				<p>We offer a very organized giveaway system with reactions and special features!</p>
				<a href="/commands">More</a>
			</div>
		</div>
		<div>
			<div>
				<h1>Easy to use commands</h1>
				<p>We have easy to use commands that are easy to understand!</p>
				<a href="/commands">More</a>
			</div>
			<img src="/logo2.svg" alt="logo2" />
		</div>
		<div>
			<img src="/logo3.svg" alt="logo3" />
			<div>
				<h1>Reliable Giveaways</h1>
				<p>We have a reliable giveaway system that will fit your needs and that we promise that your giveaways are safe!</p>
				<a href="/commands">More</a>
			</div>
		</div>
	</div>
	<section>
		<img src="/decoration2.svg" alt="decoration2" />
	</section>
</div>
<!-- TODO Largest server -->

<br>
<br>
<br>
<br>
<Footer />
<style>
	/* default */
	* {
		margin: 0;
		font-family: Montserrat;
		color: white;
	}
	button {
		border: none;
		margin: 0;
		padding: 0;
		background: none;
		color: inherit;
		font: inherit;
		outline: none;
		cursor: pointer;
	}

	/* Jointag */
	#joinTag {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 12vh;
		gap: 14rem;
		margin-bottom: 2rem;
	}

	#joinTag > div > p {
		color: #91a18f;
		max-width: 364px;
		margin-top: 1rem;
		margin-bottom: 2rem;
		line-height: 25px;
	}
	#joinTag > div > h1 {
		color: white;
		font-family: Montserrat;
		font-size: 3rem;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}

	#joinTag > div > button {
		border-radius: 2px;
		background: #4845bf;
		padding-left: 2.5rem;
		padding-right: 2.5rem;
		height: 2.5rem; /* 156.25% */
		transition: background-color 0.3s ease;
	}
	#joinTag > div > button:hover {
		background: #8c87ff;
	}

	/* Line */
	.line {
		width: 100%;
		height: 3px;
		background: linear-gradient(180deg, #4423be 0%, #972cdd 100%);
	}

	/* Functions */

	#functions {
		display: flex;
		justify-content: space-between;
		margin-top: 3rem;
	}
	#functions > div > div {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 3.5rem;
		max-width: 1000px;
		
	}

	#functions > div > div > div> p {
		color: #91A18F;
		margin-top: 1.4rem;
		margin-bottom: 1.4rem;
		max-width: 600px;
	}
	#functions > div > div > div> a {
		color: #4E1AE5;
	}

	#functions > nav {
		margin-top: 3rem;
	}

	#functions > section {
		margin-top: 34rem;
	}
</style>
