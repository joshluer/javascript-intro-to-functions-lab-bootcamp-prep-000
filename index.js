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
  
  if (lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!";
  }
  if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!";
  }
  if (mixedCase === "I love you, Grandma.") {
    return "I love you, too.";
  }
}