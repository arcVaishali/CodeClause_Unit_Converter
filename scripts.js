
const calculLength = () => {
    var in_valL = document.querySelector("#in_valL").value;
    var in_unitL = document.querySelector("#in_unitL").value;
    var out_valL = document.querySelector("#out_valL");
    var out_unitL = document.querySelector("#out_unitL").value;

    // -------------------------------------------------
    // -------------------------------------------------
    // length converter
    // -------------------------------------------------
    // -------------------------------------------------
    if (in_unitL == "Kilometre" && out_unitL == "Metre") {
        let output_val = in_valL * 1000;
        out_valL.value = output_val;
    }
    else if (in_unitL == "Metre" && out_unitL == "Kilometre") {
        out_valL.value = in_valL / 1000;
    }
    else if (in_unitL == "Centimetre" && out_unitL == "Metre") {
        out_valL.value = in_valL / 100;
    }
    else if (in_unitL == "Metre" && out_unitL == "Centimetre") {
        out_valL.value = in_valL * 100;
    }
    else if (in_unitL == "Kilometre" && out_unitL == "Centimetre") {
        out_valL.value = in_valL * 100000;
    }
    else if (in_unitL == "Centimetre" && out_unitL == "Kilometre") {
        out_valL.value = in_valL / 100000;
    }
    
    

}






const calculWeight=()=>{
    var in_valW = document.querySelector("#in_valW").value;
    var in_unitW = document.querySelector("#in_unitW").value;
    var out_valW = document.querySelector("#out_valW");
    var out_unitW = document.querySelector("#out_unitW").value;

    // -----------------------------------------------
    // -----------------------------------------------
    // weight converter
    // -----------------------------------------------
    // -----------------------------------------------
    if (in_unitW == "Kilogram" && out_unitW == "Gram") {
        out_valW.value = in_valW * 1000;
    }
    else if (in_unitW == "Gram" && out_unitW == "Kilogram") {
        out_valW.value = in_valW / 1000;
    }
    else if (in_unitW == "Gram" && out_unitW == "Milligram") {
        out_valW.value = in_valW * 1000;
    }
    else if (in_unitW == "Milligram" && out_unitW == "Gram") {
        out_valW.value = in_valW / 1000;
    }
    else if (in_unitW == "Kilogram" && out_unitW == "Milligram") {
        out_valW.value = in_valW * 1000000;
    }
    else if (in_unitW == "Milligram" && out_unitW == "Kilogram") {
        out_valW.value = in_valW / 1000000;
    }
}





const calculTemperature=()=>{
    var in_valT = document.querySelector("#in_valT").value;
    var in_unitT = document.querySelector("#in_unitT").value;
    var out_valT = document.querySelector("#out_valT");
    var out_unitT = document.querySelector("#out_unitT").value;

    // --------------------------------------------------
    // --------------------------------------------------
    // temperature converter
    // --------------------------------------------------
    // --------------------------------------------------
    if (in_unitT == "Fahrenhiet" && out_unitT == "Celcius") {
        // x - 0 = y - 32
        // 100-0   180
        let input_val = parseFloat(in_valT);
        out_valT.value = (input_val - 32) * (100 / 180);
    }
    else if (in_unitT == "Celcius" && out_unitT == "Fahrenhiet") {
        let input_val = parseFloat(in_valT);
        out_valT.value = input_val * (180 / 100) + 32;
    }
    else if (in_unitT == "Celcius" && out_unitT == "Kelvin") {
        out_valT.value = in_valT + 273;
    }
    else if (in_unitT == "Kelvin" && out_unitT == "Celcius") {
        out_valT.value = in_valT - 273;
    }
    else if (in_unitT == "Kelvin" && out_unitT == "Fahrenhiet") {
        let input_val = parseFloat(in_valT);
        input_val = input_val + 273;
        out_valT.value = input_val * (180 / 100) + 32;
    }
    else if (in_unitT == "Fahrenhiet" && out_unitT == "Kelvin") {
        let input_val = parseFloat(in_valT);
        input_val = (input_val - 32) * (100 / 180)
        out_valT.value = input_val + 273;
    }
}