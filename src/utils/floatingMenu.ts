import { position } from "@/types/common"

export const placeFloatingMenu = (element: HTMLDivElement, container: HTMLDivElement, context?: HTMLDivElement): position => {
    let x = 0; let y = 0;

    if (element) {
        const bounds = element.getBoundingClientRect()
        x += bounds.x
        y += bounds.y + bounds.height
    }

    const containerBox = container.getBoundingClientRect()
    const containerBottom = containerBox.y + containerBox.height

    if((window.innerHeight) < containerBottom){
        y -= (containerBottom - window.innerHeight) + 60
    }


    return { x, y }
}