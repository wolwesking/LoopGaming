<footer>
	<article>
		<div class="text">
			<section>
				<h1>Contact</h1>
				<div>
					<a href="/about">About Us</a>
					<a href="https://discord.gg/6heyUUREUP">Discord server</a>
					<a href="mailto:avalonbot@email.com">Mail</a>
				</div>
			</section>

			<section>
				<h1>Terms</h1>
				<div>
					<a href="/terms">Terms of use</a>
				</div>
			</section>
		</div>
		<section>
			<img src="/avalonLogoFooter.svg" alt="footerLogo" />
		</section>
	</article>
</footer>
<br>
<br>
<br>
<br>
<style>
	* {
		margin: 0;
		color: #fff;
		font-family: Montserrat;
	}
	a {
		text-decoration: none;
		color: inherit;
		font-size: 16px;
		font-style: normal;
		font-weight: 100;
		line-height: normal;
		display: block;
	}
	h1 {
		font-size: 26px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
	article {
		display: flex;
		max-width: 1000px;
		width: 100%;
		justify-content: space-between;
	}
	.text {
		display: flex;
		justify-content: space-between;
		max-width: 500px;
		width: 35%;
	}

	section > div {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		gap: 11px;
	}
	footer {
		display: flex;
		justify-content: center;
		
	}

	@media only screen and (max-width: 600px) {
            article {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .text {
                width: 75%;
                margin-bottom: 1rem;
            }
            section > div {
                align-items: center;
                text-align: center;
            }
			img {
				display: none;
			}
        }
</style>
