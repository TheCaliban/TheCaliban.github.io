function createFlowerImage ()
{
    // DOM image generation

    let image = document.createElement("img");

    image.setAttribute("src", "img/icons/flower1.png");
    image.setAttribute("height", "20");
    image.setAttribute("width", "20");
    image.setAttribute("alt", "Flower 1");

    document.getElementById('new_element').appendChild(image);
    
    // Jquery adding
    
/*
    $('#new_element').append(image);
*/
    
}

// Color generation for DON'T WORRY BE HAPPY

function colorText(random = 0) 
{
    let r_color;
    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let spans = document.querySelectorAll('span#rainbow span');// fill with proper code

    for (var i = spans.length - 1; i >= 0; i--)
    {
        /* Here we suggest a randomizer usable by clicking on the refresh button */
        
        r_color = (random) ? colors[Math.floor(Math.random() * colors.length)] : colors[i];
        spans[i].style.color = r_color;
    }

    
    //Jquery version
    
    /*
        $("#rainbow").children().each(function() {
            $(this).css("color", colors[Math.floor(Math.random() * colors.length)]);
        });
    */
}

function changeImageOnHover() 
{

    // Jquery flower management with reverse changing when leave hover


    /*

    $("#event img").hover(function() {
       $(this).attr("src", "img/icons/flower2.png");
    }, function() {
       $(this).attr("src", "img/icons/flower1.png");
    });

    */
    
    // JS flower management

    var changeSrc = function(event) {
        if (event.target.src) {

            let filename = event.target.src.replace(/^.*[\\\/]/, '');

            if(filename == "flower1.png")
            {
                event.target.src = "img/icons/flower2.png";
            }
            else
            {
                event.target.src = "img/icons/flower1.png";
            }
        }
    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);
}