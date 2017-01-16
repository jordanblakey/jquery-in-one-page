$(document).ready(function(){
    $('p.para1').css({color:'red', background:'#ccc'});

    // $('p.para1').css({'color','red'});

    $('p.para2').addClass('myClass');

    $('p.para3').removeClass('myClass');

    $('#btn3-1').click(function(){
        $('p.para4').toggleClass('myClass');
        console.log('HIT');
    });

    $('#myDiv').text('Hello World! This div\'s content was altered via the .text(\'Insert text here.\') method.');

    $('#myDiv2').html('<h3>This h3 added by calling the .html() method on #myDiv2.');

    // alert($('#myDiv').text());
    $('#btn3-2').click(function(){
        $('ul#lesson3ul').append('<li>Appended List Item</li>');
    });
    $('#btn3-3').click(function(){
        $('ul#lesson3ul').prepend('<li>Prepended List Item</li>');
    });

    $('.para6').appendTo('#lesson3ul');
    $('.para7').prependTo('#lesson3ul');

    $('ul#lesson3ul').before('<h3>This h3 was added BEFORE the ul below using .before(). It\s not part of the ul!</h3>');
    $('ul#lesson3ul').after('<h3>This h3 was added AFTER the ul below using .before(). It\s not part of the ul!</h3>');

    $('#btn3-4').click(function(){
        $('ul#lesson3ul').empty();
    });

    $('#btn3-5').click(function(){
        $('#lesson3ul li:first').detach();
    });

    $('#btn3-6').click(function(){
        $('a#attrChange').attr('target','_blank');
        $(this).attr('disabled','disabled');
        alert('Changed to: '+$('a#attrChange').attr('target'));
        $('a#attrChange').css({color:'goldenrod'})
        $('a#attrChange').text('Aim!')
        $('#btn3-6').text('Link will now fire in a new window!');
    });

    $('#btn3-7').click(function(){
        $('a#attrChange').attr('href','http://google.com');
        $(this).attr('disabled','disabled');
        alert('Changed to: '+$('a#attrChange').attr('href'));
        $('a#attrChange').css({color:'red'})
        $('a#attrChange').text('FIRE!')
        $('#btn3-7').text('Link will now fire at Google!');
    });

    $('#btn3-8').click(function(){
        $('a#attrChange').removeAttr('href');
        $('a#attrChange').removeAttr('target');
        $(this).text('Link disabled.');
        $('a#attrChange').css({'color':'green','text-decoration':'underline'})
        $('a#attrChange').text('Ready.')
        $('#btn3-6').removeAttr('disabled');
        $('#btn3-7').removeAttr('disabled');
    });

    // Wrap all P eleements in an H1 Tag.
    $('#btn3-9').click(function(){
        $('p').wrapAll('<h1>');
    });

    // Add List Items.
    $('#newItem').val('Press enter to append list items.')
    $('#newItem').keyup(function(e){
        var keyCode = e.which;
        if(keyCode == 13){
            e.preventDefault();
            $('ul#addList').append('<li>'+e.target.value+'</li>');
        }
    });
    $('#btn3-10').click(function(){
        $('ul#addList').empty();
    });


    // For each loop through array in jQuery
    var myArr = ['Brad', 'Kelly', 'Nate', 'Jose'];

    // Pushing input values to an array
    $('#newUser').val('Press enter to push to array.');
    $('#newUser').keyup(function(e){
        var keyCode = e.which;
        if(keyCode == 13){
            e.preventDefault();
            myArr.push(e.target.value);
            $('#newUser').val('');
            // $('ul#addUser').append('<li>'+e.target.value+'</li>');
        }
    });

    // $.each(myArr, function(i, val){
    //     console.log(val);
    // });
    $('#printUsers').click(function(){
        $('ul#users').empty();
        $.each(myArr, function(i, val){
            $('#users').append('<li>'+val+'</li>');
        });
    });

    //Getting a ul and sending to array as a DOM element.
    //Logging both the Dom structure and the inner HTML to the console.
    var newArr = $('#addList li').toArray();
    console.log(newArr);
    $.each(newArr, function(i,val){
        console.log(val.innerHTML);
    });

});
