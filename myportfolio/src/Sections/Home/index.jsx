import styles from "./styles.module.css";

function Home() {
 let cv = 'https://drive.google.com/file/d/1W9iDlp0cZyL9TCoERq2--a_s2hE_t4_M/view?usp=sharing'
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
