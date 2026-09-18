
console.log("=== ІНСТРУКЦІЯ ДО ФУНКЦІЇ triangle ===");
console.log("Функція обчислює сторони прямокутного трикутника та його гострі кути.");
console.log("Виклик: triangle(val1, 'type1', val2, 'type2')");
console.log("Можливі типи значень:");
console.log(" - 'leg': катет");
console.log(" - 'hypotenuse': гіпотенуза");
console.log(" - 'adjacent angle': прилеглий до катета кут (у градусах)");
console.log(" - 'opposite angle': протилежний до катета кут (у градусах)");
console.log(" - 'angle': гострий кут при заданій гіпотенузі (у градусах)");
console.log("======================================");

function triangle(val1, type1, val2, type2) {
    
    var eps = 0.000001;

    var a;
    var b;
    var c;
    var alpha;
    var beta;


    if (typeof val1 !== "number" || typeof val2 !== "number" || isNaN(val1) || isNaN(val2)) {
        return "Invalid input numbers";
    }

    if (val1 <= eps || val2 <= eps) {
        return "Zero or negative input";
    }

    var allowedTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    var isType1Valid = false;
    var isType2Valid = false;

    var i;
    for (i = 0; i < allowedTypes.length; i = i + 1) {
        if (type1 === allowedTypes[i]) {
            isType1Valid = true;
        }
        if (type2 === allowedTypes[i]) {
            isType2Valid = true;
        }
    }

    if (isType1Valid === false || isType2Valid === false) {
        console.log("Неправильно вказані типи аргументів. Будь ласка, перечитайте інструкцію!");
        return "failed";
    }

    function toRad(deg) {
        return (deg * Math.PI) / 180;
    }

    function toDeg(rad) {
        return (rad * 180) / Math.PI;
    }

    if (type1 === "leg" && type2 === "leg") {
        a = val1;
        b = val2;
        c = Math.sqrt(a * a + b * b);
        alpha = toDeg(Math.atan(a / b));
        beta = 90 - alpha;
    }
    
    else if ((type1 === "leg" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "leg")) {
        var legVal;
        var hypVal;

        if (type1 === "leg") {
            legVal = val1;
            hypVal = val2;
        } else {
            legVal = val2;
            hypVal = val1;
        }

        if (legVal >= hypVal - eps) {
            return "Leg cannot be greater than or equal to hypotenuse";
        }

        a = legVal;
        c = hypVal;

        var diff = c * c - a * a;
        if (diff < 0) {
            diff = 0;
        }
        b = Math.sqrt(diff);

        var sinAlpha = a / c;
        
        if (sinAlpha > 1) {
            sinAlpha = 1;
        }
        alpha = toDeg(Math.asin(sinAlpha));
        beta = 90 - alpha;
    }
    
    else if ((type1 === "leg" && type2 === "opposite angle") || (type1 === "opposite angle" && type2 === "leg")) {
        var legVal2;
        var oppAngle;

        if (type1 === "leg") {
            legVal2 = val1;
            oppAngle = val2;
        } else {
            legVal2 = val2;
            oppAngle = val1;
        }

        if (oppAngle <= eps || oppAngle >= 90 - eps) {
            return "Angle must be acute (between 0 and 90 degrees)";
        }

        a = legVal2;
        alpha = oppAngle;
        beta = 90 - alpha;
        c = a / Math.sin(toRad(alpha));

        var diff2 = c * c - a * a;
        if (diff2 < 0) {
            diff2 = 0;
        }
        b = Math.sqrt(diff2);
    }
   
    else if ((type1 === "leg" && type2 === "adjacent angle") || (type1 === "adjacent angle" && type2 === "leg")) {
        var legVal3;
        var adjAngle;

        if (type1 === "leg") {
            legVal3 = val1;
            adjAngle = val2;
        } else {
            legVal3 = val2;
            adjAngle = val1;
        }

        if (adjAngle <= eps || adjAngle >= 90 - eps) {
            return "Angle must be acute (between 0 and 90 degrees)";
        }

        b = legVal3;
        alpha = adjAngle;
        beta = 90 - alpha;
        a = b * Math.tan(toRad(alpha));
        c = Math.sqrt(a * a + b * b);
    }
   
    else if ((type1 === "hypotenuse" && type2 === "angle") || (type1 === "angle" && type2 === "hypotenuse")) {
        var hypVal2;
        var ang;

        if (type1 === "hypotenuse") {
            hypVal2 = val1;
            ang = val2;
        } else {
            hypVal2 = val2;
            ang = val1;
        }

        if (ang <= eps || ang >= 90 - eps) {
            return "Angle must be acute (between 0 and 90 degrees)";
        }

        c = hypVal2;
        alpha = ang;
        beta = 90 - alpha;
        a = c * Math.sin(toRad(alpha));
        b = c * Math.cos(toRad(alpha));
    }
    
    else {
        console.log("Несумісна комбінація типів. Будь ласка, перечитайте інструкцію!");
        return "failed";
    }

   
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
    console.log("alpha = " + alpha);
    console.log("beta = " + beta);

    return "success";
}