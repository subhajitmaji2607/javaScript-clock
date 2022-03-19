function rotation(){
    console.log('rotating');
    date = new Date();

    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    hourRotation = 30*hour + minute/2;
    minuteRotation = 6*minute;
    secondRotation = 6*second;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
} 
rotation();

setInterval(() => {
    rotation()
}, 1000);
