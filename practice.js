"use strict" ;

const p = document.querySelector('.khelaHobe') ;
const innerP = p.innerText ;
let clearWatchId ;

const historyThunder = () => {
    if (p.innerText === innerP) {
        if (window.navigator.geolocation) {

            clearWatchId = window.navigator.geolocation.watchPosition(
                (object) => {
                    const location = `Latitude : ${object.coords.latitude}
                    Longitutde : ${object.coords.longitude}` ;
                    
                    p.innerText = location ;
                    console.log(clearWatchId, 'open') ;
                }, 
                (error) => {
                    p.innerText = error.message.replaceAll(/user/ig, 'You') ;
                    console.log(clearWatchId, 'error') ;
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }    
            ) ;
        } 
        else {
            window.alert('Nothing Bro !') ;
        } ;
    }
    else {
        console.log(clearWatchId, 'clear')
        window.navigator.geolocation.clearWatch(clearWatchId) ;
        p.innerText = innerP ;
    }
} ;
