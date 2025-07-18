// https://stackoverflow.com/questions/72650025/vanilla-tilt-only-works-after-app-has-hot-updated-once

import VanillaTilt from "vanilla-tilt";

// @ts-ignore
export function tilt(node, options) {
    VanillaTilt.init(node, options)

    return {
        // @ts-ignore
        update(newOptions) {
            node.vanillaTilt.destroy();
            VanillaTilt.init(node, newOptions);
        },
        destroy() {
            node.vanillaTilt.destroy()
        }
    }
}