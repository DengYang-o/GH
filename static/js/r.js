// 	var RfData = [
// 						["Number", "SoilType", "MaxRainfall", "Minrainfall", "KValue", "TValue"],
// 						[1, "Pierre - Samsil", 40, 55, 0.37, 2.5],
// 						[2, "Bridgeport - Keith", 40, 55, 0.32, 5],
// 						[3, "Canyon - Rosebud", 50, 80, 0.3, 3],
// 						[4, "Keith - Rosebud", 40, 85, 0.3, 4],
// 						[5, "Anselmo - Keith", 50, 90, 0.3, 5],
// 						[6, "Mitchell - Tripp", 50, 75, 0.38, 5],
// 						[7, "Dunday - Valentine", 50, 130, 0.16, 5],
// 						[8, "Las - McCook", 60, 150, 0.35],
// 						[9, "Coly - Keith", 75, 100, 0.38, 5],
// 						[10, "Holt - Valentine", 70, 90, 0.18, 4],
// 						[11, "Boyd - Reliance", 85, 125, 0.35, 3.5],
// 						[12, "Jansen - Thurman", 80, 115, 0.23, 4.5],
// 						[13, "Loup - Valentine", 90, 125, 0.18, 4],
// 						[14, "Thurman - Valentine", 115, 140, 0.16, 5],
// 						[15, "Crofton - Moody", 125, 160, 0.38, 5],
// 						[16, "Crofton - Nora", 125, 150, 0.38, 5],
// 						[17, "Coly - Ulysses", 80, 115, 0.38, 5],
// 						[18, "Hall - Wood River", 80, 135, 0.38, 3.5],
// 						[19, "Leshara - Platte", 125, 150, 0.3, 5],
// 						[20, "Marshall -Sharpsburg", 140, 200, 0.3, 5],
// 						[21, "Marshall - Monona", 150, 180, 0.28, 5],
// 						[22, "Hayne - Luton", 140, 200, 0.3, 5],
// 						[23, "Coly - Holdrege", 85, 150, 0.38, 5],
// 						[24, "Hastings - Holdrege", 110, 130, 0.32, 5],
// 						[25, "Holdrege - Kenesaw", 115, 135, 0.32, 5],
// 						[26, "Crete - Hastings", 125, 160, 0.35, 5],
// 						[27, "Sharpsburg - Shelby", 145, 155, 0.3, 5],
// 						[28, "Crete - Filmore", 130, 165, 0.37, 4],
// 						[29, "Crete - Wymore", 150, 175, 0.37, 4],
// 						[30, "Pawnee - Wymore", 160, 200, 0.35, 3],
// 						[31, "Hedville - Lancaster", 160, 170, 0.24, 2]
// 					];








// var CData=[
// ["CropNumber,CropSystem",0,10,20,30,40,50,60,70,80,90],
// [1,"Continious Corn or Sorghum",0.3,0.28,0.24,0.2,0.16,0.14,0.11,0.08,0.06,0.04],
// [2,"-Soybean Rotation",0.35,0.32,0.28,0.25,0.21,0.18,0.14,0.11,0.07,0.04],
// [3,"Continious Wheat",0.2,0.23,0.2,0.17,0.14,0.12,0.08,0.06,0.04,0.03],
// [4,"Wheat after Fallow",0.2,0.21,0.19,0.17,0.14,0.12,0.08,0.06,0.04,0.03],
// [5,"Corn/Sorghum after Wheat",0.3,0.28,0.26,0.2,0.16,0.14,0.11,0.08,0.06,0.04],
// [6,"Continious Soybean",0.4,0.37,0.35,0.3,0.25,0.22,0.2,0.15,0.1,0.08],
// [7,"Vegetables/Beets",0.3,0.28,0.24,0.2,0.16,0.14,0.11,0.08,0.06,0.04],
// [8,"Grass and Legume mix",0.3,0.25,0.21,0.17,0.13,0.1,0.07,0.04,0.03,0.02],
// [9,"AlfAlfa",0.3,0.29,0.25,0.21,0.17,0.13,0.09,0.05,0.03,0.02],
// [10,"Bare Soil",1,1,1,1,1,1,1,1,1,1]
// ];











          //K
					$("#S1").change(function() { 

						var v = $(this).val(); 
						$(".R-min").html(RfData[v][2]); 
						$(".R-max").html(RfData[v][3]);

						$(".K-1,.s-3").html(RfData[v][1]);
						$(".K-2,#re-l4").html(RfData[v][4]);
						$(".K-3,#re-l13").html(RfData[v][5]);
                       
                       
                       //result 
                       $("#re-l1").html(RfData[v][1]);
					});




           //R
					$("#R-Fctor-input").blur(function() {

						$(".K-4").html($(this).val());
                        
                        
                        //result 
                          $("#re-l2").html($(this).val());
                        
                        
					})

					$(".ls-wbk1,.ls-wbk2").keyup(function() {

						if($(".ls-wbk1").val() != "" && $(".ls-wbk2").val() != "") {

							var l2 = $(".ls-wbk2").val();
							x = 0;
							if(l2 < 1) {

								x = 0.2;

							} else if(l2 >= 1 && l2 < 3) {

								x = 0.3;

							} else if(l2 >= 3 && l2 < 5) {

								x = 0.4;

							} else if(l2 >= 5) {

								x = 0.5;

							}

							var LS = Math.pow($(".ls-wbk1").val() / 72.6, x) * (0.0065 * Math.pow(l2, 2) + (0.0456 * l2) + 0.065);
							$("#ls-f,#re-l6").html(LS.toFixed(4));

                     //result
                     $("#re-l3").html($(".ls-wbk1").val());
                     $("#re-l5").html($(".ls-wbk2").val());
						}
						 
					})
					




				
				//result
				$("#resultk").click(function () {
					
					
					var pz=1;
					
					if(isNaN(parseFloat($("#p-l5").html()))){
						
							var pz=1;
					}else{
						
						pz=parseFloat($("#p-l5").html());
						
					}
					
					
					var a=parseFloat($("#R-Fctor-input").val())*parseFloat($(".K-2").html())*parseFloat($("#ls-f").html())*parseFloat($("#c-r6").html())*pz;
					
					if(isNaN(a)){
						
						$("#re-l12").html("The options are not finished");
					}else{
					$("#re-l12").html(a.toFixed(3));
					}
					console.log(parseFloat($("#R-Fctor-input").val())+" : "+parseFloat($("#K-2").html())+" : "+parseFloat($("#ls-f").html())+" : "+parseFloat($("#c-r6").html())+" : "+parseFloat($("#p-l5").html()))
					
				})
				
						//C
						
						$("#c-r1").change(function () {
						 
	 $("#c-l1").html($(this).find("option:selected").text());
	 
							//result
							 $("#re-l7").html($(this).find("option:selected").text());
							
							
							
							
						})
						
						
					$("#c-r2").change(function () {  
						 
	 $("#c-l2").html($(this).find("option:selected").text());
							
		 $("#c-l3").html($(this).find("option:selected").attr("a-v"));		 
						
						
						var cselect;
						if($(this).val()=="1"){
						
							cselect='<option value="0">--please choose-- </option><option value="5">30</option> <option value="6">40</option> <option value="7">50</option> <option value="8">60</option> <option value="9">70</option> <option value="10">80</option> <option value="11">90</option>';
							
						}else if($(this).val()=="2"){
							
								cselect='<option value="0">--please choose-- </option><option value="2">0</option> <option value="3">10</option>  <option value="4">20</option>  ';
							
						}else{
						
						cselect='<option value="0">--please choose-- </option><option value="2">0</option> <option value="3">10</option>  <option value="4">20</option> <option value="5">30</option> <option value="6">40</option> <option value="7">50</option> <option value="8">60</option> <option value="9">70</option> <option value="10">80</option> <option value="11">90</option>';
						}
		    $("#c-r3").html(cselect);				
						
						})	
						
						
						
					$("#c-r3").change(function () {
						
						
					$("#c-l1_2").html($(this).find("option:selected").text());
					$("#c-l1_3").html(CData[$("#c-r1").val()][$(this).val()]);	
					
					//result
							 $("#re-l9").html($(this).find("option:selected").text());
					
					})	
						
				$("#c-r4").change(function () {
						
						
					$("#c-l4").html($(this).find("option:selected").text())	;
					$("#c-l4-1").html($(this).val());	
					})			
					
				$("#c-r5").change(function () {
						
						$("#c-l5").html($(this).find("option:selected").text())	;
					$("#c-l5-1").html($(this).val());	
						
						
						var c_fa=parseFloat($("#c-l1_3").html())*parseFloat($("#c-l3").html())*parseFloat($("#c-l4-1").html())*parseFloat($("#c-l5-1").html());
						
						console.log(parseFloat($("#c-l1_3").html())+" ："+parseFloat($("#c-l3").html())+" ："+parseFloat($("#c-l4-1").html())+" ："+parseFloat($("#c-l5-1").html())+" ：");
						
						$("#c-r6,#re-l8").html(c_fa.toFixed(5));  //relust C
					
					})		
					
					
						//C

                    //p
 
        
             $("#p-r1").change(function () {
						
						
						
						
						
					$("#re-l11,#p-l1").html($(this).find("option:selected").attr("v"));
				
				
				var slope=parseFloat($(".ls-wbk2").val());
				var pz="";
				
				 
			 if($(this).val()=="0.8"){
					
					
					if(slope<2.5){
						pz=0.6;
					}else if(slope >= 2.5&& slope < 8.5){
						pz=0.5;
						
					}else if(slope >= 8.5&& slope < 12.5){
						pz=0.6;
						
					}else if(slope >= 12.5&& slope < 16.5){
						pz=0.7;
						
					}else if(slope >= 16.5&& slope < 20.5){
						pz=0.8;
						
					}else if(slope >= 20.5&& slope <=25){
						pz=0.9;
						
					}
					
					
				}else if($(this).val()=="0.4"){
					
							if(slope<2.5){
						pz=0.3;
					}else if(slope >= 2.5&& slope < 8.5){
						pz=0.25;
						
					}else if(slope >= 8.5&& slope < 12.5){
						pz=0.3;
						
					}else if(slope >= 12.5&& slope < 16.5){
						pz=0.35;
						
					}else if(slope >= 16.5&& slope < 20.5){
						pz=0.4;
						
					}else if(slope >= 20.5&& slope <=25){
						pz=0.45;
						
					}
					
					
				}
				
				$("#p-l2,#c-l5-1").html(pz);
				
				
				
					 
					
					
					$("#p-l3,#p-l4,#p-l5").html("");
					if($(this).val()==""){
					 
						$("#p-l5,#re-l10").html(1);
					
				}else{
					
					$("#p-l5,#re-l10").html("--");
				}
					
					
					
					})	
 
 
             $("#p-r2").change(function () {
					
					
					if($(this).val()=="1"){
						
					 $("#p-r3").html('<option >--please choose-- </option><option value="0.5"><110 ft - {33m}</option><option value="0.6">110-140 ft - {33-43m}</option><option value="0.7">140-180 ft - {43-55m}</option>	<option value="0.8">180-225 ft - {55-68m}</option>	<option value="0.9">225-330 ft - {68-100m}</option>	<option value="1">>300 ft - {100m}</option>');	
						
						
					}else if($(this).val()=="2"){
						
						 $("#p-r3").html('<option >--please choose-- </option><option value="0.7"><110 ft - {33m}</option><option value="0.8">110-140 ft - {33-43m}</option><option value="0.9">140-180 ft - {43-55m}</option>	<option value="0.9">180-225 ft - {55-68m}</option>	<option value="1">225-330 ft - {68-100m}</option>	<option value="1">>300 ft - {100m}</option>');	
						
						
					}else{
						
						 
						$("#p-l5,#re-l10").html(1); 
						$("#p-r3").html('<option >----</option>');	
						
						
					}
						
				 
					})	
 
        $("#p-r3").change(function () {
						
						
					$("#p-l3").html($(this).find("option:selected").text());
					$("#p-l4").html($(this).val());
					 
					 var b=$(this).val()*parseFloat($("#p-l2").html());
					$("#p-l5,#re-l10").html(b.toFixed(2)); 
					 
					})	
 
 
 
                    //p