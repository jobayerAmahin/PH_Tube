const getDetailTime=(t)=>{
    
    const hr=parseInt(t/3600)
    let remSec=t%3600
    const minutes=parseInt(remSec/60)
    let lastSec=remSec%60
    return `${hr} hour ${minutes} minutes ${lastSec} seconds ago`
}
console.log(getDetailTime(999999))