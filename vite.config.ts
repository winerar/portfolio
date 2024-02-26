import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import path from "path"

// https://vitejs.dev/config/

const root = path.resolve(__dirname, "./src")

export default defineConfig({
	resolve: {
		alias: {
			"@": root,
			"@styles": path.resolve(root, "styles"),
			"@atoms": path.resolve(root, "components/atoms"),
			"@molecules": path.resolve(root, "components/molecules"),
			"@organisms": path.resolve(root, "components/organisms"),
			"@templates": path.resolve(root, "components/templates"),
			"@pages": path.resolve(root, "components/pages"),
		},
	},
	plugins: [react(), svgr()],
	base: "./",
})
