import {
    Dimensions,
    Platform
} from 'react-native';
import { dateThai, dateFullThai } from "../constants";

const { width, height } = Dimensions.get('window');


export const changeDateformat = (apiDate) => {
    var date = new Date(apiDate);
    return date;
}

export const getMonthTh = (apiDate) => {
    var date = changeDateformat(apiDate);
    // console.log(date.getMonth());
    return dateThai[date.getMonth()]
}

export const getFullMonthTh = (apidate) => {
    var date = changeDateformat(apiDate);
    return getFullMonthTh[date.getMonth()]
}

export const getYearTH = (apiDate) => {
    var date = changeDateformat(apiDate);
    // console.log(date.getMonth());
    return (date.getFullYear() + 543)
}

export const getDateTh = (apiDate) => {
    var date = changeDateformat(apiDate);
    return date.getDate()
}

export const getFullTh = (apiDate) => {
    var date = changeDateformat(apiDate);
    return `${date.getDate()} ${getMonthTh(date)} ${date.getFullYear()}`
}

export const getTimeTh = (apiDate) => {
    var date = changeDateformat(apiDate);
    var localeSpecificTime = date.toLocaleTimeString();
    return localeSpecificTime.replace(/:\d+ /, ' ')
    // return localeSpecificTime.replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
}


export const isEmpty = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.addMonth = function (month) {
    var date = new Date(this.valueOf());
    date.setMonth(date.getMonth() + month);
    return date;
}

Date.prototype.addYear = function (year) {
    var date = new Date(this.valueOf());
    date.setFullYear(date.getFullYear() + year);
    return date;
}


export const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export function isIphoneX() {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimen.height === 812 || dimen.width === 812)
    );
}

