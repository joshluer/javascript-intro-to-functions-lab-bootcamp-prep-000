function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowercase = "hello!";
  var uppercase = "HELLO!";
  var mixedCase = "Hi there!";
  var lowerString = "I can't hear you!";
  var upperString = "YES INDEED!";
  if (lowercase.toLowerCase() === lowercase) {
    return lowerString;
  }
  if (uppercase.toUpperCase() === uppercase) {
    return upperString;
  }
  // ;
  //mixedCase.toLowerCase() === mixedCase;
  //mixedCase.toUpperCase() === mixedCase;
}