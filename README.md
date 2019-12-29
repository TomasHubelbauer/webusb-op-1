# WebUSB OP-1

In this repository I mean to explore the WebUSB draft specification as implemented
by (only) Chrome at the current. The goal is to listen to a USB-connected OP-1
portable synthetizer and listen for MIDI messages as they travel across the USB
interface.

Unfortunately, at this moment, with Chrome 75, the WebUSB API doesn't seem to
recognize the OP-1 (or any other device I tried) so it's impossible to test
this out ATM.

## To-Do

### Try with more MIDI USB devices and figure out why it didn't work with the OP-1
