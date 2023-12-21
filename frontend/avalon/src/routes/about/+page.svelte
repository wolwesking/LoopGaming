<script>
	import Header from '../header.svelte';
	import Footer from '../footer.svelte';
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
			<div>
				<div>
					<img src="loopPfp.png" alt="loop" />
					<div>
						<h2>Antimatter</h2>
						<p>Bot Developer</p>
					</div>
				</div>
				<div>
					<img src="antiPfp.png" alt="anti" />
					<div>
						<h2>Antimatter</h2>
						<p>Bot Developer</p>
					</div>
				</div>
				<div>
					<img src="wolfPfp.png" alt="wolf" />
					<div>
						<h2>wolwesking</h2>
						<p>Web Developer</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="right">
		<img src="/decoration6.svg" alt="" />
	</div>
</section>
<br />
<br />
<Footer />

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

	.Creators-div > div >div {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-top: 1rem;

	}

	.Creators-div > div  {
		display: flex;
		justify-content: space-around;
	}
	.Creators-div {
		margin-top: 5rem;
		margin-bottom: 4rem;
	}
	.Creators-div > div > div > div > h2 {
		color: #fff;
		font-family: Montserrat;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		margin-top: 0;
		margin-bottom: 6px;
	}

	.Creators-div > div > div >div > p {
		color: var(--second-text, #91a18f);
		font-family: Montserrat;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		margin: 0;
		line-height: normal;
	}
</style>
