<script>
	// Props import
	export let HouseActive = 'false';
	export let ListActive = 'false';
	export let ServerActive = 'false';

	// Global variables
	// non selected
	const houseSrouce = '/icons/normal/house.svg';
	const listSrouce = '/icons/normal/list.svg';
	const serverSrouce = '/icons/normal/server.svg';

	// selected
	const house_sSrouce = '/icons/selected/house_s.svg';
	const list_sSrouce = '/icons/selected/list_s.svg';
	const server_sSrouce = '/icons/selected/server_s.svg';

	let houseIconSrc = houseSrouce;
	let listIconSrc = listSrouce;
	let serverIconSrc = serverSrouce;
	let houseSelect = '';
	let listSelect = '';
	let serverSelect = '';

	// END BLOCK

	if (HouseActive == 'true') {
		houseIconSrc = house_sSrouce;
		houseSelect = 'selectedText';
	} else {
		houseIconSrc = houseSrouce;
	}

	if (ListActive == 'true') {
		listIconSrc = list_sSrouce;
		listSelect = 'selectedText';
	} else {
		listIconSrc = listSrouce;
	}

	if (ServerActive == 'true') {
		serverIconSrc = server_sSrouce;
		serverSelect = 'selectedText';
	} else {
		serverIconSrc = serverSrouce;
	}
</script>
<!-- TODO dashboard -->
<!-- TODO login -->
<header>
	<nav>
		<a href="/">
			<div class="Pages underline-hover">
				<img src={houseIconSrc} alt="icon" />
				<p class={houseSelect}>Home</p>
			</div>
		</a>
		<a href="/commands">
			<div class="Pages underline-hover">
				<img src={listIconSrc} alt="icon" />
				<p class={listSelect}>Commands</p>
			</div>
		</a>
		<!-- <a href="/dashboard">
			<div class="Pages underline-hover">
				<img src={serverIconSrc} alt="icon" />
				<p class={serverSelect}>Dashboard</p>
			</div>
		</a> -->
	</nav>
</header>

<style>
    
    /* Default settings */
	* {
		margin: 0;
		padding: 0;
		font-family: Montserrat;
		font-weight: 600;
		color: #91a18f;
		padding: 0.3rem;
		user-select: none;
	}
	a {
		text-decoration: none; /* Remove underline */
		color: inherit; /* Use the parent element's color */
		padding: 0;
	}
	.selectedText {
		background: var(--primary-gradient, linear-gradient(180deg, #4423be 0%, #972cdd 100%));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

    .underline-hover {
        color: #AEBD9A;
		text-decoration: none; /* Remove default underline */
		transition: text-decoration 1s ease; /* Add a smooth transition */
	}

	.underline-hover:hover {
		text-decoration: underline; /* Underline on hover */
	}

	/* Header */

	header {
		display: flex;
		justify-content: center;
        background-color: #242424;
        position: fixed;
        width: 100%;
        z-index: 999;
	}

	/* NavBar */
	nav {
		display: flex;
		gap: 2rem;
	}
	.Pages {
		display: flex;
		gap: 0.3rem;
	}


	@media only screen and (max-width: 600px) {
            /* Mobile-specific styles */
            nav {
                flex-direction: column;
                align-items: center;
				gap: 0px;
            }
            .Pages {
                margin-top: 1rem;
            }
            /* Adjust font size or padding as needed */
            p {
                font-size: 16px;
                padding: 0.2rem;
            }
			
        }
</style>
