function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = " ";
}

function result(num) {
    var result = document.getElementById("result");
    for (var i = 0; i < result.value.length; i++) {
        if (result.value.slice(i, i + 2) === "++"||result.value.slice(i, i + 2) === "--"||result.value.slice(i, i + 2) === "**"||result.value.slice(i, i + 2) === "//") {
            alert("Equation to sahi likho! Math nai ati kiya?");
            return
        }
    }     
    result.value = eval(result.value);
}

