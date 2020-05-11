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
      //empty the input box
      $('#tobeadded').val('');
      //add the burger to the list of availabe burgers
      makeBurgerAvailable(response.data);
    });
  }
}

function devourABurger({ target }) {
  console.log('Devouring burger: ');
  let burger = getBurgerFromBtnTarget(target);
  //call the api to update the burger
  burgerDevourer(burger);
}

function burgerDevourer(burger) {
  const updateBurger = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(burger),
  };
  fetch('/api/burgers/', updateBurger)
    .then((response) => response.json())
    .then(function ({ data }) {
      //remove from available burgers first
      moveBurgerToDevouredBurgers(data);
    });
}

function moveBurgerToDevouredBurgers(data) {
  console.log('Adding to right');
  $('#' + data.id)
    .parents('.burgerRow')
    .remove();
  document.getElementById('devouredBurgers').insertAdjacentHTML(
    'beforeend',
    `
            <div class="row">
            <div class="col-6 offset-3">
                <span class="dvouredBurger">
                    <s>${data.burger_name}</s>
                </span>
            </div>
        </div>
            `
  );
}

function getBurgerFromBtnTarget(target) {
  return {
    burger_name: target.getAttribute('data-burger-name'),
    devoured: true,
    id: target.id,
  };
}

function makeBurgerAvailable(burger) {
  document.getElementById('allAvailableBurgers').insertAdjacentHTML(
    'beforeend',
    `
        <div id="${burger.id}burgerRow" class="row mt-2 burgerRow">
            <div class="col-6">
                <span class="availableBurger">${burger.burger_name}</span>
            </div>
            <div class="col-5">
                <button data-burger-name="${burger.burger_name}" class="devourBtn" style="display: inline;"
                id="${burger.id}">Devour it!</button>
            </div>
        </div>
    `
  );
  //add the click lisnter to be devoured
  $(`#${burger.id}burgerRow`).click(devourABurger);
}
