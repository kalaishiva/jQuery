 //add css in it.
$('h1').css('color', 'green');

//in order to change the text
$('h1').text("World");
$('h1').html('<em> Kalai </em ');

//we can add the class which we write in the css
$('h1').addClass('big-title margin-50');

//we can remove the class which we write in the css
$('h1').removeClass('big-title');

//change the attribute example change the ref in the anchour tag
$('a').attr('href', 'https://www.facebook.com/');

//to get the attribute value
console.log($('a').attr('href')); 

//select all the button using javascript
for (var i=0; i<5; i++){
document.querySelectorAll('button')[i].addEventListener('click', function(){
    document.querySelector('h1').style.color='red';
})
} 
//using jQuery
$('button').click(function(){
    $('h1').css('color', 'yellow');
})

//event listener in the input box

 $('input').keypress(function(event){
    console.log(event.key);
});


//the letter typed in the input is updated in the h1(heading)
$('input').keypress(function(event){
    $('h1').text(event.key)
});

//we can use on() method its easy to add the event listener

$('h1').on('mouseover', function(){
    $('h1').css('color', 'blue')
});

//add element in js
$('h1').before("<button>before</button>");
$('h1').after("<button>after</button>");
$('h1').prepend("<button>prepend</button>");
$('h1').append("<button>append</button>");


//to remove the element 
$("button").remove();

//hide the element
 $('button').on('click',function(){
    $('h1').hide()
}); 

//show the element

$('h1').show();

//toggle between the show and hide
 $('button').on('click',function(){
    $("h1").toggle()
});

//slideup, slidedown, fadeout, fadein method also similar like toggle 
//but its little more pleasent to watch the slideup ...
   
//animate (its value is always the number value like 12 and not like red)
$('button').on('click', function(){
    $('h1').animate({margin: '40px'})
    $('h1').animate({opacity: 0.5})
});
//multiple animated added in a single line
$('button').on('click', function(){
    $('h1').slideUp().slideDown().animate({bold: '40px'})
    
});