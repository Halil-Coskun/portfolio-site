import styles from "./styles.module.css";

function Navbar() {
	return (
		<nav className={styles.nav_container}>
			<div className={styles.nav_left}>
				<a href="#home">Halil</a>
			</div>
			<div className={styles.nav_right}>
				<a href="#about" className={styles.nav_link}>
					<span>01.</span>About Me
				</a>
				<a href="#work" className={styles.nav_link}>
					<span>02.</span> Portfolio
				</a>
				<a href="#contact" className={styles.nav_link}>
					<span>03.</span>Contact Me
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
