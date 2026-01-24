var myScore = 85;
var friendScore = 75;
if(myScore > 80){
    if(friendScore > 80){
        console.log('Go for a lunch');
    }
else if(friendScore >= 60 && friendScore <= 80 ){
    console.log('Tell your friend: Good luck next time');
}
else if(friendScore >= 40 && friendScore <60){
    console.log('Keep your friend s message unseen');
}else{
    console.log('Block your friend');
}
}
else{
    console.log('Go home, sleep and act sad');
}