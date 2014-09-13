
var Charge = Parse.Object.extend("Charge", {
    defaults: {
      payer: "",
      reciever: "",
      isDone: false,
      image: null,
      type: "",

      //time : "",
      //id: "",
      descrip: ""
    },
});

function createCharge (chargerId, payerId, type) {
	var charge = new Charge();
	//charge.id = chargerId + payerId + time;
	charge.set("payer",payerId);
	charge.set("reciever", chargerId);
	charge.set("type",  type);
    charge.save();
};



function confirmPayment (obj) {
	obj.isDone = true;
};



