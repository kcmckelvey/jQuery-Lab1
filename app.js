// $('#btnSubmit').click(function (e) {
//     alert($(':text').val())
//     e.preventDefault()
//     //$(':text').val().appendTo('h2')
//     //('h2').appendTo('div')
//     let typingText = ($(':text').val())
//     let h2 = $("<h2>" + typingText + "</h2>")
//     h2.appendTo('div')
//     $('h2').hover (function() {
//         $('h2').css("background-color" , "red")
//         console.log('hoverthis')
//     })
// })      steps for the h2 in README.md

$('#btnSubmit').click(function (e) {
    alert($(':text').val())
    e.preventDefault()
    //$(':text').val().appendTo('h2')
    //('h2').appendTo('div')
   // let typingText = ($(':text').val())
    // let h2 = $("<h2>" + typingText + "</h2>")
    // h2.appendTo('div')
    // $('h2').hover (function() {
    //     $('h2').css("background-color" , "red")
    //     console.log('hoverthis')
    // })
    let typingListItems = $(':text').val()
    let theListItems = $("<li>" + typingListItems + "</li>")
    theListItems.appendTo(unorderedList)
    $(theListItems).click (function(){
        $(theListItems).css('background-color', randomColor())
    }) 
    $(theListItems).dblclick(function(){
        $(theListItems).remove()
    })


    //event listener on theListItems and in that click listener you want to change the color using css
})

$(':text').keypress(function () {
    if ($(':text').val().length > 0)
        return ($('#btnSubmit').attr('disabled', false))
})

var div = $('<div>bob</div>') // exact same thing as document.createElement('div')

div.appendTo('body')

var unorderedList = $('<ul></ul')
unorderedList.appendTo('body')

let colorArray= ['red', 'blue', 'pink', 'green','mintcream', 'yellow', 'orange']

//theListItems = $('<li></li')

function randomColor(){
    let randomListColor = Math.floor(Math.random()* colorArray.length)
    return colorArray[randomListColor]
}

//unorderedList.addEventListener("click", function() {
    //theListItems.style.color = randomColor()
   // unorderedList.style.color = randomColor()
//})

