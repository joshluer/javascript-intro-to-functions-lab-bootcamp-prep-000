var lowercase = "hello!";

var uppercase = "HELLO!";

var mixedCase = "Hi there!";

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
  if (lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!";
  }
  else if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!";
  }
  else if (mixedCase.toLowerCase() === mixedCase) {
    return "I love you, too.";
  }
  else if (mixedCase.toUpperCase() === mixedCase) {
    return "I love you, too.";
  }
}