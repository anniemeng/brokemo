var Charge = Parse.Object.extend("Charge", {
    defaults: {
      payer: "",
      reciever: "",
      isDone: false,
      image: null,
      type: "",
      //descrip: ""
    },
});

