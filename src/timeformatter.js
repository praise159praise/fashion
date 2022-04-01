export default function secondsToDhms(seconds) {
    var todayinseconds = new Date().getTime() / 1000;
    seconds = todayinseconds - Number(seconds) ;
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);

    if (d > 0 ) return (d + (d == 1 ? " day " : " days ")) 
    if(h > 0 ) return h + (h == 1 ? " hour " : " hours ") 
    if(m > 0) return m + (m == 1 ? " minutes " : " minutes ")

    return s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
}