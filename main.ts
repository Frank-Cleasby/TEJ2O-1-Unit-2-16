/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Frank
 * Created on: Nov 2025
 * This program using a radio feature
*/

// variables
let distanceOfObstacle: number = 0

// cleanse
radio.setGroup(37)
basic.clearScreen()
basic.showIcon(IconNames.Giraffe)

// radio get
radio.onReceivedString(function (receivedString: string) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})

// grabs distance
while (true) {
   distanceOfObstacle = sonar.ping(
    DigitalPin.P12, 
    DigitalPin.P13, 
    PingUnit.Centimeters
    )
    if (distanceOfObstacle < 10) {
        basic.clearScreen()
        basic.showNumber(distanceOfObstacle)
        radio.sendString('Too Close bub')
        basic.pause(1000)
    } else {
    basic.clearScreen()
    basic.showNumber(distanceOfObstacle)
    radio.sendString("")
    basic.pause(1000)
    } 
}
