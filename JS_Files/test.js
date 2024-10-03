const getDetailTime=(t)=>{
    let seconds=t%60;
    let minutes=(t-seconds)/60;
     return (seconds,minutes)
}
getDetailTime(250)