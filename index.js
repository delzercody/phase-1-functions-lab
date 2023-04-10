// Code your solution in this file!
function distanceFromHqInBlocks(block){
   if (block >= 42) {
        return block - 42
    }
    else (block < 42)
        return 42 - block
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
    let total = distanceTravelledInFeet(start, destination);
    if (total <= 400) {
        return 0
    }
  else if (total > 400 && total < 2000)
    return ((total - 400) * 0.02)
    else if (total > 2000 && total < 2500)
    return 25
    else if (total >= 2500)
    return "cannot travel that far"
}