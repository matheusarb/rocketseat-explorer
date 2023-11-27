//fazer como object literal
import { inputWeight, inputHeight } from "./main.js";

export const AlertError = {
    element: document.querySelector(".alert-error"),
    open() {
        AlertError.element.classList.add("open");
    },
    close() {
        AlertError.element.classList.remove("open");
    },
    closeAlertErrorWhileTyping() {
        window.addEventListener("input", () => {
            AlertError.close()
        })
    }
}