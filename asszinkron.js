class MyAsszinkron {
    constructor() {}
  
    getAdat(vegpont,tomb, myCallback, myCallbackHiba) {
      $.ajax({
        url: vegpont,
        type: "GET",
        success: function (result) {
          tomb.push(result);
          console.log(tomb);
          myCallback(tomb);
        },
        error: function(){
          myCallbackHiba();
        },
      });
    }
  
    postAdat(vegpont, adat) {
      console.log(adat);
      $.ajax({
        url: vegpont,
        type: "POST",
        data: adat,
        success: function (result) {}
      });
    }
  
    putAdat(vegpont, adat, id) {
      $.ajax({
        url: vegpont + "/" + id,
        type: "PUt",
        data: adat,
        success: function (result) {}
      });
    }
  
    deleteAdat(vegpont, id) {
      $.ajax({
        url: vegpont + "/" + id,
        type: "DELETE",
        success: function (result) {}
      });
    }
  }
  