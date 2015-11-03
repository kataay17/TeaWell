$(document).ready(function() {


    $('#Lightbox').lightbox(options)

    
            $(".Lightbox").mouseenter(function() {
                $("#overlay").show();
            });
            $(".Lightbox").mouseleave(function() {
                $("#overlay").hide();
            });
        });
        $(document).ready(function() {
            $(".Lightbox").mouseenter(function() {
                $("#overly").show();
            });
            $(".Lightbox").mouseleave(function() {
                $("#overly").hide();
            });
        });