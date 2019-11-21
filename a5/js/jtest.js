

   	 $(document).ready(function(){



     	 //ALL jquery code is below
      	$(".box").hide();
      	$("body").css("background-color","#FAFAAC");
      	$("h1").css("color","black");
      	$("h1").css("font-size","45px");
      	$("h1").css("font-family",'Comic Sans');
      	$("h2").css("color","black");
      	$("h2").css("font-size", "30px");
      	$("footer").css("font-size", "15px");
      	$("#textChange").css("background-color", "#FEFEFE");
      	$("#textChange").html("How to Make Yummy Waffles!");
      	$("#textChange").click(function(){
      	$("body").css("background-color","#FAFAAC");

 	});
 
 	$("#info").mouseover(function(){
        $("#recepticle").html("<em> It is quite easy! </em>");
        $("#info").css("background-color", "white");
            });

      $("#info").mouseleave(function(){
        $("#recepticle").html("");
        $("#info").css("background-color", "transparent");
   	 });

        $("#yum").click(function(){
          $("p").prepend("YUM <br><br> YUM");

       });

  	$(".hideImages").hide();
 

    			$("#step1").click(function(){
       				$("#imageone").toggle(2000);
      			$("#steponeinfo").html("Gather the ingredients and the tools! These include flour, sugar, eggs, milk, baking powder, melted butter,vanilla extract.").toggle(2000);
     		});

      			$("#step2").click(function(){
         				$("#imagetwo").toggle(2000);
       			$("#steptwoinfo").html("Mix up the wet and dry ingredients.Combine flour, salt, and baking powder in a small bowl and mix with a fork. In a large bowl, combine the oil/butter, eggs, vanilla, sugar and milk and mix until well combined and the sugar is dissolved. Then pour the dry ingredients into the wet and whisk just until the clumps are out. ").toggle(2000);
        	});

       			$("#step3").click(function(){
            			$("#imagethree").toggle(2000);
          		$("#stepthreeinfo").html("Preheat your waffle iron well before you start so the waffles cook evenly. This will vary a lot due to differences in waffle irons - but I typically do the medium/high setting.").toggle(2000);
          	});

          			$("#step4").click(function(){
            			$("#imagefour").toggle(2000);
          		$("#stepfourinfo").html("Pour the waffle batter evenly over the preheated plates and then close the waffle iron. Cooking will typically take between 3-5 minutes - as soon as steam stops exploding out of the waffle iron they should be close to done!").toggle(2000);
            });

           		$("#step5").click(function(){
              		  $("#imagefive").toggle(2000);
             	$("#stepfiveinfo").html("Stack the waffles and enjoy them! You can also add in some syrup, whipped cream or fruit!").toggle(2000);

            });

    });

