function counterCreator(number) {
  var n = number;

  return function() {
    n++;
    return n;
  };
}

function countAnnouncer(counterType, counter) {
  var type = counterType;

  return function() {
    return "Now serving " + type + " number " + counter() + "!";
  };
}
