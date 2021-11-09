var aText = new Array(
  `<span>const </span><span>aboutMe</span> = [`,
  `"hi i'm Moises",`,
  `"a frontend developer",`,
  `"based in Mexico",`,
  `"i drink lot of cofee",`,
  `"and build websites",`,
  `];`,
  ``,
  ``,
  `<span>if</span>(<span>you want to know about my work experience && projects</span>) {`,
  `please check the menu`,
  `}`,
  ``,
  `cheers!`
);


var iSpeed = 25;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}