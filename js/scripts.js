//business logic



// frontend logic

$(document).ready(function() {

  $("form#formInput").submit(function(event) {
    event.preventDefault();

    var inputSentence = $("#input-sentence").val();

    var lowerCase = inputSentence.toLowerCase()

    var initialSentence = lowerCase.split("");

    // Attempt to remove spaces and special characters
    //
    // var specialChar = [" ", ",",".","!"];
    //
    // for (var i = 0; i < initialSentence.length; i++) {
    //
    //   }
    // }

    var len = parseInt(lowerCase.length);

    var sqrt = Math.sqrt(len);
    var rows = Math.ceil(sqrt);
    var remainder = sqrt % rows;

    if (remainder === 0) {
      var columns = rows;
    } else {
      var columns = rows - 1;
    }

    var encodedSentence = [];

    for (var i = 0; i < len ; i += columns) {
      encodedSentence.push(initialSentence[i]);
    }

    console.log(rows);
    console.log(columns);
    console.log(initialSentence);
    console.log(encodedSentence);

  });
});
