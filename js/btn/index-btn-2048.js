    // кнопка со страниы index btn 2048
    $(window).ready(function(){
        $(".buttme").wrapInner('<div class=buttmetext></div>');
            
            $(".buttmetext").clone().appendTo( $(".buttme") );
            
            $(".buttme").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
            
            $(".twist").css("width", "25%").css("width", "+=3px");
        });