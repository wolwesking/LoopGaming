<script>
	import Header from '../header.svelte';
</script>

<Header />
<section>
	<div id="left">
		<img src="/decoration5.svg" alt="decor5" />
	</div>
	<div id="center">
		<div><h1>ABOUT US</h1></div>
		<h3>Technologies</h3>
		<div class="technology-div">
			<div>
				<div class="technology-bulletpoint">
					<img src="/bulletpoint.svg" alt="" />
					<p>Node.js</p>
				</div>
				<div class="technology-bulletpoint">
					<img src="/bulletpoint.svg" alt="" />
					<p>Windows server</p>
				</div>
			</div>
			<div>
				<div class="technology-bulletpoint">
					<img src="/bulletpoint.svg" alt="" />
					<p>Discord.js</p>
				</div>
				<div class="technology-bulletpoint">
					<img src="/bulletpoint.svg" alt="" />
					<p>Express.js</p>
				</div>
			</div>
		</div>
		<div class="Creators-div">
			<h3>Creators</h3>
		</div>
	</div>

	<div id="right">
		<img src="/decoration6.svg" alt="" />
	</div>
</section>

<style>
	* {
		text-align: center;
		color: #fff;
		font-family: Montserrat;
		font-style: normal;
		line-height: normal;
	}
	h1 {
		margin-top: 11rem;
		color: #fff;
		font-size: 48px;
		font-weight: 700;
		text-transform: uppercase;
	}
	h3 {
		font-size: 36px;
		font-weight: 600;
		background: var(--primary-gradient, linear-gradient(180deg, #4423be 0%, #972cdd 100%));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	section {
		display: flex;
		justify-content: space-between;
	}
	#center {
		max-width: 1000px;
		width: 100%;
	}
	.technology-bulletpoint {
		display: flex;
		gap: 15px;
	}
	.technology-div {
		display: flex;
		justify-content: space-around;
	}
</style>
