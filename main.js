// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyAMLWFM-IXOddOWgmvd37zhPLo5eJCqx10",
    authDomain: "dec042019-3a76a.firebaseapp.com",
    databaseURL: "https://dec042019-3a76a.firebaseio.com",
    projectId: "dec042019-3a76a",
    storageBucket: "dec042019-3a76a.appspot.com",
    messagingSenderId: "507053251315"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact88');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	comment: $('.com99').val(),

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});