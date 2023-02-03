/// <reference path="./cak-land.ts" />

//% weight=13 color=#ffd43a icon="" block="Motor"
namespace cakLandMotor {
  /**
   *Turns the left motor at a specified speed
   */
  //% block
  //% blockId=motion_turn_left block="turn left motor at |speed: %speed"
  //% speed.min=-100 speed.max=100
  //% weight=60
  export function turnLeft(speed: number): void {
    cakLand.powerMotor(cakLand.BoardSide.LEFT, speed);
  }

  /**
   *Turns the right motor at a specified speed
   */
  //% block
  //% blockId=motion_turn_right block="turn right motor at |speed: %speed"
  //% speed.min=-100 speed.max=100
  //% weight=50
  export function turnRight(speed: number): void {
    cakLand.powerMotor(cakLand.BoardSide.RIGHT, speed);
  }

  /**
   *Stop the motors
   */
  //% block
  //% blockId=motion_stop block="stop motors"
  //% weight=45
  export function stop(): void {
    drive(0, 0);
  }

  /**
   * Control both wheels in one function.
   * Speeds range from -100 to 100.
   * Negative speeds go backwards, positive go forwards.
   */
  //% block
  //% blockId=motion_drive block="drive |left: %leftWheelSpeed|right: %rightWheelSpeed"
  //% leftWheelSpeed.min=-100 leftWheelSpeed.max=100
  //% rightWheelSpeed.min=-100 rightWheelSpeed.max=100
  //% weight=40
  export function drive(leftWheelSpeed: number, rightWheelSpeed: number): void {
    turnLeft(leftWheelSpeed)
    turnRight(rightWheelSpeed)
  }
}
