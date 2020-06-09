//Check If There Is Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if(mainColors !== null)
{
    document.documentElement.style.setProperty('--main-color',
    localStorage.getItem("color_option"))

    document.documentElement.style.setProperty('--main-color',mainColors);

    //Remove Active Classes From All Colors List Items
    document.querySelectorAll(".colors-list li").forEach(element => 
        {
            element.classList.remove('active');

            if(element.dataset.color === mainColors)
            {
                //Add Active Class
                element.classList.add('active');
            }
        }
        )
}

//Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function()
{
    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open");
}

//switch colors
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(
    li => {
        li.addEventListener("click",(e)=> 
            {
                document.documentElement.style.setProperty('--main-color',
                e.target.dataset.color);

                localStorage.setItem("color-option",e.target.dataset.color);
                e.target.parentElement.querySelectorAll(".active").forEach
                (element => {
                    element.classList.remove("active");
                });
                e.target.classList.add("active");
            });
    }
);

//Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Get Array Of Imgs
let imgsArr = ['firstpic.jpg', 'secondpic.jpg', 'thirdpic.jpg', 'forthpic.jpg', 'fifthpic.jpg'];

//Change Background Image Url

landingPage.style.backgroundImage = 'url("images/secondpic.jpg")';

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArr.length);

    landingPage.style.backgroundImage = 'url("images/' + imgsArr[randomNumber] + '")';
}, 5000);