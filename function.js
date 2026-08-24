console.log();
const f1 =() => {
    console.log("F1");
}
function f2() 
{
    console.log("f2");
}
const f3 = () => console.log("f3");
function main() {
    console.log("main");
    //f1();
    setTimeout(f1, 0);
   // setTimeout(f2, 0);
   // setInterval(f2, 500);// 1000->1sec 
   setImmediate(f2);
    f3();
    console.log("end")
}
main();9948500058