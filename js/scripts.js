// $(document).ready(function() {


    // $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    //     event.preventDefault();
    //     $(this).ekkoLightbox();
    //     });

    
        //     $(".Lightbox").mouseenter(function() {
        //         $("#overlay").show();
        //     });
        //     $(".Lightbox").mouseleave(function() {
        //         $("#overlay").hide();
        //     });
        // });
        // $(document).ready(function() {
        //     $(".Lightbox").mouseenter(function() {
        //         $("#overly").show();
        //     });
        //     $(".Lightbox").mouseleave(function() {
        //         $("#overly").hide();
        //     });
        // });

$(document).ready(function(){

    var result;
    var sleep;
    var cholesterol;
    var upsetstomach;

    $("#submitbutton").click(function(){

        $('input[name="sleep"]:checked').each(function(){

            sleep = this.value;

        });

        $('input[name="cholesterol"]:checked').each(function(){

            cholesterol = this.value;

        });

        $('input[name="upsetstomach"]:checked').each(function(){

            upsetstomach = this.value;

        });

        if (sleep === "yes" & cholesterol === "no" & upsetstomach === "no"){

            result = "img/raspberry-leaf-tea.png";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5>Raspberry Tea</h5><p id="caption"> This tea is super great. You should probably drink it and you will feel wonderful all of the time! Did I mention this tea is great? I felt like I had to mention it again. Thanks for taking the quiz you wonderful person!</p>';

        };

        if (sleep === "no" & cholesterol === "yes" & upsetstomach === "no"){

            result = "img/blueberry-tea.jpg";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Blueberry Tea</h5><p id="caption"> This tea is super great. You should probably drink it and you will feel wonderful all of the time! Did I mention this tea is great? I felt like I had to mention it again. Thanks for taking the quiz you wonderful person!</p>';

        };

        if (sleep === "no" & cholesterol === "no" & upsetstomach === "yes"){

            result = "img/yellow-tea2.jpg";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Yellow Tea</h5><p id="caption"> This tea is super great. You should probably drink it and you will feel wonderful all of the time! Did I mention this tea is great? I felt like I had to mention it again. Thanks for taking the quiz you wonderful person!</p>';

        };

        if (sleep === "yes" & cholesterol === "yes" & upsetstomach === "yes"){

            result = "img/green_tea.png";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Green Tea</h5><p id="caption"> This tea is super great. You should probably drink it and you will feel wonderful all of the time! Did I mention this tea is great? I felt like I had to mention it again. Thanks for taking the quiz you wonderful person!</p>';


        };

        if (sleep === "no" & cholesterol === "no" & upsetstomach === "no"){

            result = "img/mint-tea.jpg";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Mint Tea</h5><p id="caption"> This tea is super great. You should probably drink it and you will feel wonderful all of the time! Did I mention this tea is great? I felt like I had to mention it again. Thanks for taking the quiz you wonderful person!</p>';

        };

        if (sleep === "no" & cholesterol === "yes" & upsetstomach === "yes"){

            result = "img/cinnamon-tea.jpg";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Cinnamon Tea</h5><p id="caption"> This tea is super great. You should probably drink it and you will feel wonderful all of the time! Did I mention this tea is great? I felt like I had to mention it again. Thanks for taking the quiz you wonderful person!</p>';

        };

        if (sleep === "yes" & cholesterol === "yes" & upsetstomach === "no"){

            result = "img/orange-tea.jpg";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Orange Tea</h5><p id="caption"> This tea is super great. You should probably drink it and you will feel wonderful all of the time! Did I mention this tea is great? I felt like I had to mention it again. Thanks for taking the quiz you wonderful person!</p>';

        };

        if (sleep === "yes" & cholesterol === "no" & upsetstomach === "yes"){

            result = "img/lavender-tea.jpg";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Lavender Tea</h5><p id="caption"> This tea is super great. You should probably drink it and you will feel wonderful all of the time! Did I mention this tea is great? I felt like I had to mention it again. Thanks for taking the quiz you wonderful person!</p>';

        };

        // document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Raspberry Tea</h5><p id="caption"> This tea is super great. You should probably drink it and you will feel wonderful all of the time! Did I mention this tea is great? I felt like I had to mention it again. Thanks for taking the quiz!</p>';

        console.log("sleep"+sleep);
        console.log("cholesterol"+cholesterol);
        console.log("upsetstomach"+upsetstomach);

        console.log(result);


    });

});