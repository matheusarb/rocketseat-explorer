//fazer como object literal

export const alertError = {
    element: document.querySelector(".alert-error"),
    open() {
        alertError.element.classList.add("open")
        return;
    },
    close() {
        alertError.element.classList.remove("open")
    }
}