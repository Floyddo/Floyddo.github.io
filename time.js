function timeDifference(previous) {
    
     var msPerMinute = 60 * 1000;
     var msPerHour = msPerMinute * 60;
     var msPerDay = msPerHour * 24;
     var msPerMonth = msPerDay * 30;
     var msPerYear = msPerDay * 365;
     var current = new Date()
     var elapsed = current - previous;
     console.log(elapsed)
     console.log(Math.round((elapsed/msPerYear)*10)/10)
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
          return  Math.round((elapsed/msPerDay)*10)/10 + ' days';   
     }
     
     else if (elapsed < msPerYear) {
          return  Math.round((elapsed/msPerMonth)*10)/10 + ' months';   
     }
     
     else {
          return  Math.round((elapsed/msPerYear)*10)/10 + ' years';   
     }
 }
//y-m-d
document.getElementById("codingtime").innerHTML = timeDifference(new Date(2021, 05, 7))
document.getElementById("programmingtime").innerHTML = timeDifference(new Date(2022, 08, 7))
document.getElementById("translatetime").innerHTML = timeDifference(new Date(2021, 11, 6))
