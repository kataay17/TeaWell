$(document).ready(function() {


    $('#myLightbox').lightbox(options)

    
            $(".index").mouseenter(function() {
                $("#overlay").show();
            });
            $(".index").mouseleave(function() {
                $("#overlay").hide();
            });
        });
        $(document).ready(function() {
            $(".quiz").mouseenter(function() {
                $("#overly").show();
            });
            $(".quiz").mouseleave(function() {
                $("#overly").hide();
            });
        });