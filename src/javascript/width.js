function widths(dom) {
    let box = document.querySelector(`${dom}`);
    box.style.width = document.documentElement.clientWidth + "px";
}
export default widths