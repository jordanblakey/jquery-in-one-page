// Load all sections via AJAX
$(document).ready(function(){
    $('.lesson1').load('/lessons/lesson1.html');
    $('.lesson2').load('/lessons/lesson2.html');
    $('.lesson3').load('/lessons/lesson3.html');
    $('.lesson4').load('/lessons/lesson4.html');
    $('.lesson5').load('/lessons/lesson5.html');
});

// Require all scripts via jQuery
$(document).ready(function(){
    var index = 1;
    $.getScript('js/lessons1And2.js', function(){console.log('Lessons '+index+' & '+(index += 1)+' scripts loaded.'); index++});
    $.getScript('js/lesson3.js', function(){console.log('Lesson '+index+' script loaded.'); index++;});
    $.getScript('js/lesson4.js', function(){console.log('Lesson '+index+' script loaded.'); index++;});
    $.getScript('js/lesson5.js', function(){console.log('Lesson '+index+' script loaded.'); index++;});
});
