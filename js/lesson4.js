
    // FADES & SLIDES FUNCTIONS

    var stateCheck = function(){
        if($('#box').css('display') == 'none'){
            $('#btnFadeOut, #btnSlideUp').text('It\'s gone.').attr('disabled', 'disabled');
        }
        else {
            $('#btnFadeOut').text('.fadeOut()').removeAttr('disabled');
            $('#btnSlideUp').text('.slideUp()').removeAttr('disabled');
        };

        if($('#box').css('display') != 'none'){
            $('#btnFadeIn, #btnSlideDown').text('Oh, there it is.').attr('disabled', 'disabled');
        }
        else {
            $('#btnFadeIn').text('.fadeIn()').removeAttr('disabled');
            $('#btnSlideDown').text('.slideDown()').removeAttr('disabled');
        };
        $('#btnFadeTog').text('.fadeToggle()');
        $('#btnSlideTog').text('.slideToggle()');
    };

    var ifTrans = function(sel, prop = 'display', state = 'none', msg = 'Fading...'){
        if($('#box').css(prop).toLowerCase() != state){
            $(sel).text(msg);
        }
    };

    // FADES EVENT LISTENERS

    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(1000, function(){
            stateCheck();
        });
        ifTrans(this);
    });

    $('#btnFadeIn').click(function(){
        if($('#box').css('display').toLowerCase() != 'block'){
            $('#box').fadeIn(1000, function(){
                stateCheck();
            });
        };
        ifTrans(this, 'opacity', 1);
    });

    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle(1000, function(){
            stateCheck();
        });
        ifTrans(this, 'opacity', 2);
    });


    //SLIDES EVENT LISTENERS

    $('#btnSlideUp').click(function(){
        $('#box').slideUp(1000, function(){
            stateCheck();
        });
        ifTrans(this, undefined, undefined, 'Sliding...');
    });

    $('#btnSlideDown').click(function(){
        $('#box').slideDown(1000, function(){
            stateCheck();
        });
        ifTrans(this, undefined, undefined, 'Sliding...');
    });


    $('#btnSlideTog').click(function(){
        $('#box').slideToggle(1000, function(){
            stateCheck();
        });
        ifTrans(this, undefined, undefined, 'Sliding...');
    });


    // STOP EVENT LISTENER

    $('#btnStop').click(function(){
        $('#box').stop();
    });

    // MOVE EVENT LISTENERS

    $('#moveLeft').click(function(){
        // var moveLeftAmount = $('.lesson4').width() - 50;
        $('#box2').animate({
                left: 0,
                height: 50,
                width: '50px',
                opacity: 1

            }, function(){
            $('#moveLeft').attr('disabled', 'disabled');
            $('#moveRight').removeAttr('disabled');
        });
    });

    $('#moveRight').click(function(){
        var moveRightAmount = $('.lesson4').width() - 300;
        $('#box2').animate({
                // Note the type inferencing... not sure if this is jQuery or vanilla JS doing that. I suspect it's JS.
                left: moveRightAmount,
                height: '300px',
                'width': '300px',
                'opacity': 0.5
            }, function(){
            $('#moveRight').attr('disabled', 'disabled');
            $('#moveLeft').removeAttr('disabled');
        });
    });

    $('#moveAround').click(function(){
        var box = $('#box2');
        box.animate({
            left: 300
        });
        box.animate({
            top: 300
        });
        box.animate({
            left: 0,
            top: 300
        });
        box.animate({
            top: 0
        });
    });
