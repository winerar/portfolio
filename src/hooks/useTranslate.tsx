import type { PrimitiveType } from "react-intl"
import { useIntl } from "react-intl"
import type { FormatXMLElementFn } from "intl-messageformat"
import { useCallback } from "react"

const useTranslate = () => {
	const { formatMessage } = useIntl()
	const t = useCallback(
		(
			key: string,
			values?: Record<
				string,
				PrimitiveType | FormatXMLElementFn<string, string>
			>
		) => formatMessage({ id: key }, values),
		[formatMessage]
	)

	return { t }
}

export default useTranslate
