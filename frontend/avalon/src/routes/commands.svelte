<script>
	// Global var
	let text1Selected = 'selected';
	let text2Selected = '';
	let text3Selected = '';
	let datasource = '';

	const giveawayCommands = [
		{ a: 'create | start', b: 'Start a giveaway in your guild!' },
		{ a: 'drop', b: 'Start a drop giveaway!' },
		{ a: 'edit', b: 'Edit an already running giveaway!' },
		{ a: 'end', b: 'End an already running giveaway!' },
		{ a: 'list', b: "List all the giveaway's running within this guild!" },
		{ a: 'pause', b: 'Pause an already running giveaway nh ' },
		{ a: 'reroll', b: 'Reroll an ended giveaway!' },
		{ a: 'resume', b: 'Resume a paused giveaway!' }
	];

	const generalCommands = [
		{ a: 'help', b: 'Shows all available commands to this bot!' },
		{ a: 'invite', b: 'Get the bots invite link!' },
		{ a: 'ping', b: 'Check the bots web-socket latency!' }
	];

	datasource = generalCommands.concat(giveawayCommands);

	// default position
	// Button push handling
	function focus(a) {
		console.log();
		switch (a) {
			case 0:
				text1Selected = 'selected';
				text2Selected = '';
				text3Selected = '';
				datasource = generalCommands.concat(giveawayCommands);
				break;
			case 1:
				text2Selected = 'selected';
				text3Selected = '';
				text1Selected = '';
				datasource = giveawayCommands;
				break;
			case 2:
				text3Selected = 'selected';
				text2Selected = '';
				text1Selected = '';
				datasource = generalCommands;
				break;
		}
	}
</script>

<header>
	<button on:click={() => focus(0)}>
		<p id="All" class={text1Selected} style="">All</p>
	</button>
	<button on:click={() => focus(1)}>
		<p id="Giveaway" class={text2Selected} style="">Giveaway</p>
	</button>
	<button on:click={() => focus(2)}>
		<p id="General" class={text3Selected}>General</p>
	</button>
</header>
<article>
	<ul>
		{#each datasource as item, index}
			<li key={index}>
				<span class="title">{item.a}</span>
				<span class="greyTextStyle"> - {item.b}</span>
			</li>
		{/each}
	</ul>
</article>

<style>
	* {
		font-family: Montserrat;
	}
	#Giveaway {
		margin-right: 28px;
	}
	#All{
		margin-right: 53.5px;
	}
	button {
		/* Reset all default button styles */
		appearance: none;
		background: none;
		color: #fff;
		border: none;
		margin: 0;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: none; /* Remove the default focus outline */
		/* Additional styles can be added or adjusted as needed */
	}
	header {
		display: flex;
		position: relative;
		color: #fff;
		padding-left: 50px;
		font-family: Montserrat;
		font-size: 18px;
		font-style: normal;
		line-height: normal;
	}

	.selected {
		font-weight: 600;
	}

	.title {
		color: #fff;
		font-family: Montserrat;
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}

	.greyTextStyle {
		color: #a7aea6;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	ul {
		list-style: none;
		padding: 0; /* Optional: Remove default padding */
		margin: 0;
		/* Optional: Remove default margin */
	}
	li {
		margin-top: 35px;
		margin-bottom: 35px;
		border-bottom: 1px solid #ccc; /* Border at the bottom of each item */
		padding: 10px;
	}

	@media only screen and (max-width: 600px) {
		header {
			padding-left: 0; /* Remove left padding */
			flex-direction: column; /* Stack buttons vertically */
			align-items: center; /* Center buttons */
		}
		button {
			margin: 5px; /* Add some space between buttons */
		}
		article {
			padding: 10px; /* Add padding to the article */
		}
		li {
			margin-top: 20px;
			margin-bottom: 20px;
		}
		#Giveaway {
			margin-right: 0px;
		}
		#All {
			margin-right: 0px;
		}
	}
</style>
