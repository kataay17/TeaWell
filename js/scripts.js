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

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Raspberry Tea</h5> <br> <p>Test test tes</p>';

        };

        if (sleep === "no" & cholesterol === "yes" & upsetstomach === "no"){

            result = "img/raspberry-leaf-tea.png";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Raspberry Tea</h5>';

        };

        if (sleep === "no" & cholesterol === "no" & upsetstomach === "yes"){

            result = "img/raspberry-leaf-tea.png";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Raspberry Tea</h5>';

        };

        if (sleep === "yes" & cholesterol === "yes" & upsetstomach === "yes"){

            result = "img/raspberry-leaf-tea.png";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Raspberry Tea</h5>';

        };

        if (sleep === "no" & cholesterol === "no" & upsetstomach === "no"){

            result = "img/raspberry-leaf-tea.png";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Raspberry Tea</h5>';

        };

        if (sleep === "no" & cholesterol === "yes" & upsetstomach === "yes"){

            result = "img/raspberry-leaf-tea.png";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Raspberry Tea</h5>';

        };

        if (sleep === "yes" & cholesterol === "yes" & upsetstomach === "no"){

            result = "img/raspberry-leaf-tea.png";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Raspberry Tea</h5>';

        };

        if (sleep === "yes" & cholesterol === "no" & upsetstomach === "yes"){

            result = "img/raspberry-leaf-tea.png";

            document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Raspberry Tea</h5>';

        };

        document.getElementById("resultimg").innerHTML = '<img src="'+result+'"><h5> Raspberry Tea</h5>';

        console.log("sleep"+sleep);
        console.log("cholesterol"+cholesterol);
        console.log("upsetstomach"+upsetstomach);

        console.log(result);


    });

});