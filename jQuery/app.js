/* Step One define functions*/
//click on "add" button to add what you have typed on to shopping list.

function addItem() {
    //alert("I've just activated this button woop");

    var itemValue = $('#addItemValue').val();

    //alert("Is this working");

    if (itemValue.length=== 0) {
        alert("Please add something!");
    }
    //add row to shopping list
    else {
        var row = $('<li class="current-item"><button type="favourite" id= "star">*</button><span>'+itemValue+'</span><button class="cross"></button><button class="tick"></button></li>');

        //add row to other ones
        $('.list-items').prepend(row);

        //empty input box

        $('#addItemValue').val('');
    }
}


//cross through an item once bought by clicking on the tick button

function tick() {
    //alert("I've just activated this button woop");
    $(this).parent().toggleClass('ticked');
}

//delete individual items with the cross

function cross() {
    //alert("I've just activated this button woop");
    $(this).parent().remove();
}

//delete all items by using the bin button

function bin() {
    //alert("I've just activated this button woop");
    $('.list-items').empty();
}

//star item and make it go to top of list

function star() {
    //alert("woop this is working");

//This = Star. The parent of the star is Li, the parent of the LI is UL. I am am telling "this" to prepend the UL and take along the parent of "this" which is the LI.
    $(this).parent().parent().prepend($(this).parent());
}

/* Step Two Using the functions */

$(document).ready(function () {

    /* on click add item to list  */
    $('#addItem').on('click', function() {
        addItem();
    });
    /* on click delete all on list */
    $('.bin').on('click', function() {
        bin();
    });

    //close doc ready
});

/* These functions exist after page load */

/* on click delete an item */

$(document).on('click','.cross', cross);

/* on click tick through item to check off*/

$(document).on('click', '.tick', tick);

/* on click favourite item */

$(document).on('click', '#star', star);


/* on enter press of keyboard, add item*/

$(document).on('keypress', function (key) {
    //keycode == 13 is ENTER
    if (key.keyCode == 13) {
        addItem();
    }
});
