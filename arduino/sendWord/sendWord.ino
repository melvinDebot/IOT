void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

}

void loop() {
  if(Serial.available() > 0){
    Serial.println("Sensor received " + Serial.readString());
    delay(1000);
  }
  //Serial.println("Sensors data");
  //delay(1000);
  
  // put your main code here, to run repeatedly:

}
