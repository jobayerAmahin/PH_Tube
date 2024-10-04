//-------------------------------------------------------------->Load Initial Data
const loadData = () => {
  try {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      .then(res => res.json())
      .then(showData => showCategory(showData.categories));
  } catch (err) {
    console.log("Error", err);
  }
};

const showCategory = (data) => {
  
  data.forEach((elem) => {
    
    const sectionBtn = document.createElement("div");
    sectionBtn.innerHTML = `
    <button id='${elem.category_id}' onclick='loadCategVideos(${elem.category_id})' class='btn categButtonsAll'>
      ${elem.category}
    </button>
    `
    document.getElementById("fetchBtn").appendChild(sectionBtn);
  });
};

loadData();

//Remove Active Background
const removeActive=()=>{
  const allButtons=document.getElementsByClassName('categButtonsAll')
  console.log(allButtons)
  for(const bTn of allButtons){
    bTn.classList.remove('active')
  }
}

//Load Category Videos

const loadCategVideos=(id)=>{
  try{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
      .then(res=>res.json())
      .then(data=>{
        removeActive()
        const categBtn=document.getElementById(`${id}`)
        categBtn.classList.add('active')
        showVideo(data.category)

      })
  }
  catch(error){
    console.log('error found',error)
  }
}
//------------------------------------------------------------------->Load Video
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

//Time Function

const getDetailTime=(t)=>{
    
  const hr=parseInt(t/3600)
  let remSec=t%3600
  const minutes=parseInt(remSec/60)
  let lastSec=remSec%60
  return `${hr} hour ${minutes} minutes ${lastSec} seconds ago`
}

//Load Video Function
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
  videoSec.innerHTML=''
  

  if(loadedVideos.length==0){
    videoSec.classList.remove('grid')
    const noVideoDiv=document.createElement('div')
    noVideoDiv.classList='flex flex-col gap-3 items-center justify-center text-center min-h-[300px] w-full'
    noVideoDiv.innerHTML=`
    <img src='./Icon.png'/>
    <h2 class='text-2xl font-bold'>Oops! Sorry, there is no content in this page</h2>
    `

    videoSec.appendChild(noVideoDiv)
  }
  else{
    videoSec.classList.add('grid')
  }
  loadedVideos.forEach((d) => {
    
    const newDiv = document.createElement("div");
    newDiv.classList='card card-compact'
    newDiv.innerHTML = `
    <figure class='h-[200px] relative'>
    <img
      src=${d.thumbnail} class='h-full w-full object-cover'
      alt="Shoes" />
      <span class='absolute right-2 bottom-2 text-base-100 bg-black p-2 rounded-md text-xs'>${getDetailTime(d.others.posted_date)}</span>
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
