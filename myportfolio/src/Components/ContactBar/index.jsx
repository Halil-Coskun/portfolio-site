import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./styles.module.css";

function ContactBar() {
	return (
		<div className={styles.contact_bar_wrapper}>
			<div className={styles.contact_bar}>
				<a href="https://www.linkedin.com/in/halilcskn/" target="_blank" className={styles.icon} rel="noreferrer" >
					<LinkedInIcon color='warning' />
				</a>
				<a href="https://github.com/Halil-Coskun" target="_blank" className={styles.icon} rel="noreferrer" >
					<GitHubIcon color='warning' />
				</a>
				<a href="#contact" className={styles.icon} >
					<EmailIcon  color='warning' />
				</a>
				<div className={styles.line}></div>
			</div>
		</div>
	);
}

export default ContactBar;
