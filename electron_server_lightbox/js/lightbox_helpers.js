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

