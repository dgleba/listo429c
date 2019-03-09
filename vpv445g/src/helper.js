// yes
//https://stackoverflow.com/questions/43608457/how-to-import-functions-from-different-js-file-in-a-vuewebpackvue-loader-proje

// typeof module.exports !== 'undefined'

import dayjs from "dayjs";

//
// Codesandbox needs the following Syntax, exports.iuid = () => {
// in npm run sreve.. vue Uncaught ReferenceError exports is not defined
// exports.iuid = () => {
//  
export function iuid() {
  var uid = dayjs()
    .format("YYMMDD_HHmm.ss.SSSZZ-")
    .concat(parseInt(Math.random() * 10000));
  return uid;
}

// exports.updatedat = () => {
export function updatedat() {
  var upd = dayjs().format("YYMMDD_HH.mm.ss");
  return upd;
}

// export function fiuid() {
//   var uid = dayjs()
//     .format("YYMMDD_HHmm.ss.SSSZZ-")
//     .concat(parseInt(Math.random() * 10000));
//   return uid;
// };

//  Date.now()
//   .toString()
//   .concat(parseInt(Math.random() * 10000));

// no
// import * from './helper.js'
// import { fiuid } from "./helper.js";
// https://forum.vuejs.org/t/create-and-import-my-own-js-to-vue-project/30770/11
