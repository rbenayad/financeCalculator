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

		if(v == "ir"){
			$("#pval,#fval,#nyears").show();
		}
	})
})