import { Readings } from './collections/readings.js';
Meteor.subscribe("Readings");
let latestData = Readings.find();

export const getLatestPressure = () => {

  let pressureReadings = [];
  latestData.forEach(function(doc) {
    console.log(doc.sensorReadings.pressure);
    pressureReadings.push(doc.sensorReadings.pressure);
  });
  console.log(pressureReadings);
  return pressureReadings;
}

export const getLatestTemperature = () => {

  let temperatureReadings = [];
  latestData.forEach(function(doc) {
    console.log(doc.sensorReadings.temperature);
    temperatureReadings.push(doc.sensorReadings.temperature);
  });
  console.log(temperatureReadings);
  return temperatureReadings;
  //console.log(sensorReadings);
  // for (reading in latestData) {
  //   console.log(reading._id);
  // }
  //   console.log(hourlyReadings._id);
  // }
  // return hourlyReadings;

  //console.log(latestData);
  // Meteor.subscribe("Readings");
  // let hourlyAverage = [];
  //
  // let totalHours = 0;
  // for (let hourInDay = 12; hourInDay < 23; hourInDay++) {
  //
  //   let startTime = new Date();
  //   startTime.setDate(17);
  //   startTime.setHours(hourInDay);
  //   startTime.setMinutes(0);
  //   startTime.setSeconds(0);
  //
  //   let endTime = new Date();
  //   startTime.setDate(17);
  //   endTime.setHours(hourInDay);
  //   endTime.setMinutes(59);
  //   endTime.setSeconds(59);
  //
  //   console.log(startTime);
  //   console.log(endTime);
  //
  //   hourlyReadings = Readings.find({
  //     createdAt: {
  //       $gt: startTime, $lt: endTime
  //     }
  //   });

    // totalHours += hourlyReadings.forEach(function(doc) {
    //   return Math.round(parseIntdoc.sensorReadings.temperature);
    // })
    // console.log(totalHours);

    //console.log(hourlyReadings);
    //console.log(hourlyReadings.find({}));
    // for (var i = 0; i < hourlyReadings.length; i++) {
    //   console.log(hourlyReadings._id);
    // }
    // return hourlyReadings;
  //}
}
