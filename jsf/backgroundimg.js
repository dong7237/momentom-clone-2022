const bgimg_forder = ["1.jpeg", "2.jpeg", "3.jpeg"];
const todayBgimg = bgimg_forder[Math.floor(Math.random() * bgimg_forder.length)];
const create_img = document.createElement("img");
create_img.src = `bgimg/${todayBgimg}`;

document.body.appendChild(create_img);