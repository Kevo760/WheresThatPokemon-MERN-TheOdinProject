export const converTimeHHMMSS = (ms) => {
    let ss = ("0" + Math.floor((ms / 1000) % 60)).slice(-2);
    let mm = ("0" + Math.floor((ms / 60000) % 60)).slice(-2);
    let hh = ("0" + Math.floor((ms/ 60000 / 60) % 60)).slice(-2);

    return `${hh}:${mm}:${ss}`
}


export const converTimeMMSSMS = (time) => {
    let ms = ("0" + Math.floor((time / 10) % 100)).slice(-2);
    let ss = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    let mm = ("0" + Math.floor((time / 60000) % 60)).slice(-2);

    return `${mm}:${ss}:${ms}`
}