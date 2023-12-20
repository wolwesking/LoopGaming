<script>
	import Header from '../header.svelte';
	import Commands from '../commands.svelte';
</script>

<Header ListActive="true" />

<article class="commands-article fade-transition">
	<nav class="decoration-nav">
		<img src="/decoration3.svg" alt="" />
	</nav>
	<div class="commands-container container">
		<div class="commands-info">
			<h1>Commands</h1>
			<p class="optional-params">[ ] - optional parameters</p>
			<p class="required-params">&lt; &gt; - required parameters</p>
		</div>

		<section class="usage-section">
			<div class="usage-details">
				<p class="usage-title purpleDefault">Usage</p>
				<p class="usage-detail grayDefault">g! [ command ]</p>
				<p class="usage-detail grayDefault">/[command]</p>
			</div>
			<br />
			<div class="usage-details">
				<p class="usage-title purpleDefault">Examples</p>
				<p class="usage-detail grayDefault">g! help</p>
				<p class="usage-detail grayDefault">/help</p>
			</div>
			<br />
			<img src="/line.svg" alt="" />
		</section>

		<Commands />
	</div>
	<section class="decoration-section">
		<img src="/decoration4.svg" alt="" />
	</section>
</article>

<style>
	* {
		margin: 0%;
		color: var(--text, #fff);
		color: var(--text, #fff);

		font-family: Montserrat;
	}
	article > div > div > h1 {
		font-size: 48px;
		margin-top: 7rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		text-transform: uppercase;
		margin-bottom: 18px;
		text-align: center;
	}
	article > div > div > p {
		color: #a6a6a6;

		font-family: Montserrat;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-top: 18px;
		text-align: center;
	}

	article > div {
		width: 50rem;
	}

	article > div > div {
		padding-top: 4px;
	}

	section {
		margin-top: 5rem;
		margin-bottom: 3rem;
	}

	.grayDefault {
		color: #91a18f;
		font-family: Montserrat;
		font-size: 14px;
		font-style: normal;
		font-weight: 200;
		line-height: normal;
		margin: 0;
	}

	.purpleDefault {
		color: #4e1ae5;
		font-family: Montserrat;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		margin: 0;
	}

	article {
		padding-top: 3rem;
		display: flex;
		justify-content: space-between;
	}

	.decoration-section {
		margin-top: 40rem;
	}


</style>
