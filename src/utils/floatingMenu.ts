import { position } from "@/types/common"

export const placeFloatingMenu = (element: HTMLDivElement, context?: HTMLDivElement): position => {
    let x = 0; let y = 0;

    if(element){
        const bounds = element.getBoundingClientRect()
        x += bounds.x
        y += bounds.y + bounds.height
    }


    return {x, y}
}