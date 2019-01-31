

// David Gleba tsuid ...

function tsuid() {
  // I generate the UID 

  var uid = dayjs().format('YYMMDD_HHmm.ss.SSSZZ-').concat( parseInt( Math.random()*100000 ) )

  return uid;
}