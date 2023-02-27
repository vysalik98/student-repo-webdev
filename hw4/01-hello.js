let main = document.querySelector("main");

let img = document.createElement("img");
img.src = "../images/vysali.png";
img.alt = "Picture of vysali in a cafe";
img.style.display = "block";
img.style.borderRadius = "50%";
img.style.height = "170px";
img.style.width = "170px";
img.style.margin = "auto";
img.style.marginTop = "50px";
main.append(img);

const p = document.createElement("p");
p.style.margin = "2% 30%";
let span = document.createElement("span");
span.style.fontWeight = "bold";
span.textContent = "I am Vysali Kallepalli.";
let textNode = document.createTextNode(
  " I'm a graduate student at PSU majoring in computer science. Before moving to Portland with my partner, I used to work in India. It is truly a blessing to be able to return to student life. I enjoy reading, painting, and cooking. I often experiment with different cuisines, but authentic Indian food will always be my favorite. I am enjoying my time here in Portland and looking forward to more experiences."
);
p.append(span);
p.append(textNode);
main.append(p);
