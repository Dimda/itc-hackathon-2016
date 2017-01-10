import { Meteor } from 'meteor/meteor';
import { Readings } from '../imports/collections/readings.js'

let getReadings = () => {
  const temperature = HTTP.get('https://api.particle.io/v1/devices/240034000847353138383138/temperature/?access_token=21f390662e7764ddde4cd7aec46829b13c38d5cc');
  const pressure = HTTP.get('https://api.particle.io/v1/devices/240034000847353138383138/pressure/?access_token=21f390662e7764ddde4cd7aec46829b13c38d5cc');
  Readings.insert({
    sensorReadings: {
      temperature: temperature.data.result,
      pressure: pressure.data.result,
    },
    createdAt: new Date(),
  });
}

Meteor.startup(() => {
  const POLL_INTERVAL = 5000;
  Meteor.setInterval(getReadings, POLL_INTERVAL);
  Meteor.publish("Readings", function(limit){
    return Readings.find({}, {
      limit: limit || 20,
      sort: { timestamp: -1 }
    });
  });
});
