let diary1List = ["Keep clicking me.", "Is this thing recording?", "Hopefully I’m doing this right.", "My first diary. I’m not really sure what to say, but I guess I’ll figure it out.", "It’s day 1 of our trip to the moon.", "It takes about 3 days total.", "I can’t believe I’m in space!", "No amount of training can ever prepare you for an experience like this.", "I’m looking out the window right now, the most beautiful view.", "Absolutely nothing to complain about!", "Well...", "Except maybe the food.", "Talk soon. "];

let count1 = 1;
let element1 = document.getElementById("diary1");
console.log(element1);
element1.innerHTML = diary1List[0];

element1.onclick = function () {
  if(count1 <= diary1List.length - 1) {
    element1.innerHTML = diary1List[count1];
    count1 += 1;
  }
}

