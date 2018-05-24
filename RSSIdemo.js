/*
  RSSI Demo

  Continously scans for specific MAC and show RSSI value.
*/

//includes
var noble = require('./BeaconWatch/noble/index');

//variables
var allowDuplicates = true;

//discovery function
noble.on('discover', function(peripheral) {
  if (peripheral.address == '7c:2f:80:c3:79:68') {
    //debug console output
    console.log('"' + peripheral.advertisement.localName + ' MAC: ' + peripheral.address + ' Signalstaerke (RSSI): ' + peripheral.rssi + ' ' + new Date() );
  }
});

noble.on('stateChange', function(state) {
  if (state == 'poweredOn') {
    noble.startScanning([], true);
  } else {
    noble.stopScanning();
  }
});
