/* Step One define functions*/
//click on "add" button to add what you have typed on to shopping list.

function addItem() {
    alert("I've just activated this button woop");
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

