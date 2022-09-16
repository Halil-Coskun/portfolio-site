import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
						
					</p>
					<p className={styles.desc}>
					As a junior developer with a non-traditional background working to break into the tech industry,
			I am highly motivated, resourceful and always eager to learn. Through my time at the intensive, 
			16-week long School Of Code Web development bootcamp, I have worked in both agile teams and alone 
			to build and deploy software, honing my technology and people skills in the process.
					</p>
				</div>
				<div className={styles.right}>
					<img
						src="https://photos.google.com/share/AF1QipOar8yw85ZE-VMeuO52EKEvoBjLFRRRgrmmocbAxRPVvX7DXwIU8pqolA0X6Xq-Dw?key=VnlZSkF1WlFPYks0R19QTkctSWlYLUo1U09ROERR"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;
