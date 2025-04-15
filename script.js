const poem = [
    "In just three months, we have come so far,",
    "Through every laugh, every little scar.",
    "You are my peace, my sweetest song,",
    "With you beside me, I feel strong.",
    "",
    "From late night talks to silly fights,",
    "You make my darkest moments light.",
    "Your voice, your smile, your gentle touch,",
    "All these things I love so much.",
    "",
    "Through distance, time, and all between,",
    "You're still the loveliest thing I have ever seen.",
    "So here is to us, to love so true,",
    "To every tomorrow with you. ❤️"
  ];
  
  const poemDiv = document.getElementById("poem");
  
  let line = 0;
  let char = 0;
  
  function typeLine() {
    if (line < poem.length) {
      if (char < poem[line].length) {
        poemDiv.innerHTML += poem[line][char];
        char++;
        setTimeout(typeLine, 50);
      } else {
        poemDiv.innerHTML += "<br/>";
        line++;
        char = 0;
        setTimeout(typeLine, 500);
      }
    }
  }
  
  typeLine();
  