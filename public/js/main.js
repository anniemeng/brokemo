$(function () {
  Parse.initialize("EbdHBkoWKSqOcEMPf6QWb4R8tP6xxrvRw0h6xG2v", "BnsnS6EjkzATZRrmQKSEXsHQYw3xWg9tnbsUARbi");

  //models
  var Charge = Parse.Object.extend("Charge", {
    defaults: {
      payer: "",
      reciever: "",
      isDone: false,
      image: null,
      type: "",
      descrip: ""
    },
  });

  //collections
  var ChargeList = Parse.Collection.extend( {
    model: Charge,

  });

  var ChargeView = Parse.View.extend({
    tagName: "li",

    template:_.template($('charge-template').html()),

    events: {

    },


  });

  //total view
  var AppView = Parse.View.extend( {
    el: $("#button-opt"),

    events: {

    },

    initialize: function() {

    },


    render: function() {

    }
  });

});