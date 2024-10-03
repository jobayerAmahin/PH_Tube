//Load Initial Data
const loadData = () => {
  try {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      .then((res) => res.json())
      .then((showData) => showCategory(showData.categories));
  } catch (err) {
    console.log("Error", err);
  }
};

const showCategory = (data) => {
  console.log(data);
  data.forEach((elem) => {
    console.log(elem);
    const categBtn = document.createElement("button");
    categBtn.innerText = elem.category;

    categBtn.classList.add("btn");
    document.getElementById("fetchBtn").appendChild(categBtn);
  });
};

loadData();

//Load Video
const videoObj = {
  category_id: "1003",
  video_id: "aaac",
  thumbnail: "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
  title: "Laugh at My Pain",
  authors: [
    {
      profile_picture: "https://i.ibb.co/XVHM7NP/kevin.jpg",
      profile_name: "Kevin Hart",
      verified: false,
    },
  ],
  others: {
    views: "1.1K",
    posted_date: "13885",
  },
  description:
    "Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more.",
};
const loadVideo = () => {
  try {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
      .then((res) => res.json())
      .then((data) => showVideo(data.videos));
  } catch (error) {
    console.log("Error found", error);
  }
};

const showVideo = (loadedVideos) => {
  const videoSec=document.getElementById('video')
  loadedVideos.forEach((d) => {
    console.log(d);
    const newDiv = document.createElement("div");
    newDiv.classList='card card-compact'
    newDiv.innerHTML = `
    <figure class='h-[200px] relative'>
    <img
      src=${d.thumbnail} class='h-full w-full object-cover'
      alt="Shoes" />
      <span class='absolute right-2 bottom-2 text-base-100 bg-black p-2 rounded-md'>${d.others.posted_date}</span>
    </figure>
    <div class="mx-0 my-2 flex gap-3">
        <img src=${d.authors[0].profile_picture} class='h-10 w-10 rounded-full object-cover'/>
        <div>
            <h2 class='font-bold'>${d.title}</h2>
            <div class='flex gap-2 items-center'>
                <p>${d.authors[0].profile_name}</p>
                ${d.authors[0].verified==true ?`<img src='https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000' class='w-5 h-5'/>`:""}
            </div>
        </div>
     </div>
    `;
    videoSec.appendChild(newDiv)
  });
};

loadVideo();
