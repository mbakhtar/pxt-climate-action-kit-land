//% weight=100 color=#421C52 icon="\uf1b9"
namespace cakLand {
  // forward: Neg=1023, Pos=0; reverse: Neg=0,Pos=1023
  let M2_NEG: AnalogPin = AnalogPin.P13
  let M2_POS: AnalogPin = AnalogPin.P14
  let M1_NEG: AnalogPin = AnalogPin.P15
  let M1_POS: AnalogPin = AnalogPin.P16

  export enum BoardSide {
    //% block="left"
    LEFT,
    //% block="right"
    RIGHT
  }

  function selectPins (side: BoardSide): AnalogPin[] {
    let pos: AnalogPin, neg: AnalogPin;
    // Climate Action Kits: M2 = Right; M1 = Left
    switch (side) {
      case BoardSide.LEFT:
        neg = M1_NEG;
        pos = M1_POS;
        break;
      case BoardSide.RIGHT:
        neg = M2_NEG;
        pos = M2_POS;
        break;
    }
    return [pos, neg];
  }

  function percentToAnalog (percent: number): number {
    return Math.map( Math.abs( percent ), 0, 100, 0, 1023);
  }
  
  export function powerMotor (side: BoardSide, power: number): void {
    let [pos, neg] = selectPins(side);
    
    pins.analogWritePin(neg, percentToAnalog(Math.max(power, 0)));
    pins.analogWritePin(pos, percentToAnalog(Math.min(power, 0)));
  }
}
