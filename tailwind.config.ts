// @ts-ignore
import nativewindPreset from "nativewind/preset";
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [nativewindPreset],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config;
