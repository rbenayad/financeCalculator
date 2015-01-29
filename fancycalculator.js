var financeOption = "PV"
var financeCallbacks = {
	ir : function(){
		var pval = parseFloat($("#pval").val());
		var fval = parseFloat($("#fval").val());
		var nyears = parseFloat($("#nyears").val());
		var res = ((Math.pow((fval / pval), (1 / nyears)) - 1) * 100).toFixed(4) 
		console.log(res);
		$("#answer").text(res);
	}

}

$("document").ready(function(){
	$(".lora,.PVoFV,.param").hide();
	$(".basic").show();
	$("#financeType").change(function(e){
		var v = $("#financeType").val();
		if(v === "PV" || v === "FV"){
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