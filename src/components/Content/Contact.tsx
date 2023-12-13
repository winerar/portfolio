import { contact } from "../../constants"
import Section from "../common/Section"
import SectionHeader from "./SectionHeader"

const Contact: React.FC = (): JSX.Element => {
	return (
		<Section id="contact">
			<SectionHeader title="Contact Information" subtitle="Contact" />
			<div
				className="fw-bold text-white"
				data-aos="fade-left"
				data-aos-delay="300"
			>
				<p>
					Email:{" "}
					<a
						href={`mailto:${contact.email}`}
						target="_top"
						className="link-custom"
					>
						{contact.email}
					</a>
				</p>
				<p>
					Phone | WhatsApp:{" "}
					<a
						href={`call:${contact.phone}`}
						target="_top"
						className="link-custom"
					>
						{contact.phone}
					</a>
				</p>
				<p>
					Telegram:{" "}
					<a href={contact.telegram} target="_blank" className="link-custom">
						{contact.telegram}
					</a>
				</p>
				<p>
					LinkedIn:{" "}
					<a href={contact.linkedIn} target="_blank" className="link-custom">
						{contact.linkedIn}
					</a>
				</p>
				<p>
					GitHub:{" "}
					<a href={contact.github} target="_blank" className="link-custom">
						{contact.github}
					</a>
				</p>
			</div>
		</Section>
	)
}

export default Contact
