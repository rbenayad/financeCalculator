$("document").ready(function(){
	$("input,div").hide();
	$("#financeTypeContainer").show();
	$("#financeType").change(function(e){
		var v = $("#financeType").val();
		console.log(v);
		if(v === "PV" || v === "FV"){
			$("#loraContainer").show();
			$("#PVoFVContainer").hide();
		}
		else {
			$("#loraContainer").hide();
			$("#PVoFVContainer").hide();
			if(v == "annuity"){
				$("#PVoFVContainer").show();
			}
		}
	})
})