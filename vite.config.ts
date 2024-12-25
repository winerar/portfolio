import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import { lingui } from "@lingui/vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr(), lingui()],
	base: "./",
	build: {
		cssCodeSplit: false,
		rollupOptions: {
			output: {
				chunkFileNames: "assets/js/[name]-[hash].js",
				entryFileNames: "assets/js/[name]-[hash].js",
				assetFileNames: "assets/[ext]/[name].[ext]",
				manualChunks: (id: string) => {
					if (id.indexOf("node_modules") !== -1) {
						return id
							.toString()
							.split("node_modules/")[1]
							.split("/")[0]
							.toString()
					}
				},
			},
		},
	},
})
