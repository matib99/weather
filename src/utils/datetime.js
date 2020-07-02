const daysL = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const days = ['Su','Mo','Tu','We','Th','Fr','Sa'];

const twoDig = (num) => {
  return num < 10 ? `0${num}` : `${num}`;
}


export const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);   
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var day = days[a.getDay()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = day + '  ' + date + ' ' + month + ' ' + year + ' ' + hour + ':' + twoDig(min);
    return time;
  }

  export const getDayOfTheWeek = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp*1000);
    return days[a.getDay()]
  }

  export const getDayAndTime = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp*1000);
    var day = daysL[a.getDay()];
    var hour = a.getHours();
    var min = a.getMinutes();
    return day + '  ' + hour + ':' + twoDig(min);
  }
