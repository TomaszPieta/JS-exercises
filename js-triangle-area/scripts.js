function triangle() {
    let h = prompt("Please enter height your triangle [m]");
    let a = prompt("Please enter basic your triangle [m]");
    let triangleArea = (h * a) / 2;
    if ((h != null) && (a != null)) {
        document.getElementById("demo").innerHTML =
        "Triangle field with base: " + a + "m and height: " + h + "m is equal to: " + triangleArea + "m2";
    }
}
