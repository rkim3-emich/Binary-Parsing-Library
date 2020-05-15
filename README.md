# Binary-Parsing-Library
JavaScript functions for conversion between binary, decimal, and hex. Can handle both signed and unsigned binary and hexadecimal numbers.

## Functions
###**decToBinary(dec, signed)**
Converts decimal number to binary string.
**Parameters**
-dec: base 10 number to be converted to binary
-signed(optional): boolean to switch between signed and unsigned binary. Default is signed.
**Returns**
-string representing binary number of decimal provided. Signed or unsigned depending on signed parameter value.

###**decToHex(dec, signed)**
Converts decimal number to hexadecimal string.
**Parameters**
-dec: base 10 number to be converted to hexadecimal
-signed(optional): boolean to switch between signed and unsigned hexadecimal. Default is signed.
**Returns**
-string representing hexadecimal number of decimal provided. Signed or unsigned depending on signed parameter value.

###**binToDec(bin, signed)**
Converts binary string to decimal number.
**Parameters**
-bin: binary string to be converted to base 10
-signed(optional): boolean to switch between signed and unsigned conversion. Default is signed.
**Returns**
-deciaml conversion of binary string provided

###**binToDHex(bin)**
Converts binary string to hexadecimal string.
**Parameters**
-bin: binary string to be converted to hexadecimal string.
**Returns**
-hexidecimal string conversion of the binary string.

###**hexToBin(hex)**
Converts hexadecimal string to binary string.
**Parameters**
-hex: hexadecimal string to be converted to binary string.
**Returns**
-hexidecimal string conversion of the binary string.

###**hexToDec(hex, signed)**
Converts hexadecimal string to decimal number.
**Parameters**
-hex: hexadecimal string to be converted to base 10
-signed(optional): boolean to switch between signed and unsigned conversion. Default is signed. 
**Returns**
-decimal number represented by hexadecimal string. Signed or unsigned depending on signed parameter value.

###**binSignExtend(bin, bits)**
Extends binary string by repeating the leading bit.
**Parameters**
-bin: binary string to be sign extended.
-bits(optional): number that represents total length to extend string to. Default is 16. 
**Returns**
-sign extended binary string of binary string provided to a length of bits parameter.

###**hexSignExtend(hex, bits)**
Extends hexadecimal string by repeating the leading bit
**Parameters**
-hex: hexadecimal string to be sign extended.
-bits(optional): number that represents total length to extend string to. Default is 4. 
**Returns**
-sign extended hexadecimal string of hexadecimal string provided to a length of bits parameter.
