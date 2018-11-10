setTimeout(function () {
    window.location.href = "./setup.html"; //will redirect to your blog page (an ex: blog.html)
}, 10000);

// set up text to print, each item in array is new line
var aText = new Array(
    "U-Boot 2009.08 (Nov 15 2009 - 22:03:26)",
    " ",
    "CPU:    Xtensa test_mmuhifi_c3 at 41.6777 MHz",
    "Board:  XT-AV200: Avnet board + Xilinx LX200 FPGA + Tensilica bitstream",
    "SysRAM: 96 MB",
    "Flash: 16 MB",
    "In:    serial,",
    "Out:   serial",
    "Err:   serial",
    "MAC:    00:50:C2:13:6f:07",
    "IP:     192.168.11.105",
    "open_ethernet",
    "Autobooting in 5 seconds, press <SPACE> to stop",
   " Using open_ethernet device",
    "TFTP from server 192.168.11.55; our IP address is 192.168.11.105",
    "Filename 'uImage.xtensa-2.6.29-smp.test_mmuhifi_c3",
    "Load address: 0xd2000000",
    "Loading: #################################################################",
     "        ###############",
    "done",
    "Bytes transferred = 1161826 (11ba62 hex)",
    "Automatic boot of image at addr 0xD2000000 ...",
    "## Booting kernel from Legacy Image at d2000000 ...",
       "Image Name:   Linux-2.6.29-rc7",
    "U-Boot 2009.08 (Nov 15 2009 - 22:03:26)",
    " ",
    "CPU:    Xtensa test_mmuhifi_c3 at 41.6777 MHz",
    "Board:  XT-AV200: Avnet board + Xilinx LX200 FPGA + Tensilica bitstream",
    "SysRAM: 96 MB",
    "Flash: 16 MB",
    "In:    serial,",
    "Out:   serial",
    "Err:   serial",
    "MAC:    00:50:C2:13:6f:07",
    "IP:     192.168.11.105",
    "open_ethernet",
    "Autobooting in 5 seconds, press <SPACE> to stop",
    " Using open_ethernet device",
    "TFTP from server 192.168.11.55; our IP address is 192.168.11.105",
    "Filename 'uImage.xtensa-2.6.29-smp.test_mmuhifi_c3",
    "Load address: 0xd2000000",
    "Loading: #################################################################",
    "        ###############",
    "done",
    "Bytes transferred = 1161826 (11ba62 hex)",
    "Automatic boot of image at addr 0xD2000000 ...",
    "## Booting kernel from Legacy Image at d2000000 ...",
    "Image Name:   Linux-2.6.29-rc7",
    "U-Boot 2009.08 (Nov 15 2009 - 22:03:26)",
    " ",
    "CPU:    Xtensa test_mmuhifi_c3 at 41.6777 MHz",
    "Board:  XT-AV200: Avnet board + Xilinx LX200 FPGA + Tensilica bitstream",
    "SysRAM: 96 MB",
    "Flash: 16 MB",
    "In:    serial,",
    "Out:   serial",
    "Err:   serial",
    "MAC:    00:50:C2:13:6f:07",
    "IP:     192.168.11.105",
    "open_ethernet",
    "Autobooting in 5 seconds, press <SPACE> to stop",
    " Using open_ethernet device",
    "TFTP from server 192.168.11.55; our IP address is 192.168.11.105",
    "Filename 'uImage.xtensa-2.6.29-smp.test_mmuhifi_c3",
    "Load address: 0xd2000000",
    "Loading: #################################################################",
    "        ###############",
    "done",
    "Bytes transferred = 1161826 (11ba62 hex)",
    "Automatic boot of image at addr 0xD2000000 ...",
    "## Booting kernel from Legacy Image at d2000000 ...",
        "Image Name:   Linux-2.6.29-rc7",
    );
var iSpeed = 2; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 50; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 0);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

setTimeout(function () {
    typewriter();
 }, 1000); //will call the function after 2 secs.
