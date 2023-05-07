function timeDifference(current, previous) {
    
     var msPerMinute = 60 * 1000;
     var msPerHour = msPerMinute * 60;
     var msPerDay = msPerHour * 24;
     var msPerMonth = msPerDay * 30;
     var msPerYear = msPerDay * 365;
     
     var elapsed = current - previous;
     
     if (elapsed < msPerMinute) {
          return Math.round(elapsed/1000) + ' seconds';   
     }
     
     else if (elapsed < msPerHour) {
          return Math.round((elapsed/msPerMinute)*10)/10 + ' minutes';   
     }
     
     else if (elapsed < msPerDay ) {
          return Math.round((elapsed/msPerHour )*10)/10 + ' hours';   
     }
 
     else if (elapsed < msPerMonth) {
          return 'approximately ' + Math.round((elapsed/msPerDay)*10)/10 + ' days';   
     }
     
     else if (elapsed < msPerYear) {
          return 'approximately ' + Math.round((elapsed/msPerMonth)*10)/10 + ' months';   
     }
     
     else {
          return 'approximately ' + Math.round((elapsed/msPerYear)*10)/10 + ' years';   
     }
 }
//y-m-d
document.getElementById("codingtime").innerHTML = timeDifference(new Date(2021, 05, 7))
document.getElementById("programmingtime").innerHTML = timeDifference(new Date(2022, 08, 7))
document.getElementById("translatetime").innerHTML = timeDifference(new Date(2021, 11, 6))
