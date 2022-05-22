int Buzzer = 3;
void setup() {
Serial.begin(9600);
pinMode(Buzzer, OUTPUT);
}

void loop() {
int value = analogRead(A1);
int knobX = analogRead(A5);
int knobY = analogRead(A4);

Serial.print("x:");
Serial.print(knobX);
Serial.print(" y:");
Serial.print(knobY);
Serial.print(" b:");
Serial.println(value);


if (value > 500 && value < 1000){
//  Serial.println("Play");
  digitalWrite(Buzzer,HIGH);
  tone(Buzzer,650);
  delay(200);
  noTone(Buzzer);
} else if (value < 500){
//  Serial.println("Erase");
  digitalWrite(Buzzer,LOW);
  tone(Buzzer,800);
  delay(200);
  noTone(Buzzer);
}


}
