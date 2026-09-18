(function () {
  var names = [
    "Yaakov", "John", "Jen", "Jason", "Paul", 
    "Frank", "Larry", "Paula", "Laura", "Jim"
  ];

  console.log("=== ЧАСТИНА 1: Стандартна селекція за першою літерою (J/j) ===");

  for (var i = 0; i < names.length; i++) {
    var currentName = names[i];
    
    var firstLetter = currentName.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(currentName);
    } else {
      helloSpeaker.speak(currentName);
    }
  }

  
  console.log("\n=== ЧАСТИНА 2: Додаткова селекція за сумою ASCII-кодів ===");
  console.log("Анотація: рахуємо суму кодів символів (ASCII) для кожного імені. Якщо сума перевищує поріг (450), вітаємо 'Special Hello', інакше – звичайне вітання.");

  var ASCII_THRESHOLD = 450;

  for (var k = 0; k < names.length; k++) {
    var name = names[k];
    var asciiSum = 0;

    for (var j = 0; j < name.length; j++) {
      asciiSum += name.charCodeAt(j);
    }

    if (asciiSum > ASCII_THRESHOLD) {
      console.log("Special Hello " + name + " (ASCII сума: " + asciiSum + " > " + ASCII_THRESHOLD + ")");
    } else {
      console.log("Regular Hi " + name + " (ASCII сума: " + asciiSum + " <= " + ASCII_THRESHOLD + ")");
    }
  }
})();