var sample = "name,josh,age,24,gender,male,race,black, name,James,age,45,gender,female,race,black"
const log = console.log

function convertToJSON(dataSample) {
    var jsonObject = {};
    var sampleArr = dataSample.split(",");
    log("array", sampleArr)
    for (let i = 0; i < sampleArr.length; i++) {
        if (i % 2 == 0) {
            pair = `{${sampleArr[i]}:${sampleArr[i + 1]}}`;
            // log(pair)
            var test = Object.assign({}, pair)
            log(test)
            // jsonObject += jsonObject??
            // jsonObject;
        }
    }
    // log("pair", jsonObject)
}

convertToJSON(sample)