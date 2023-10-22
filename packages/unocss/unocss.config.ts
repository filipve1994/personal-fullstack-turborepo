import {
    defineConfig,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerVariantGroup,
    presetAttributify
} from "unocss";

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons(),
        presetWebFonts({
            provider: "google",
            fonts: {sans: "Roboto", mono: "Fira Code"},
        }),
        presetTypography(),
        presetAttributify(),

    ],
    transformers: [transformerVariantGroup()],
    shortcuts: {
        btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
        "btn-green": "btn text-white bg-green-500 hover:bg-green-700",
    },
});