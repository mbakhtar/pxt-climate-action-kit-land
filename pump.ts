/// <reference path="./cak-land.ts" />

//% weight=13 color=#01579b icon="" block="Pump"
namespace cakLandPump {
  /**
   * Start the pump
   */
  //% block
  //% blockId=pump_start block="start %side pump at speed %speed"
  //% speed.min=0 speed.max=100
  //% weight=45
  export function pumpStart(side: cakLand.BoardSide, speed: number): void {
    cakLand.powerMotor(side, speed);
  }

  /**
   * Stop the pump
   */
  //% block
  //% blockId=pump_stop block="stop %side pump"
  //% weight=45
  export function pumpStop(side: cakLand.BoardSide): void {
    cakLand.powerMotor(side, 0);
  }

  /**
   * Set a pump for a specified time at a specified speed.
   */
  //% block
  //% blockId=pump_duration block="run %side pump at speed %speed for %duration seconds"
  //% duration.min=0 duration.max=10
  //% speed.min=0 speed.max=100
  //% weight=45
  export function startDuration(side: cakLand.BoardSide, speed: number, duration: number): void {
    pumpStart(side, speed)
    basic.pause(duration*1000)
    pumpStop(side)
  }
}
