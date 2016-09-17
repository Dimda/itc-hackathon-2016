// This #include statement was automatically added by the Particle IDE.
#include "Adafruit_BMP085/Adafruit_BMP085.h"

Adafruit_BMP085 sensor;  // Sensor instance
double temperature = 0.0;
double pressure = 0.0;
void setup() {
    if (!sensor.begin()) {
      Serial.println("No sensor found, please check wiring!");
      while (1) {}
    }
}

void loop() {
    PublishSensorInfo();
    delay(2000);
}

// Publish Pressure, Altitude
void PublishSensorInfo(){
    temperature = sensor.readTemperature();
    pressure = sensor.readPressure() / 100.0;

    Particle.variable("temperature", &temperature, DOUBLE);
    Particle.variable("pressure", &pressure, DOUBLE);
}
