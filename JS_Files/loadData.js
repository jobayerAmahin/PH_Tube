//
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
}

loadData()