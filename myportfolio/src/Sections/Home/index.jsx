import styles from "./styles.module.css";

function Home() {
	const cv = 'https://s3.eu-west-2.amazonaws.com/document-api-images-live.ch.gov.uk/docs/1EmunB-frnHu-JCfVFZq9PYzlOLAUCIjSElvUH2vSig/application-pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWRGBDBV3HABMF3F7%2F20220825%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220825T140914Z&X-Amz-Expires=60&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCWV1LXdlc3QtMiJHMEUCIDUwFpx0ByNQkh%2BQoW%2FXtJx4UhJBTQNpcot011Xra3VjAiEAxJ8HxyP1bURdTWLlaBNhO8CX6FyxzdUoYYrg4J37pbwq3AQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgw0NDkyMjkwMzI4MjIiDAxq8c8BXpNA4y307SqwBAtVSO0b9mq86CNcU2n9cAm59cZLIKGjDW4gx0hJKJJqZ3SR%2FHcrnIVHLOsmCsY52Whyr7LbCvw7o45p%2BZmN%2FOCVkYiZrA6%2BitKg%2BazVXO43RmfX5mZdZktNG2NQjLsijPGsZMdA65vKePDeJ1axBB0%2BTD7FYOO9mAAOEMlDkCAVRNvBj6mkTZNQ%2FtXpBKDaV7u155aA9FyOLeBgSpnQ9L6HrC8SGpB0wyeejq5iG69aiUrIuf0lkSCkWZpqUjGvmtR9WN2Za8Fr9VyQJAmVltoOdtmUNM30%2BQfw4II0iCYhKipSr7eI97kbHFT0lGQ15zEuV%2BRtPQ%2F0IttvaamdHy39JyEXAbPJeO6uSB6qQrkx4tRXMBe2Y9ElBLiYokcewWUGecnotzbHHLc%2BNIDAnsIy38vF6nCeT4w1ADF%2F%2FYY%2BCPbhf4wMqxHjZ%2BUALz5TxSaKW1f%2FcSFjDsudXvWCVq2g2RIICl9IXhEAzkW2rAqqzS10IkMOikNwY%2Bg8U3NPkJ9wX%2FWkyWWbk401mJb1vUq5rTB2TipZDTncKbxgunufd1vja2qc102y27k1t42LPZbmW%2F1YfVWGwQKrrkKw0YKTW4hFji%2FuhLlZcWxp9UB3I1kBYaomU9gIWq1up%2FeWMAuh3lCZpBKQIopCCdhdpDLDhT0XJO0dJ2odLkwVi%2BwXA4cC0dXufAI1AKXhczmFO3EmmALYL6E2e9A8Hh0G4OjmGiuVeHmRJzilmvC%2F5T8lMMmJnZgGOqkB0OfgpSkqaaH3bet4pFQQoaKZRx%2F7Xz0pvuGFJuT02EgU1w7z%2BwQ%2ByroJXRT2a3OZ9jUZzMs5q38cpuxNkD0mM5QnRq7VdaSnlO7jNiVvD53UmGQjFlG1mv%2BjbHeMdqY6KdNGPzSzTpYT77Hl8poq%2Bp4lZ9%2FElJsbs7SH9%2BJhhlH%2FcWEPO6nIaACMAuf%2F99wCxJ%2BE3tSo5JOP1HugUqjwqikAwPT7BufinQ%3D%3D&X-Amz-SignedHeaders=host&response-content-disposition=inline%3Bfilename%3D%2214117288_newinc_2022-05-19.pdf%22&X-Amz-Signature=964639db6151850c69042d4677a57dce806fd7613db527e80ce7a85facd0cf69'

	return (
		<section className={styles.home_section} id="home">
			<h1 className={styles.heading_1}>Hey, I'm Halil.</h1>
			<h2 className={styles.heading_2}>I build things for the web.</h2>
			{/* <img className={styles.headshot} src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg" alt="cat"></img> */}
			<p className={styles.desc}>
			As a junior developer with a non-traditional background working to break into the tech industry,
			I am highly motivated, resourceful and always eager to learn. Through my time at the intensive, 
			16-week long School Of Code Web development bootcamp, I have worked in both agile teams and alone 
			to build and deploy software, honing my technology and people skills in the process.
			</p>
			<a href={cv} target="_blank "download="Halil_Coskun_CV">
				<button className={styles.btn} onclick="window.open" >Download my CV!</button>
			</a>
		</section>
	);
}

export default Home;
