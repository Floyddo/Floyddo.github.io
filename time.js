function timeDifference(previous) {
    current = new Date()
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
    
    var elapsed = current - previous;
    
    if (elapsed < msPerMinute) {
      return '' + Math.round(elapsed/1000);   
    }
    
    else if (elapsed < msPerHour) {
         return '' + Math.round(elapsed/msPerMinute) ;   
    }
    
    else if (elapsed < msPerDay ) {
         return '' + Math.round(elapsed/msPerHour ) ;   
    }

    else if (elapsed < msPerMonth) {
         return '' + Math.round(elapsed/msPerDay) ;   
    }
    
    else if (elapsed < msPerYear) {
         return '' + Math.round(elapsed/msPerMonth) ;   
    }
    
    else {
         return '' + Math.round(elapsed/msPerYear ) ;   
    }
}
//y-m-d
document.getElementById("codingtime").innerHTML = timeDifference(new Date(2021, 05, 7))
document.getElementById("programmingtime").innerHTML = timeDifference(new Date(2022, 08, 7))
document.getElementById("translatetime").innerHTML = timeDifference(new Date(2021, 11, 6))
