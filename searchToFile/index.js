
// put your code here...
function decodeFile(str) {
  let decoder = new TextDecoder();
  let result = decoder.decode(str);
  return result;
}
function stopEvent() {
  let file = document.getElementById("file");
  file.addEventListener("click", function(event) {
  event.preventDefault();  
    });
}
   
var btn = document.querySelector('button');
let p = document.getElementById('output');

  function readFile(input) {
    let file = input.files[0];
    btn.onclick = function() {
       let reader = new FileReader();   
       reader.readAsText(file);
       reader.onload = function() {
       let out = search(reader.result);
          try { 
             p.innerHTML = out.length+' - совпод. ';
          } catch {
             console.log("sovpadenii net");
          }
             console.log(reader.result)
      };
      reader.onerror = function() {
      return reader.error;
       };
     };
  };

function Search(txt) {
  let value = document.getElementById("phrase").value;
  let reg = RegExp(`${value}`, "gi");
  let result = txt.match(reg);
  //console.log(result);
  return result;
}







