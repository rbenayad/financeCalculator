var PV = 0;
var FV = 0;
var A = 0;
var r = 0;
var n = 0;
var m = 0;

var PVA = function (A, r, n) {
    alert("$" + ((((1 / r) - (1 / (Math.pow((1 + r), n) * r))) * A).toFixed(2)));
};
var PVAD = function (A, r, n) {
    alert("$" + (((((1 / r) - (1 / (Math.pow((1 + r), n) * r))) * A) * (1 + r)).toFixed(2)));
};
var FVLS = function (PV, r, n) {
    alert("$" + ((PV * (Math.pow((1 + r), n))).toFixed(2)));
};
var FVA = function (A, r, n) {
    alert("$" + ((A * (((Math.pow((1 + r), n)) - 1) / r)).toFixed(2)));
};
var PVLS = function (FV, r, n) {
    alert("$" + ((FV / (Math.pow((1 + r), n))).toFixed(2)));
};
var FVF = function (PV, r, m, n) {
    alert("$" + ((PV * (Math.pow((1 + (r / m)), (m * n)))).toFixed(2)));
};
var FVC = function (PV, r, n) {
    alert("$" + ((PV * (Math.pow(Math.E, (r * n)))).toFixed(2)));
};
var APV = function (PV, r, n) {
    alert("$" + ((((1 / r) - (1 / (Math.pow((1 + r), n) * r))) / PV).toFixed(2)));
};
var AFV = function (FV, r, n) {
    alert("$" + (((((Math.pow((1 + r), n)) - 1) / r) / FV).toFixed(2)));
};
var ir = function (FV, PV, n) {
    alert((((Math.pow((FV / PV), (1 / n))) - 1) * 100).toFixed(4) + "%");
};
var rorn = function (FV, PV, r) {
    alert(((Math.log(FV / PV)) / (Math.log(1 + r))).toFixed(3) + " years");
};


var financePrompt = prompt("What would you like to find, the PV, FV, ir, rorn, annuity?");
var lora = prompt("Is it of a lump sum, annuity, annuity due more frequent*, or continuous*? (*=only apples to FV)");
var PVoFV = prompt("Is it an annuity of a PV or FV?");

switch (financePrompt) {
    case 'PV':
        switch (lora) {
            case 'annuity':
                var A = prompt("What is your annuity value?");
                var r = prompt("What is your rate?");
                var n = prompt("How many years?");
                PVA(A, r, n);
                break;
            case 'annuity due':
                var A = prompt("What is your annuity value?");
                var r = prompt("What is your rate?");
                var n = prompt("How many years?");
                PVAD(A, r, n);
                break;
            case 'lump sum':
                var FV = prompt("What is your future value?");
                var r = prompt("What is your rate?");
                var n = prompt("How many years?");
                PVLS(FV, r, n);
                break;
            default:
                console.log("You fucked something up.");
        }
        break;
    case 'FV':
        switch (lora) {
            case 'annuity':
                var A = prompt("What is your annuity value?");
                var r = prompt("What is your rate?");
                var n = prompt("How many years?");
                FVA(A, r, n);
                break;
            case 'lump sum':
                var PV = prompt("What is your present value?");
                var r = prompt("What is your rate?");
                var n = prompt("How many years?");
                FVLS(PV, r, n);
                break;
            case 'more frequent':
                var PV = prompt("What is your present value?");
                var r = prompt("What is your rate?");
                var n = prompt("How many years?");
                var m = prompt("How many times per year is it compounded?");
                FVF(PV, r, m, n);
                break;
            case 'continuous':
                var PV = prompt("What is your present value?");
                var r = prompt("What is your rate?");
                var n = prompt("How many years?");
                FVC(PV, r, n);
                break;
            default:
                console.log("You fucked something up.");
        }
        break;
    case 'ir':
        var PV = prompt("What is your present value?");
        var FV = prompt("What is your future value?");
        var n = prompt("How many years?");
        ir(FV, PV, n);
        break;
    case 'rorn':
        var PV = prompt("What is your present value?");
        var FV = prompt("What is your future value?");
        var r = prompt("What is the rate?");
        rorn(FV, PV, r);
        break;
    case 'annuity':
    var PVoFV = prompt("Is it an annuity of a PV or FV?");
        switch (PVoFV) {
            case 'PV':
                var PV = prompt("What is your present value?");
                var r = prompt("What is your rate?");
                var n = prompt("How many years?");
                APV(PV, r, n);
                break;
            case 'FV':
                var FV = prompt("What is your future value?");
                var r = prompt("What is your rate?");
                var n = prompt("How many years?");
                AFV(FV, r, n);
                break;
            default:
                console.log("You fucked up somewhere.");
        }
        break;
    default:
        console.log("You fucked something up.");
}