'use strict';

//attach a click listener to add burger button
$('#addBurger').click(addABurger);

//Enable the button when there is some text in the textbox

$('#tobeadded').on('input', function () {
  //enable the button
  console.log('changed');
  let burgerName = $('#tobeadded').val();
  console.log(burgerName);
  if (burgerName.trim().length > 0) {
    console.log('removing');
    console.log($('#tobeadded'));
    $('#tobeadded').removeAttr('disabled');
  }
});

function addABurger() {
  let burgerName = $('#tobeadded').val();
  //call the api and post the new burger
  $.post('/api/burgers', {
    burger_name: burgerName,
    devoured: false,
  }).done(function (response) {
    //add the burger to the list of availabe burgers
    makeBurgerAvailable(response.data);
  });
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
