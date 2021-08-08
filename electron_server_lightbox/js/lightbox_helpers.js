// determine if the results are a good or bad lift
module.exports.determine_lift_status = function (dic){
  count_good = 0
  count_bad = 0
  for (let x in dic){
    if (dic[x] == 1){
      count_good += 1
    }
    else{
      count_bad +=1
    }
  }
  return ((count_good > count_bad) ? true : false)
}

// sleep function
module.exports.sleep = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// timer interval
module.exports.timer = function(duration, display){
  display.textContent = duration + "s";
  var seconds = parseInt(duration);
  let countdown = setInterval(function(){
    seconds -= 1;
    // keep the text formatting standard
    switch(seconds){
      case 9:
        display.textContent = "09s";
        break;
      case 8:
        display.textContent = "08s";
        break;
      case 7:
        display.textContent = "07s";
        break;
      case 6:
        display.textContent = "06s";
        break;
      case 5:
        display.textContent = "05s";
        break;
      case 4:
        display.textContent = "04s";
        break;
      case 3:
        display.textContent = "03s";
        break;
      case 2:
        display.textContent = "02s";
        break;
      case 1:
        display.textContent = "01s";
        break;
      case 0:
        display.textContent = "00s";
        clearInterval(countdown)
        break;
      default:
        display.textContent = seconds + "s";
        break;
    }
  }, 1000)
}
