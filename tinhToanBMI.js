function tinhBmi() {
    var weight = parseInt(prompt("Nhap can nang"));
    var height = parseFloat(prompt("Nhap chieu cao (vi du: 1.78)"));
    var bmi = (weight / (height*height));
    console.log(bmi)
    if (bmi < 18.5) {
        document.write("Underweight");
    } else if (18.5 <= bmi < 25.0) {
        document.write("Normal");
    } else if (25.0 <= bmi < 30.0) {
        document.write("Overweight");
    } else if (30.0 <= bmi ) {
        document.write("Obese");
    }

}

tinhBmi();