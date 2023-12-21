<script>
	import Footer from '../footer.svelte';
	import Header from '../header.svelte';
</script>

<Header />


<div class="wrapper">
    <div id="left">
        <img src="/decoration7.svg" alt="decor7">
    </div>
    <article>
    <h1>Terms of use</h1>

        <section>
            <header>
                <h2>Data collection</h2>
                <img src="/line.svg" alt="line" width="400px" />
            </header>
            <div class="bulletpoint">
                <img src="/bulletpoint.svg" alt="" />
                <p>You agree that we can collect and store data of your giveaways that you host.</p>
            </div>
            <div class="bulletpoint">
                <img src="/bulletpoint.svg" alt="" />
                <p>You agree that we can collect users from giveaways. (Ex - Host Username, and winners)</p>
            </div>
        </section>
        <section>
            <header>
                <h2>By using our bot you agree</h2>
                <img src="/line.svg" alt="line" width="737px" />
            </header>
            <div class="bulletpoint">
                <img src="/bulletpoint.svg" alt="" />
                <p>You agree that you will not use the bot for bad.</p>
            </div>
            <div class="bulletpoint">
                <img src="/bulletpoint.svg" alt="" />
                <p>You agree that you will not use the bot to giveaway illegal things.</p>
            </div>
        </section>
        <section>
            <header>
                <h2>Error Reporting</h2>
                <img src="/line.svg" alt="line" width="737px" />
            </header>
            <div class="bulletpoint">
                <img src="/bulletpoint.svg" alt="" />
                <p>Avalon staff have the right to access a user's server that is using our bot.</p>
            </div>
            <div class="bulletpoint">
                <img src="/bulletpoint.svg" alt="" />
                <p>
                    When reporting false information or inappropriate information to our staff you will be
                    blacklisted from our support system without warning.
                </p>
            </div>
        </section>
    </article>
    <div id="right">
        <img src="/decoration8.svg" alt="decor8">
    </div>
</div>

<Footer />

<style>
	* {
		color: #a8a8a8;
		font-family: Montserrat;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.75rem;
	}
	h1 {
		text-align: center;
		font-family: Montserrat;
		font-size: 3rem;
		font-weight: 800;
		line-height: normal;
		background: var(--primary-gradient, linear-gradient(180deg, #4423be 0%, #972cdd 100%));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
        margin-top: 7rem;
	}
	h2 {
		margin: 0;
		color: #fff;
		font-size: 1.5rem;
		font-weight: 600;
		line-height: normal;
	}
	p {
		color: #a8a8a8;
		font-size: 1.1rem;
	}
	section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		width: 800px;
	}
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 150vh;
	}
	.bulletpoint {
		display: flex;
		gap: 23px;
		margin-left: 1rem;
	} 
    #left{
        margin-top: 150px;
    }

    #right{
        margin-top: 747px;
    }
    .wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 7rem;
    }
</style>
