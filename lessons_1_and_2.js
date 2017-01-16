$(document).ready(function(){
    // LESSON TWO: SELECTORS

    // $('h1').hide();
    // $('h1#heading1').hide();
    // $('.heading2').hide();
    $('p span').css('color', 'red');

    // Target specific list items via pseudo selectors
    $('ul#list li:first').css('color', 'red');
    $('ul#list li:last').css('color', 'green');
    $('ul#list li:even').css('background', 'yellow');
    $('ul#list li:odd').css('background', 'lightblue');
    $('ul#list li:nth-child(3n)').css('list-style', 'none')

    // Target form elements via psuedo element selectors
    $(':button').val(':button selector, .val() method.');
    $(':text').val(':text selector,.val() method.');
    $(':submit').val(':submit selector, .val() method.');

    // Target Links via Attributes
    // $('[href]').css('color', 'red');
    $('a[href="http://yahoo.com"]').css('color', 'green');

    // Target Everything with wildcard
    // $('*').hide();

    // LESSON TWO: EVENTS

    // .click method is shorthand for .on('click', function(){})
    $('#btn1').click(function(){
        $('.para1').hide();
        // alert('Button Clicked!');
    });

    $('#btn2').on('click', function(){
        $('.para1').show();
    });

    $('#btn3').on('click', function(){
        $('.para1').toggle();
    });

    $('#btn4').dblclick(function(){
        $('p').css('color','red');
    });

    $('#btn5').hover(function(){
        $('p').css('color','black');
    });
    $('#btn6').on('mouseenter', function(){
        $('button').addClass('red');
    });
    $('#btn6').on('mouseleave', function(){
        $('button').removeClass('red');
    });

    var state = false;
    $('#btn7').on('mousedown', function(){
        $('*').toggle();
        state = true;
    });

    $('*').on('mouseup', function(){
        if (state == true){
            $('*').toggle();
            state = false;
        };
    });


    $('#btn8').click(function(e){
        console.log(e);
    });
    $('#btn9').on('mousemove', function(e){
        console.log('Coords: Y:' + e.clientY+" X: "+e.clientX);
        $('#coords').append('Coords: Y:' + e.clientY+" X: "+e.clientX+"<br>");
    });
    $('#btn9').click(function(){
        $('#coords').html('');
    });

    $('html').on('mousemove', function(e){
        $('#practicalCoords').html('Y:' + e.clientY+" X: "+e.clientX+"<br>");
    });

    $('input').focus(function(){
        // alert('focus');
        $(this).css('background','pink');
    });
    $('input').blur(function(){
        // alert('focus');
        $(this).css('background','white');
    });
    $('input').keyup(function(e){
        console.log(e.target.value);
    });

    $('select#gender').change(function(){
        alert('Congratulations on your sex change!');
    });

    $('#form').submit(function(e){
        e.preventDefault();
        var name = $('input#name').val();
        console.log(name);
    });
});
