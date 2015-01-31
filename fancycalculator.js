var financeOption = "PV"
var financeCallbacks = { //start ofthe financeCallbacks object
	ir : function(){ //start of the ir key
		var pval = parseFloat($("#pval").val()); //parseFloat changes a string to a number
		var fval = parseFloat($("#fval").val()); //dollar sign calls jquery
		var nyears = parseFloat($("#nyears").val());
		var res = ((Math.pow((fval / pval), (1 / nyears)) - 1) * 100).toFixed(4) //equation for interest rate
		console.log(res);
		$("#answer").text(res + "%");
	},
	rorn: function(){ //start of the 'rorn' key
		var pval = parseFloat($("#pval").val());
		var fval = parseFloat($("#fval").val());
		var rate = parseFloat($("#rate").val());
		var res = ((Math.log(fval / pval)) / (Math.log(1 + rate))).toFixed(3) //equation for interest rate
		console.log(res);
		$("#answer").text(res + " years");
	}
	PVLS: function(){
		var fval = parseFloat($("#fval").val());
		var rate = parseFloat($("#rate").val());
		var nyears = parseFloat($("#nyears").val());
		var res = (fval / (Math.pow((1 + rate), nyears))).toFixed(2) //equation for interest rate
		console.log(res);
		$("#answer").text(res + " dollars");
	}
	PVA: function(){
		var annuity = parseFloat($("#annuity").val());
		var rate = parseFloat($("#rate").val());
		var nyears = parseFloat($("#nyears").val());
		var res = (((1 / rate) - (1 / (Math.pow((1 + rate), nyears) * r))) * annuity).toFixed(2) //equation for interest rate
		console.log(res);
		$("#answer").text(res + " dollars");
	}
	PVAD: function(){
		var annuity = parseFloat($("#annuity").val());
		var rate = parseFloat($("#rate").val());
		var nyears = parseFloat($("#nyears").val());
		var res = ((((1 / rate) - (1 / (Math.pow((1 + rate), nyears) * rate))) * annuity) * (1 + r)).toFixed(2) //equation for interest rate
		console.log(res);
		$("#answer").text(res + " dollars");
	}
	FVLS: function(){
		var pval = parseFloat($("#pval").val());
		var rate = parseFloat($("#rate").val());
		var nyears = parseFloat($("#nyears").val());
		var res = (pval * (Math.pow((1 + rate), nyears))).toFixed(2) //equation for interest rate
		console.log(res);
		$("#answer").text(res + " dollars");
	}
	FVA: function(){
		var annuity = parseFloat($("#annuity").val());
		var rate = parseFloat($("#rate").val());
		var nyears = parseFloat($("#nyears").val());
		var res = (annuity * (((Math.pow((1 + rate), nyears)) - 1) / rate)).toFixed(2) //equation for interest rate
		console.log(res);
		$("#answer").text(res + " dollars");
	}
	FVF: function(){
		var pval = parseFloat($("#pval").val());
		var rate = parseFloat($("#rate").val());
		var nyears = parseFloat($("#nyears").val());
		var myears = parseFloat($("#myears").val());
		var res = (pval * (Math.pow((1 + (rate / myears)), (myears * nyears)))).toFixed(2) //equation for interest rate
		console.log(res);
		$("#answer").text(res + " dollars");
	}
	FVC: function(){
		var pval = parseFloat($("#pval").val());
		var rate = parseFloat($("#rate").val());
		var nyears = parseFloat($("#nyears").val());
		var res = (pval * (Math.pow(Math.E, (rate * nyears)))).toFixed(2) //equation for interest rate
		console.log(res);
		$("#answer").text(res + " dollars");
	}
	APV: function(){
		var pval = parseFloat($("#pval").val());
		var rate = parseFloat($("#rate").val());
		var nyears = parseFloat($("#nyears").val());
		var res = (((1 / rate) - (1 / (Math.pow((1 + rate), nyears) * rate))) / pval).toFixed(2) //equation for interest rate
		console.log(res);
		$("#answer").text(res + " dollars");
	}
	AFV: function(){
		var fval = parseFloat($("#fval").val());
		var rate = parseFloat($("#rate").val());
		var nyears = parseFloat($("#nyears").val());
		var res = ((((Math.pow((1 + rate), nyears)) - 1) / rate) / fval).toFixed(2) //equation for interest rate
		console.log(res);
		$("#answer").text(res + " dollars");
	}
}

$("document").ready(function(){ //when DOM is fully loaded
	$(".lora,.PVoFV,.param").hide(); // hides all classes except basic
	$(".basic").show();
	$("#financeType").change(function(e){ //e can be any variable name
		var v = $("#financeType").val();
		if(v === "PV" || v === "FV"){ //condition for if v is PV or FV
			$(".lora").show(); //show the lora class
			$(".PVoFV").hide(); //hide the PVoFV class
			$("#loraprompt").change(function(e){
				var g = $("#loraprompt").val();
				if (v === "PV") {
					if (g === "lump sum") {
						$(".param").hide();
						$("#fval,#rate,#nyears").show();
						financeOption = "PVLS";
					}
					else if (g === "annuity") {
						$(".param").hide();
						$("#annuity,#rate,#nyears").show();
						financeOption= "PVA";
					}
					else if (g === "annuity due"){
						$(".param").hide();
						$("#annuity,#rate,#nyears").show();
						financeOption= "PVAD";
					}
				}
				else {
					if (g === "lump sum") {
						$(".param").hide();
						$("#pval,#rate,#nyears").show();
						financeOption= "FVLS";
					}
					else if (g === "annuity") {
						$(".param").hide();
						$("#annuity,#rate,#nyears").show();
						financeOption= "FVA";
					}
					else if (g === "frequent annuity") {}; {
						$(".param").hide();
						$("#pval,#rate,#nyears,#myears").show();
						financeOption= "FVF";
					}
					else if (g === "continuous") {
						$(".param").hide();
						$("#pval,#rate,#nyears").show();
						financeOption= "FVC";
					}
			})
			
		}
		else if (v == "annuity") {
			$(".lora").hide(); //show the lora class
			$(".PVoFV").show(); //hide the PVoFV class
			$("#PVoFVprompt").change(function(e){
				var h = $("#PVoFVprompt").val();
				if (h == "PV") {
					$(".param").hide();
					$("#pval,#rate,#nyears").show();
					financeOption= "APV";
				}
				else {
					$(".param").hide();
					$("#fval,#rate,#nyears").show();
					financeOption= "AFV";
					}
				}
			})
		}
		else if(v == "ir"){
			$(".param").hide();
			$("#pval,#fval,#nyears").show();
			financeOption= "ir";
		}
		else if(v == "rorn"){
			$(".param").hide();
			$("#pval,#fval,#rate").show();
			financeOption= "rorn";
		}
	})
	$("#pval,#fval,#rate,#nyears,#annuity,#myears").change(function(e){
		financeCallbacks[financeOption]();
	})
})