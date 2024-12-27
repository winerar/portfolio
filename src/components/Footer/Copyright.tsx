import useTranslate from "../../hooks/useTranslate"

const Copyright: React.FC = () => {
	const { t } = useTranslate()

	return (
		<p className="mb-0">{`© ${new Date().getFullYear()} ${t("Alexander")} ${t(
			"Karachevtsev"
		)}`}</p>
	)
}

export default Copyright
