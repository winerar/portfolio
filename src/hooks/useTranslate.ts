import { useLingui } from "@lingui/react"
import { useCallback } from "react"

const useTranslate = () => {
	const { i18n } = useLingui()
	const t = useCallback((key: string) => i18n._(key), [])

	return { t }
}

export default useTranslate
