const endDate ="24 october 2025 10:00 PM"

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input")
//const clock = () =>{
    //}
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;

    if(diff < 0) return;
    //convert into days ;
    input[0].value= Math.floor(diff / 3600/ 24);
    input[1].value= Math.floor(diff/3600)%24;
    input[2].value= Math.floor(diff/60)%60;
    input[3].value= Math.floor(diff)%60;
}
//initial call
clock()


/**
 * 1 day=24 hrs
 * 1 hr=60 mins
 * 60 mins=3600 sec
 */


setInterval(
    () => {
        clock()
    },
    1000
)