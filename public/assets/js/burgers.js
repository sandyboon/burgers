'use strict';

//attach a click listener to add burger button
$('#addBurger').click(addABurger);
//attach a click listener to devour burger buttons
$('.devourBtn').click(devourABurger);

//Enable the button when there is some text in the textbox

$('#tobeadded').on('input', function () {
  $('#tobeadded').next().removeClass();
  $('#tobeadded').next().addClass('hideError');
});

function addABurger() {
  let burgerName = $('#tobeadded').val();
  if (burgerName.trim().length <= 0) {
    $('#tobeadded').next().removeClass();
    $('#tobeadded').next().addClass('showError');
  } else {
    //call the api and post the new burger
    $.post('/api/burgers', {
      burger_name: burgerName,
      devoured: false,
    }).done(function (response) {
      //add the burger to the list of availabe burgers
      makeBurgerAvailable(response.data);
    });
  }
}

function devourABurger({ target }) {
  console.log(target.id + target.getAttribute('data-burger-name'));
  //call the api to update the burger
}

function makeBurgerAvailable(burger) {
  document.getElementById('allAvailableBurgers').insertAdjacentHTML(
    'beforeend',
    `
        <div class="row mt-2">
            <div class="col-6">
                <span class="availableBurger">${burger.burger_name}</span>
            </div>
            <div class="col-5">
                <button style="display: inline;" id="${burger.id}">Devour it!</button>
            </div>
        </div>
    `
  );
}
