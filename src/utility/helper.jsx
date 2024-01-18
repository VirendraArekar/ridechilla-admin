export const regExConstant = {
    EMAIL : /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    MOBILE : /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
    DATE : /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/,
    TIME : new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/)
}

export const valDate = (date) => {
    date = date.toString()
    let dateformat = regExConstant['DATE'];

    // Matching the date through regular expression      
    if (date.match(dateformat)) {
        let operator = date.split('/');

        // Extract the string into month, date and year      
        let datepart = [];
        if (operator.length > 1) {
            datepart = date.split('/');
        }
        let day = parseInt(datepart[0]);
        let month = parseInt(datepart[1]);
        let year = parseInt(datepart[2]);

        // Create a list of days of a month      
        let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 1 || month > 2) {
            if (day > ListofDays[month - 1]) {
                //to check if the date is out of range
                // console.log("Invalid date")     
                return false;
            }
        } else if (month == 2) {
            let leapYear = false;
            if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
            if ((leapYear == false) && (day >= 29)) {
                // console.log("Invalid date")
                return false;
            }
            else
                if ((leapYear == true) && (day > 29)) {
                    // console.log('Invalid date format!');
                    return false;
                }
        }
    } else {
        // console.log("Invalid date format!");
        return false;
    }
    return true;
}

export const isValidTime = (str) => {
    let regex = regExConstant['TIME'];
    if (str == null) {
        return "false";
    }
    if (regex.test(str) == true) {
        return "true";
    }
    else {
        return "false";
    }
}


export const validation = (key, value, type) =>{
    var output = null
    // console.log('Email Validation ----------------------', regExConstant['EMAIL'].test(value))
    switch(type){
        case 'required' :
            if(value === '' || value === null || value === undefined)
                output = {valid : false, error : `${key} is required`}
            else if(value.length < 2)
                output = {valid : false, error : `${key} is at least 2 character long`}
            break;
        case 'email' :
            if(value === '' || value === null || value === undefined)
                output = {valid : false, error : `${key} is required`}
            else if(!regExConstant['EMAIL'].test(value))
                output = {valid : false, error : `${key} is invalid`}
            break;
        case 'password' :
            if(value === '' || value === null || value === undefined)
                output = {valid : false, error : `${key} is required`}
            else if(value.length < 6)
                output = {valid : false, error : `${key} should be at least 6 character in length`}
            break;
        case 'mobile' :
            if(value === '' || value === null || value === undefined)
                output = {valid : false, error : `${key} is required`}
            else if(regExConstant['MOBILE'].test(value))
                output = {valid : false, error : `${key} is invalid`}
            break;
        case 'date' :
            if(isNaN(value?.getTime())){
                console.log('TIME --------------------', value?.getTime())
                output = {valid : false, error : `${key} is invalid`}
            }
            break;
        case 'time' :
            if(value === '' || value === null || value === undefined)
                output = {valid : false, error : `${key} is required`}
            else if(!isValidTime(value))
                output = {valid : false, error : `${key} is invalid`}
            break;
        case 'address' :
            if(value === '' || value === null || value === undefined)
                output = {valid : false, error : `${key} is required`}
            else if(value.length < 10)
                output = {valid : false, error : `${key} should be at least 10 character in length`}
            break;
        default :
            output = {valid : true, error : `${key} is valid`}
    }

    if(!output){
        output = {valid : true, error : `${key} is valid`}
    }
    return output;  
}


export const formatGetDate = (dateStr, format = 'dd-mm-yy') => {
    let date = new Date(dateStr);
    return date.getDate() + '-' + date.getMonth() + 1 + '-' + date.getFullYear() + ' ' + formatAMPM(date);
}

export const formatPostDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export const formatFinalDate = (dateVal) => {
    var newDate = new Date(dateVal);

    var sMonth = padValue(newDate.getMonth() + 1);
    var sDay = padValue(newDate.getDate());
    var sYear = newDate.getFullYear();
    var sHour = newDate.getHours();
    var sMinute = padValue(newDate.getMinutes());
    var sAMPM = "AM";

    var iHourCheck = parseInt(sHour);

    if (iHourCheck > 12) {
        sAMPM = "PM";
        sHour = iHourCheck - 12;
    }
    else if (iHourCheck === 0) {
        sHour = "12";
    }

    sHour = padValue(sHour);

    return sMonth + "-" + sDay + "-" + sYear + " " + sHour + ":" + sMinute + " " + sAMPM;
}

function padValue(value) {
    return (value < 10) ? "0" + value : value;
}

export const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }