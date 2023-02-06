# Plants & Pollinators

## @showdialog
Add Climate Action Land Extension from the Extension drawer. 
On the Extensions page search for Inksmith or Land

## 
```blocks
cakLandTouch.getTouch()
```
## 
After adding the ``||Extension||`` create a variable. 
Go to ``||Variables||`` 
click on Make a Variable. 
Name the Variable ``||Variables:bugVisits||``

## 
Now under ``||Variables||`` ``||Variables:bugVisits||`` exists 
and three additional blocks are available.

## 
Add ``||basic:showString||`` under ``||basic:on start||`` blocks.
Add the text Downloaded to indicate the new code is transferred on to the micro:bit
```blocks
basic.showString("Downloaded")
```
## 
Add ``||Variables:set bugVisits||`` to ``||basic:on start||`` blocks
```blocks
let bugVisits = 0
basic.showString("Downloaded")
```
## 
Add ``||logic.if true||`` conditional block under the ``||basic: forever||`` loop
```blocks
let bugVisits = 0
basic.showString("Downloaded")
basic.forever(function ()
{ if (true)}

```
## 
Now change the ``||variable:bugVisits||`` by 1 everytime ``||input.buttonA||`` is pressed
```blocks
let bugvisits = 0
basic.showString("Downloaded")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        bugvisits += 1
        basic.showNumber()
    }
})
```




## 
The last step is to show the number on the micro:bit's LED display. 
Add ``||basic.showNumber||`` block and 
drag the ``||variable.bugVisits||`` and 
place it in the oval space
```blocks
let bugvisits = 0
basic.showString("Downloaded")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        bugvisits += 1
        basic.showNumber(bugvisits)
    }
})
```




```
