function convertToDMS (decimal) {

}

module.exports = convertToDMS;


// How to convert decimal degrees to degrees,minutes,seconds
// One degree (°) is equal to 60 minutes (') and equal to 3600 seconds ("):

// 1° = 60' = 3600"

// The integer degrees (d) are equal to the integer part of the decimal degrees (dd):

// d = integer(dd)

// The minutes (m) are equal to the integer part of the decimal degrees (dd) minus integer degrees (d) times 60:

// m = integer((dd - d) × 60)

// The seconds (s) are equal to the decimal degrees (dd) minus integer degrees (d) minus minutes (m) divided by 60 times 3600:

// s = (dd - d - m/60) × 3600