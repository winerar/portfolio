import { contact } from "../../constants"
import useTranslate from "../../hooks/useTranslate"
import { delay } from "../../utils"
import Section from "../common/Section"

const Contact: React.FC = () => {
	const { t } = useTranslate()

	return (
		<Section id="contact">
			<Section.Header
				title={t("Contact Information")}
				subtitle={t("Contact")}
			/>
			<div className="fw-bold text-white">
				<p data-aos="fade-left" data-aos-delay={delay(1)}>
					Email:{" "}
					<a
						href={`mailto:${contact.email}`}
						target="_top"
						className="link-custom"
						title="Email"
					>
						{contact.email}
					</a>
				</p>
				<p data-aos="fade-left" data-aos-delay={delay(2)}>
					{t("Phone")} | WhatsApp:{" "}
					<a
						href={`tel:${contact.phone}`}
						target="_top"
						className="link-custom"
						title="Phone & WhatsApp"
					>
						{contact.phone}
					</a>
				</p>
				<p data-aos="fade-left" data-aos-delay={delay(3)}>
					Telegram:{" "}
					<a
						href={contact.telegram}
						target="_blank"
						className="link-custom"
						title="Telegram"
					>
						{contact.telegram}
					</a>
				</p>
				<p data-aos="fade-left" data-aos-delay={delay(4)}>
					LinkedIn:{" "}
					<a
						href={contact.linkedIn}
						target="_blank"
						className="link-custom"
						title="LinkedIn"
					>
						{contact.linkedIn}
					</a>
				</p>
				<p data-aos="fade-left" data-aos-delay={delay(5)}>
					GitHub:{" "}
					<a
						href={contact.github}
						target="_blank"
						className="link-custom"
						title="GitHub"
					>
						{contact.github}
					</a>
				</p>
			</div>
		</Section>
	)
}

export default Contact
