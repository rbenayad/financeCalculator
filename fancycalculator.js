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
				financeOption = v;
				var g = $("#loraprompt").val();
				if (v === "PV") {
					if (g === "lump sum") {
						$(".param").hide();
						$("#fval,#rate,#nyears").show();
					}
					else if (g === "annuity") {
						$(".param").hide();
						$("#annuity,#rate,#nyears").show();
					}
					else if (g === "annuity due"){
						$(".param").hide();
						$("#annuity,#rate,#nyears").show();
					}
				}
				else {
					if (g === "lump sum") {
						$(".param").hide();
						$("#pval,#rate,#nyears").show();
					}
					else if (g === "annuity") {
						$(".param").hide();
						$("#annuity,#rate,#nyears").show();
					}
					else if (g === "frequent annuity") {}; {
						$(".param").hide();
						$("#pval,#rate,#nyears,#myears").show();
					}
					else if (g === "continuous") {
						$(".param").hide();
						$("#pval,#rate,#nyears").show();
					}
			})
			
		}
		else {
			$(".lora").hide(); //show the lora class
			$(".PVoFV").hide(); //hide the PVoFV class
			if(v == "annuity"){ //if financeType is chosen to be an annuity
				$(".PVoFV").show(); //shows PVoFV class
			}
		}
		financeOption = v; //what does this do?
		if(v == "ir"){
			$(".param").hide();
			$("#pval,#fval,#nyears").show();
		}
		else if(v == "rorn"){
			$(".param").hide();
			$("#pval,#fval,#rate").show();
		}
	})
	$("#pval,#fval,#rate,#nyears").change(function(e){
		financeCallbacks[financeOption]();
	})
})