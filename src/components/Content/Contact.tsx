import { contact } from "../../constants"
import { delay } from "../../utils"
import Section from "../common/Section"
import SectionHeader from "./SectionHeader"

const Contact: React.FC = (): JSX.Element => {
	return (
		<Section id="contact">
			<SectionHeader title="Contact Information" subtitle="Contact" />
			<div className="fw-bold text-white">
				<p data-aos="fade-left" data-aos-delay={delay(1)}>
					Email:{" "}
					<a
						href={`mailto:${contact.email}`}
						target="_top"
						className="link-custom"
					>
						{contact.email}
					</a>
				</p>
				<p data-aos="fade-left" data-aos-delay={delay(2)}>
					Phone | WhatsApp:{" "}
					<a
						href={`tel:${contact.phone}`}
						target="_top"
						className="link-custom"
					>
						{contact.phone}
					</a>
				</p>
				<p data-aos="fade-left" data-aos-delay={delay(3)}>
					Telegram:{" "}
					<a href={contact.telegram} target="_blank" className="link-custom">
						{contact.telegram}
					</a>
				</p>
				<p data-aos="fade-left" data-aos-delay={delay(4)}>
					LinkedIn:{" "}
					<a href={contact.linkedIn} target="_blank" className="link-custom">
						{contact.linkedIn}
					</a>
				</p>
				<p data-aos="fade-left" data-aos-delay={delay(5)}>
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