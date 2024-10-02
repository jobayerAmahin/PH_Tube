//Load Initial Data
const loadData=()=>{
    try{
        fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
            .then(res=>res.json())
            .then(showData=>showCategory(showData.categories))
    }
    catch(err){
        console.log('Error',err)
    }
}

const showCategory=(data)=>{
    console.log(data)
    data.forEach(elem => {
        console.log(elem)
        const categBtn=document.createElement('button')
        categBtn.innerText=elem.category

        categBtn.classList.add('btn')
        document.getElementById('fetchBtn').appendChild(categBtn)
    });
}

loadData()

//Load Video

const loadVideo=()=>{
    try{
        fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
            .then(res=>res.json())
            .then(data=>showVideo(data.videos))
    }
    catch(error){
        console.log('Error found', error)
    }
}

const showVideo=(loadedVideos)=>{
    console.log(loadedVideos)
}

loadVideo()