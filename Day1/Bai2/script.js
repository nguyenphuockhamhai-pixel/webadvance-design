function calculate() {
    let s1 = parseFloat(document.getElementById("s1").value);
    let s2 = parseFloat(document.getElementById("s2").value);

    let avg = (s1 + s2 * 2) / 3;
    document.getElementById("avg").value = avg;

    let result = "";

    if (avg >= 8) {
        result = "Hoc sinh gioi";
    } else if (avg >= 6.5) {
        result = "Hoc sinh kha";
    } else if (avg >= 5) {
        result = "Hoc sinh trung binh";
    } else {
        result = "Hoc sinh yeu";
    }

    document.getElementById("result").innerText = result;
}

function resetForm() {
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("avg").value = "";
    document.getElementById("result").innerText = "";
}