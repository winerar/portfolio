import GitHub from "../../assets/icons/github.svg?react"
import LinkedIn from "../../assets/icons/linkedin.svg?react"
import Telegram from "../../assets/icons/telegram.svg?react"
import { contact } from "../../constants"

const Social: React.FC = (): JSX.Element => {
	return (
		<div className="d-flex gap-3">
			<a href={contact.telegram} target="_blank" title="Telegram">
				<Telegram className="icon-big" />
			</a>
			<a href={contact.linkedIn} target="_blank" title="LinkedIn">
				<LinkedIn className="icon-big" />
			</a>
			<a href={contact.github} target="_blank" title="GitHub">
				<GitHub className="icon-big" />
			</a>
		</div>
	)
}

export default Social
