import { buildLegacyTheme} from 'sanity'

const props ={
    "--my-white": "#FAF9F6",
    "--my-black": "#000000",
    "--niner-gold":"#B3995D",
    "--my-red": "#AA0000",
    "--my-yellow": "#B3995D",
    "--my-green": "#0f9d58"
}

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#667",
    "--gray-base": "#667",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    /* Brand */
    "--brand-primary": props["--niner-gold"],

    // Default button
    "--default-button-color": "#ffffff",
    "--default-button-primary-color":props["--niner-gold"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-yellow"],
    "--default-button-danger-color": props["--my-red"],

    /* State */
    "--state-info-color": props["--niner-gold"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-yellow"],
    "--state-danger-color": props["--my-red"],

    /* Navbar */
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--niner-gold"],
})