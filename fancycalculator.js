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
	$(".lora,.PVoFV,.param").hide();
	$(".basic").show();
	$("#financeType").change(function(e){ //e can be any variable name
		var v = $("#financeType").val();
		if(v === "PV" || v === "FV"){ //
			$(".lora").show();
			$(".PVoFV").hide();
		}
		else {
			$(".lora").hide();
			$(".PVoFV").hide();
			if(v == "annuity"){
				$(".PVoFV").show();
			}
		}
		financeOption = v;
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