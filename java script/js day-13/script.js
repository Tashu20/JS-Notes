//console.log("starting....")
//function mywork(){
   // setTimeout(() => {
   // console.log("working....");
  //  }, 2000);
//}
//console.log(mywork());
//console.log("ending....");


// call back cycle
console.log("starting....")
function mywork(cb){
    setTimeout(() => {
    cb("working completed");
    // return "working completed";
    
    }, 5000);
}
mywork((data)=>{
    console.log(data);
})
console.log("ending....");

//create three function in ansinc function using timeout
//one for login
//one for video list
// one for single video details

//one for login
console.log("login....")
function login(email,password,cb){
    setTimeout(() => {
    cb("username:email,islogin:true,message:login completed");
    // return "working completed";
    
   
        }, 5000);
    
}

function getVideoList(user,cb){
    setTimeout(() => {
    cb("video list: video1,video2,video3");
    // return "working completed";
    }, 2000);
}

function getVideoDetails(video,cb){
    setTimeout(() => {
    cb("video details: video name,video duration,video creator");
    // return "working completed";
    }, 3000);
}
  

login("user@example.com","password123",(data)=>{
    console.log(data);
    getVideoList(data.uname,(videoList)=>{
        console.log(videoList);
        getVideoDetails(videoList.split(',')[0],(videoDetails)=>{
            console.log(videoDetails);
        })
    })
})