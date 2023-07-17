const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgListEl = document.querySelector('.gallery')
// console.log(imgListEl)

// const imageListEl = document.createElement('img')
// console.log(imageListEl)



const imagesArr = images.map(({ url, alt }) => `<li><img src="${url}" 
alt=${alt} width="300" height="200"></li>`).join("")



imgListEl.insertAdjacentHTML("beforeend", imagesArr)
console.log(imagesArr)


// const imgClassEl = document.querySelector('img')
// // console.log(imgClassEl)
// imgClassEl.style.display = "flex";
// imgClassEl.style.gap = "50px"
// console.log(imgClassEl.style)


// imgClassEl.classList.add("styles-img")

