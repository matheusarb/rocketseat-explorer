function test1() {
    console.log("test1");
}
function test2() {
    console.log("teste2");
}
// só pode usar um default por arquivo
export default test1
// named export (exportar mais de 1 através de lista)
export {test1, test2}
export const today = () => new Date();