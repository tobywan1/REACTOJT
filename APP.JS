import React, { useState } from 'react';
import './styles.css';

const DropdownMenuWithInputsAndVehiclesAndSubmit = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [locationdropdown, setlocationdropdown] = useState('');
  const [locationdropdown2, setlocationdropdown2] = useState('');
  const [vehicleDropdown, setVehicleDropdown] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [price, setPrice] = useState(null);


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlelocationdropdownChange = (event) => {
    setlocationdropdown(event.target.value);
  };

  const handlelocationdropdown2Change = (event) => {
    setlocationdropdown2(event.target.value);
  };

  const handleVehicleDropdownChange = (event) => {
    setVehicleDropdown(event.target.value);
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    setVehicleDropdown(''); // Reset selected vehicle when class changes
  };

  const handleSubmit = () => {
    // Set the default price
    let calculatedPrice = 'N/A';

     // BALINTAWAK ENTRY POINT (DONE)
  if (
    selectedOption === 'option1' &&
    locationdropdown === 'locationE1' &&
    locationdropdown2 &&
    (locationdropdown2 === 'location2' ||
     locationdropdown2 === 'location3' ||
     locationdropdown2 === 'location4' ||
     locationdropdown2 === 'location5' ||
     locationdropdown2 === 'location6' ||
     locationdropdown2 === 'location7' ||
     locationdropdown2 === 'location8' ||
     locationdropdown2 === 'location9' ||
     locationdropdown2 === 'location10' ||
     locationdropdown2 === 'location11' ||
     locationdropdown2 === 'location12' ||
     locationdropdown2 === 'location13' ||
     locationdropdown2 === 'location14' ||
     locationdropdown2 === 'location15' ||
     locationdropdown2 === 'location16' ||
     locationdropdown2 === 'location17' ||
     locationdropdown2 === 'location18' ||
     locationdropdown2 === 'location19' ||
     locationdropdown2 === 'location20' ||
     locationdropdown2 === 'location21' ||
     locationdropdown2 === 'location22' ||
     locationdropdown2 === 'location23' ||
     locationdropdown2 === 'location24' ||
     locationdropdown2 === 'location25' ||
     locationdropdown2 === 'location26' ||
     locationdropdown2 === 'location27' ||
     locationdropdown2 === 'location28' ||
     locationdropdown2 === 'location29' ||
     locationdropdown2 === 'location30' ||
     locationdropdown2 === 'location31')
  ) {
    
    if (selectedClass === 'class1') {
      switch (locationdropdown2) {
        case 'location2':
        case 'location3':
        case 'location4':
        case 'location5':
        case 'location6':
        case 'location7':
          calculatedPrice = 69;
          break;
        case 'location8':
          calculatedPrice = 77;
          break;
        case 'location9':
          calculatedPrice = 84;
          break;
        case 'location10':
          calculatedPrice = 88;
          break;
        case 'location11':
          calculatedPrice = 107;
          break;
        case 'location12':
          calculatedPrice = 122;
          break;
        case 'location13':
          calculatedPrice = 128;
          break;
        case 'location14':
          calculatedPrice = 156;
          break;
        case 'location15':
          calculatedPrice = 203;
          break;
        case 'location16':
          calculatedPrice = 239;
          break;
        case 'location17':
          calculatedPrice = 268;
          break;
        case 'location18':
          calculatedPrice = 302;
          break;
        case 'location19':
          calculatedPrice = 310;
          break;
        case 'location20':
          calculatedPrice = 332;
          break;
        case 'location21':
          calculatedPrice = 656;
          break;
        case 'location22':
          calculatedPrice = 560;
          break;
        case 'location23':
          calculatedPrice = 464;
          break;
        case 'location24':
          calculatedPrice = 393;
          break;
        case 'location25':
          calculatedPrice = 341;
          break;
        case 'location26':
          calculatedPrice = 332;
          break;
        case 'location27':
          calculatedPrice = 353;
          break;
        case 'location28':
          calculatedPrice = 361;
          break;
        case 'location29':
          calculatedPrice = 414;
          break;
        case 'location30':
          calculatedPrice = 487;
          break;
        case 'location31':
          calculatedPrice = 512;
          break;
        default:
          break;
      }
    } else if (selectedClass === 'class2') {
      switch (locationdropdown2) {
        case 'location2':
        case 'location3':
        case 'location4':
        case 'location5':
        case 'location6':
        case 'location7':
          calculatedPrice = 172;
          break;
        case 'location8':
          calculatedPrice = 193;
          break;
        case 'location9':
          calculatedPrice = 210;
          break;
        case 'location10':
          calculatedPrice = 219;
          break;
        case 'location11':
          calculatedPrice = 267;
          break;
        case 'location12':
          calculatedPrice = 306;
          break;
        case 'location13':
          calculatedPrice = 320;
          break;
        case 'location14':
          calculatedPrice = 389;
          break;
        case 'location15':
          calculatedPrice = 507;
          break;
        case 'location16':
          calculatedPrice = 597;
          break;
        case 'location17':
          calculatedPrice = 669;
          break;
        case 'location18':
          calculatedPrice = 755;
          break;
        case 'location19':
          calculatedPrice = 775;
          break;
        case 'location20':
          calculatedPrice = 829;
          break;
        case 'location21':
          calculatedPrice = 1494;
          break;
        case 'location22':
          calculatedPrice = 1284;
          break;
        case 'location23':
          calculatedPrice = 1092;
          break;
        case 'location24':
          calculatedPrice = 952;
          break;
        case 'location25':
          calculatedPrice = 846;
          break;
        case 'location26':
          calculatedPrice = 829;
          break;
        case 'location27':
          calculatedPrice = 871;
          break;
        case 'location28':
          calculatedPrice = 887;
          break;
        case 'location29':
          calculatedPrice = 994;
          break;
        case 'location30':
          calculatedPrice = 1138;
          break;
        case 'location31':
          calculatedPrice = 1188;
          break;
        default:
          break;
      }
    } else if (selectedClass === 'class3') {
      switch (locationdropdown2) {
        case 'location2':
        case 'location3':
        case 'location4':
        case 'location5':
        case 'location6':
        case 'location7':
          calculatedPrice = 206;
          break;
        case 'location8':
          calculatedPrice = 232;
          break;
        case 'location9':
          calculatedPrice = 252;
          break;
        case 'location10':
          calculatedPrice = 263;
          break;
        case 'location11':
          calculatedPrice = 321;
          break;
        case 'location12':
          calculatedPrice = 367;
          break;
        case 'location13':
          calculatedPrice = 383;
          break;
        case 'location14':
          calculatedPrice = 467;
          break;
        case 'location15':
          calculatedPrice = 609;
          break;
        case 'location16':
          calculatedPrice = 717;
          break;
        case 'location17':
          calculatedPrice = 803;
          break;
        case 'location18':
          calculatedPrice = 905;
          break;
        case 'location19':
          calculatedPrice = 930;
          break;
        case 'location20':
          calculatedPrice = 995;
          break;
        case 'location21':
          calculatedPrice = 1967;
          break;
        case 'location22':
          calculatedPrice = 1678;
          break;
        case 'location23':
          calculatedPrice = 1390;
          break;
        case 'location24':
          calculatedPrice = 1179;
          break;
        case 'location25':
          calculatedPrice = 1021;
          break;
        case 'location26':
          calculatedPrice = 995;
          break;
        case 'location27':
          calculatedPrice = 1059;
          break;
        case 'location28':
          calculatedPrice = 1082;
          break;
        case 'location29':
          calculatedPrice = 1242;
          break;
        case 'location30':
          calculatedPrice = 1459;
          break;
        case 'location31':
          calculatedPrice = 1534;
          break;
        default:
          break;
      }
    }
  }


       // MINDANAO AVENUE ENTRY POINT (DONE)
       if (
        selectedOption === 'option1' &&
        locationdropdown === 'locationA' &&
        locationdropdown2 &&
        (locationdropdown2 === 'location1' ||
         locationdropdown2 === 'location3' ||
         locationdropdown2 === 'location4' ||
         locationdropdown2 === 'location5' ||
         locationdropdown2 === 'location6' ||
         locationdropdown2 === 'location7' ||
         locationdropdown2 === 'location8' ||
         locationdropdown2 === 'location9' ||
         locationdropdown2 === 'location10' ||
         locationdropdown2 === 'location11' ||
         locationdropdown2 === 'location12' ||
         locationdropdown2 === 'location13' ||
         locationdropdown2 === 'location14' ||
         locationdropdown2 === 'location15' ||
         locationdropdown2 === 'location16' ||
         locationdropdown2 === 'location17' ||
         locationdropdown2 === 'location18' ||
         locationdropdown2 === 'location19' ||
         locationdropdown2 === 'location20' ||
         locationdropdown2 === 'location21' ||
         locationdropdown2 === 'location22' ||
         locationdropdown2 === 'location23' ||
         locationdropdown2 === 'location24' ||
         locationdropdown2 === 'location25' ||
         locationdropdown2 === 'location26' ||
         locationdropdown2 === 'location27' ||
         locationdropdown2 === 'location28' ||
         locationdropdown2 === 'location29' ||
         locationdropdown2 === 'location30' ||
         locationdropdown2 === 'location31')
      ) {
        if (selectedClass === 'class1') {
          switch (locationdropdown2) {
            case 'location1':
            case 'location3':
            case 'location4':
            case 'location5':
            case 'location6':
            case 'location7':
              calculatedPrice = 69;
              break;
            case 'location8':
              calculatedPrice = 77;
              break;
            case 'location9':
              calculatedPrice = 84;
              break;
            case 'location10':
              calculatedPrice = 88;
              break;
            case 'location11':
              calculatedPrice = 107;
              break;
            case 'location12':
              calculatedPrice = 122;
              break;
            case 'location13':
              calculatedPrice = 128;
              break;
            case 'location14':
              calculatedPrice = 156;
              break;
            case 'location15':
              calculatedPrice = 203;
              break;
            case 'location16':
              calculatedPrice = 239;
              break;
            case 'location17':
              calculatedPrice = 268;
              break;
            case 'location18':
              calculatedPrice = 302;
              break;
            case 'location19':
              calculatedPrice = 310;
              break;
            case 'location20':
              calculatedPrice = 332;
              break;
            case 'location21':
              calculatedPrice = 656;
              break;
            case 'location22':
              calculatedPrice = 560;
              break;
            case 'location23':
              calculatedPrice = 464;
              break;
            case 'location24':
              calculatedPrice = 393;
              break;
            case 'location25':
              calculatedPrice = 341;
              break;
            case 'location26':
              calculatedPrice = 332;
              break;
            case 'location27':
              calculatedPrice = 353;
              break;
            case 'location28':
              calculatedPrice = 361;
              break;
            case 'location29':
              calculatedPrice = 414;
              break;
            case 'location30':
              calculatedPrice = 487;
              break;
            case 'location31':
              calculatedPrice = 512;
              break;
            default:
              break;
          }
        } else if (selectedClass === 'class2') {
          switch (locationdropdown2) {
            case 'location1':
            case 'location3':
            case 'location4':
            case 'location5':
            case 'location6':
            case 'location7':
              calculatedPrice = 172;
              break;
            case 'location8':
              calculatedPrice = 193;
              break;
            case 'location9':
              calculatedPrice = 210;
              break;
            case 'location10':
              calculatedPrice = 219;
              break;
            case 'location11':
              calculatedPrice = 267;
              break;
            case 'location12':
              calculatedPrice = 306;
              break;
            case 'location13':
              calculatedPrice = 320;
              break;
            case 'location14':
              calculatedPrice = 389;
              break;
            case 'location15':
              calculatedPrice = 507;
              break;
            case 'location16':
              calculatedPrice = 597;
              break;
            case 'location17':
              calculatedPrice = 669;
              break;
            case 'location18':
              calculatedPrice = 755;
              break;
            case 'location19':
              calculatedPrice = 775;
              break;
            case 'location20':
              calculatedPrice = 829;
              break;
            case 'location21':
              calculatedPrice = 1494;
              break;
            case 'location22':
              calculatedPrice = 1284;
              break;
            case 'location23':
              calculatedPrice = 1092;
              break;
            case 'location24':
              calculatedPrice = 952;
              break;
            case 'location25':
              calculatedPrice = 846;
              break;
            case 'location26':
              calculatedPrice = 829;
              break;
            case 'location27':
              calculatedPrice = 871;
              break;
            case 'location28':
              calculatedPrice = 887;
              break;
            case 'location29':
              calculatedPrice = 994;
              break;
            case 'location30':
              calculatedPrice = 1138;
              break;
            case 'location31':
              calculatedPrice = 1188;
              break;
            default:
              break;
          }
        } else if (selectedClass === 'class3') {
          switch (locationdropdown2) {
            case 'location1':
            case 'location3':
            case 'location4':
            case 'location5':
            case 'location6':
            case 'location7':
              calculatedPrice = 206;
              break;
            case 'location8':
              calculatedPrice = 232;
              break;
            case 'location9':
              calculatedPrice = 252;
              break;
            case 'location10':
              calculatedPrice = 263;
              break;
            case 'location11':
              calculatedPrice = 321;
              break;
            case 'location12':
              calculatedPrice = 367;
              break;
            case 'location13':
              calculatedPrice = 383;
              break;
            case 'location14':
              calculatedPrice = 467;
              break;
            case 'location15':
              calculatedPrice = 609;
              break;
            case 'location16':
              calculatedPrice = 717;
              break;
            case 'location17':
              calculatedPrice = 803;
              break;
            case 'location18':
              calculatedPrice = 905;
              break;
            case 'location19':
              calculatedPrice = 930;
              break;
            case 'location20':
              calculatedPrice = 995;
              break;
            case 'location21':
              calculatedPrice = 1967;
              break;
            case 'location22':
              calculatedPrice = 1678;
              break;
            case 'location23':
              calculatedPrice = 1390;
              break;
            case 'location24':
              calculatedPrice = 1179;
              break;
            case 'location25':
              calculatedPrice = 1021;
              break;
            case 'location26':
              calculatedPrice = 995;
              break;
            case 'location27':
              calculatedPrice = 1059;
              break;
            case 'location28':
              calculatedPrice = 1082;
              break;
            case 'location29':
              calculatedPrice = 1242;
              break;
            case 'location31':
              calculatedPrice = 1459;
              break;
            case 'location30':
              calculatedPrice = 1534;
              break;
            default:
              break;
          }
        }
      }



             // KARUHATAN ENTRY POINT (DONE)
             if (
              selectedOption === 'option1' &&
              locationdropdown === 'locationB' &&
              locationdropdown2 &&
              (locationdropdown2 === 'location1' ||
               locationdropdown2 === 'location2' ||
               locationdropdown2 === 'location4' ||
               locationdropdown2 === 'location5' ||
               locationdropdown2 === 'location6' ||
               locationdropdown2 === 'location7' ||
               locationdropdown2 === 'location8' ||
               locationdropdown2 === 'location9' ||
               locationdropdown2 === 'location10' ||
               locationdropdown2 === 'location11' ||
               locationdropdown2 === 'location12' ||
               locationdropdown2 === 'location13' ||
               locationdropdown2 === 'location14' ||
               locationdropdown2 === 'location15' ||
               locationdropdown2 === 'location16' ||
               locationdropdown2 === 'location17' ||
               locationdropdown2 === 'location18' ||
               locationdropdown2 === 'location19' ||
               locationdropdown2 === 'location20' ||
               locationdropdown2 === 'location21' ||
               locationdropdown2 === 'location22' ||
               locationdropdown2 === 'location23' ||
               locationdropdown2 === 'location24' ||
               locationdropdown2 === 'location25' ||
               locationdropdown2 === 'location26' ||
               locationdropdown2 === 'location27' ||
               locationdropdown2 === 'location28' ||
               locationdropdown2 === 'location29' ||
               locationdropdown2 === 'location30' ||
               locationdropdown2 === 'location31')
            ) {
              if (selectedClass === 'class1') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                  case 'location7':
                    calculatedPrice = 69;
                    break;
                  case 'location8':
                    calculatedPrice = 77;
                    break;
                  case 'location9':
                    calculatedPrice = 84;
                    break;
                  case 'location10':
                    calculatedPrice = 88;
                    break;
                  case 'location11':
                    calculatedPrice = 107;
                    break;
                  case 'location12':
                    calculatedPrice = 122;
                    break;
                  case 'location13':
                    calculatedPrice = 128;
                    break;
                  case 'location14':
                    calculatedPrice = 156;
                    break;
                  case 'location15':
                    calculatedPrice = 203;
                    break;
                  case 'location16':
                    calculatedPrice = 239;
                    break;
                  case 'location17':
                    calculatedPrice = 268;
                    break;
                  case 'location18':
                    calculatedPrice = 302;
                    break;
                  case 'location19':
                    calculatedPrice = 310;
                    break;
                  case 'location20':
                    calculatedPrice = 332;
                    break;
                  case 'location21':
                    calculatedPrice = 656;
                    break;
                  case 'location22':
                    calculatedPrice = 560;
                    break;
                  case 'location23':
                    calculatedPrice = 464;
                    break;
                  case 'location24':
                    calculatedPrice = 393;
                    break;
                  case 'location25':
                    calculatedPrice = 341;
                    break;
                  case 'location26':
                    calculatedPrice = 332;
                    break;
                  case 'location27':
                    calculatedPrice = 353;
                    break;
                  case 'location28':
                    calculatedPrice = 361;
                    break;
                  case 'location29':
                    calculatedPrice = 414;
                    break;
                  case 'location30':
                    calculatedPrice = 487;
                    break;
                  case 'location31':
                    calculatedPrice = 512;
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class2') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                  case 'location7':
                    calculatedPrice = 172;
                    break;
                  case 'location8':
                    calculatedPrice = 193;
                    break;
                  case 'location9':
                    calculatedPrice = 210;
                    break;
                  case 'location10':
                    calculatedPrice = 219;
                    break;
                  case 'location11':
                    calculatedPrice = 267;
                    break;
                  case 'location12':
                    calculatedPrice = 306;
                    break;
                  case 'location13':
                    calculatedPrice = 320;
                    break;
                  case 'location14':
                    calculatedPrice = 389;
                    break;
                  case 'location15':
                    calculatedPrice = 507;
                    break;
                  case 'location16':
                    calculatedPrice = 597;
                    break;
                  case 'location17':
                    calculatedPrice = 669;
                    break;
                  case 'location18':
                    calculatedPrice = 755;
                    break;
                  case 'location19':
                    calculatedPrice = 775;
                    break;
                  case 'location20':
                    calculatedPrice = 829;
                    break;
                  case 'location21':
                    calculatedPrice = 1494;
                    break;
                  case 'location22':
                    calculatedPrice = 1284;
                    break;
                  case 'location23':
                    calculatedPrice = 1092;
                    break;
                  case 'location24':
                    calculatedPrice = 952;
                    break;
                  case 'location25':
                    calculatedPrice = 846;
                    break;
                  case 'location26':
                    calculatedPrice = 829;
                    break;
                  case 'location27':
                    calculatedPrice = 871;
                    break;
                  case 'location28':
                    calculatedPrice = 887;
                    break;
                  case 'location29':
                    calculatedPrice = 994;
                    break;
                  case 'location30':
                    calculatedPrice = 1138;
                    break;
                  case 'location31':
                    calculatedPrice = 1188;
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class3') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                  case 'location7':
                    calculatedPrice = 206;
                    break;
                  case 'location8':
                    calculatedPrice = 232;
                    break;
                  case 'location9':
                    calculatedPrice = 252;
                    break;
                  case 'location10':
                    calculatedPrice = 263;
                    break;
                  case 'location11':
                    calculatedPrice = 321;
                    break;
                  case 'location12':
                    calculatedPrice = 367;
                    break;
                  case 'location13':
                    calculatedPrice = 383;
                    break;
                  case 'location14':
                    calculatedPrice = 467;
                    break;
                  case 'location15':
                    calculatedPrice = 609;
                    break;
                  case 'location16':
                    calculatedPrice = 717;
                    break;
                  case 'location17':
                    calculatedPrice = 803;
                    break;
                  case 'location18':
                    calculatedPrice = 905;
                    break;
                  case 'location19':
                    calculatedPrice = 930;
                    break;
                  case 'location20':
                    calculatedPrice = 995;
                    break;
                  case 'location21':
                    calculatedPrice = 1967;
                    break;
                  case 'location22':
                    calculatedPrice = 1678;
                    break;
                  case 'location23':
                    calculatedPrice = 1390;
                    break;
                  case 'location24':
                    calculatedPrice = 1179;
                    break;
                  case 'location25':
                    calculatedPrice = 1021;
                    break;
                  case 'location26':
                    calculatedPrice = 995;
                    break;
                  case 'location27':
                    calculatedPrice = 1059;
                    break;
                  case 'location28':
                    calculatedPrice = 1082;
                    break;
                  case 'location29':
                    calculatedPrice = 1242;
                    break;
                  case 'location30':
                    calculatedPrice = 1459;
                    break;
                  case 'location31':
                    calculatedPrice = 1534;
                    break;
                  default:
                    break;
                }
              }
            }


             // VALENZUELA ENTRY POINT (DONE)
             if (
              selectedOption === 'option1' &&
              locationdropdown === 'locationC' &&
              locationdropdown2 &&
              (locationdropdown2 === 'location1' ||
               locationdropdown2 === 'location2' ||
               locationdropdown2 === 'location3' ||
               locationdropdown2 === 'location5' ||
               locationdropdown2 === 'location6' ||
               locationdropdown2 === 'location7' ||
               locationdropdown2 === 'location8' ||
               locationdropdown2 === 'location9' ||
               locationdropdown2 === 'location10' ||
               locationdropdown2 === 'location11' ||
               locationdropdown2 === 'location12' ||
               locationdropdown2 === 'location13' ||
               locationdropdown2 === 'location14' ||
               locationdropdown2 === 'location15' ||
               locationdropdown2 === 'location16' ||
               locationdropdown2 === 'location17' ||
               locationdropdown2 === 'location18' ||
               locationdropdown2 === 'location19' ||
               locationdropdown2 === 'location20' ||
               locationdropdown2 === 'location21' ||
               locationdropdown2 === 'location22' ||
               locationdropdown2 === 'location23' ||
               locationdropdown2 === 'location24' ||
               locationdropdown2 === 'location25' ||
               locationdropdown2 === 'location26' ||
               locationdropdown2 === 'location27' ||
               locationdropdown2 === 'location28' ||
               locationdropdown2 === 'location29' ||
               locationdropdown2 === 'location30' ||
               locationdropdown2 === 'location31')
            ) {
              if (selectedClass === 'class1') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location5':
                  case 'location6':
                  case 'location7':
                    calculatedPrice = 69;
                    break;
                  case 'location8':
                    calculatedPrice = 77;
                    break;
                  case 'location9':
                    calculatedPrice = 84;
                    break;
                  case 'location10':
                    calculatedPrice = 88;
                    break;
                  case 'location11':
                    calculatedPrice = 107;
                    break;
                  case 'location12':
                    calculatedPrice = 122;
                    break;
                  case 'location13':
                    calculatedPrice = 128;
                    break;
                  case 'location14':
                    calculatedPrice = 156;
                    break;
                  case 'location15':
                    calculatedPrice = 203;
                    break;
                  case 'location16':
                    calculatedPrice = 239;
                    break;
                  case 'location17':
                    calculatedPrice = 268;
                    break;
                  case 'location18':
                    calculatedPrice = 302;
                    break;
                  case 'location19':
                    calculatedPrice = 310;
                    break;
                  case 'location20':
                    calculatedPrice = 332;
                    break;
                  case 'location21':
                    calculatedPrice = 656;
                    break;
                  case 'location22':
                    calculatedPrice = 560;
                    break;
                  case 'location23':
                    calculatedPrice = 464;
                    break;
                  case 'location24':
                    calculatedPrice = 393;
                    break;
                  case 'location25':
                    calculatedPrice = 341;
                    break;
                  case 'location26':
                    calculatedPrice = 332;
                    break;
                  case 'location27':
                    calculatedPrice = 353;
                    break;
                  case 'location28':
                    calculatedPrice = 361;
                    break;
                  case 'location29':
                    calculatedPrice = 414;
                    break;
                  case 'location30':
                    calculatedPrice = 487;
                    break;
                  case 'location31':
                    calculatedPrice = 512;
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class2') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location5':
                  case 'location6':
                  case 'location7':
                    calculatedPrice = 172;
                    break;
                  case 'location8':
                    calculatedPrice = 193;
                    break;
                  case 'location9':
                    calculatedPrice = 210;
                    break;
                  case 'location10':
                    calculatedPrice = 219;
                    break;
                  case 'location11':
                    calculatedPrice = 267;
                    break;
                  case 'location12':
                    calculatedPrice = 306;
                    break;
                  case 'location13':
                    calculatedPrice = 320;
                    break;
                  case 'location14':
                    calculatedPrice = 389;
                    break;
                  case 'location15':
                    calculatedPrice = 507;
                    break;
                  case 'location16':
                    calculatedPrice = 597;
                    break;
                  case 'location17':
                    calculatedPrice = 669;
                    break;
                  case 'location18':
                    calculatedPrice = 755;
                    break;
                  case 'location19':
                    calculatedPrice = 775;
                    break;
                  case 'location20':
                    calculatedPrice = 829;
                    break;
                  case 'location21':
                    calculatedPrice = 1494;
                    break;
                  case 'location22':
                    calculatedPrice = 1284;
                    break;
                  case 'location23':
                    calculatedPrice = 1092;
                    break;
                  case 'location24':
                    calculatedPrice = 952;
                    break;
                  case 'location25':
                    calculatedPrice = 846;
                    break;
                  case 'location26':
                    calculatedPrice = 829;
                    break;
                  case 'location27':
                    calculatedPrice = 871;
                    break;
                  case 'location28':
                    calculatedPrice = 887;
                    break;
                  case 'location29':
                    calculatedPrice = 994;
                    break;
                  case 'location30':
                    calculatedPrice = 1138;
                    break;
                  case 'location31':
                    calculatedPrice = 1188;
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class3') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location5':
                  case 'location6':
                  case 'location7':
                    calculatedPrice = 206;
                    break;
                  case 'location8':
                    calculatedPrice = 232;
                    break;
                  case 'location9':
                    calculatedPrice = 252;
                    break;
                  case 'location10':
                    calculatedPrice = 263;
                    break;
                  case 'location11':
                    calculatedPrice = 321;
                    break;
                  case 'location12':
                    calculatedPrice = 367;
                    break;
                  case 'location13':
                    calculatedPrice = 383;
                    break;
                  case 'location14':
                    calculatedPrice = 467;
                    break;
                  case 'location15':
                    calculatedPrice = 609;
                    break;
                  case 'location16':
                    calculatedPrice = 717;
                    break;
                  case 'location17':
                    calculatedPrice = 803;
                    break;
                  case 'location18':
                    calculatedPrice = 905;
                    break;
                  case 'location19':
                    calculatedPrice = 930;
                    break;
                  case 'location20':
                    calculatedPrice = 995;
                    break;
                  case 'location21':
                    calculatedPrice = 1967;
                    break;
                  case 'location22':
                    calculatedPrice = 1678;
                    break;
                  case 'location23':
                    calculatedPrice = 1390;
                    break;
                  case 'location24':
                    calculatedPrice = 1179;
                    break;
                  case 'location25':
                    calculatedPrice = 1021;
                    break;
                  case 'location26':
                    calculatedPrice = 995;
                    break;
                  case 'location27':
                    calculatedPrice = 1059;
                    break;
                  case 'location28':
                    calculatedPrice = 1082;
                    break;
                  case 'location29':
                    calculatedPrice = 1242;
                    break;
                  case 'location30':
                    calculatedPrice = 1459;
                    break;
                  case 'location31':
                    calculatedPrice = 1534;
                    break;
                  default:
                    break;
                }
              }
            }


             // LAWANG BATO ENTRY POINT (DONE)
             if (
              selectedOption === 'option1' &&
              locationdropdown === 'locationD' &&
              locationdropdown2 &&
              (locationdropdown2 === 'location1' ||
               locationdropdown2 === 'location2' ||
               locationdropdown2 === 'location3' ||
               locationdropdown2 === 'location4' ||
               locationdropdown2 === 'location6' ||
               locationdropdown2 === 'location7' ||
               locationdropdown2 === 'location8' ||
               locationdropdown2 === 'location9' ||
               locationdropdown2 === 'location10' ||
               locationdropdown2 === 'location11' ||
               locationdropdown2 === 'location12' ||
               locationdropdown2 === 'location13' ||
               locationdropdown2 === 'location14' ||
               locationdropdown2 === 'location15' ||
               locationdropdown2 === 'location16' ||
               locationdropdown2 === 'location17' ||
               locationdropdown2 === 'location18' ||
               locationdropdown2 === 'location19' ||
               locationdropdown2 === 'location20' ||
               locationdropdown2 === 'location21' ||
               locationdropdown2 === 'location22' ||
               locationdropdown2 === 'location23' ||
               locationdropdown2 === 'location24' ||
               locationdropdown2 === 'location25' ||
               locationdropdown2 === 'location26' ||
               locationdropdown2 === 'location27' ||
               locationdropdown2 === 'location28' ||
               locationdropdown2 === 'location29' ||
               locationdropdown2 === 'location30' ||
               locationdropdown2 === 'location31')
            ) {
              if (selectedClass === 'class1') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                    calculatedPrice = 69;
                    break;
                    case 'location6':
                      case 'location7':
                        case 'location6':
                          case 'location7':
                      case 'location8':
                      case 'location9':
                      case 'location10':
                      case 'location11':
                      case 'location12':
                      case 'location13':
                      case 'location14':
                      case 'location15':
                      case 'location16':
                      case 'location17':
                      case 'location18':
                      case 'location19':
                      case 'location20':
                      case 'location21':
                      case 'location22':
                      case 'location23':
                      case 'location24':
                      case 'location25':
                      case 'location26':
                      case 'location27':
                      case 'location28':
                      case 'location29':
                      case 'location30':
                      case 'location31':
                        calculatedPrice = 'NO EXIT';
                  default:
                    break;
                }
              } else if (selectedClass === 'class2') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location6':
                  case 'location7':
                    calculatedPrice = 172;
                    break;
                    case 'location6':
                      case 'location7':
                        case 'location6':
                          case 'location7':
                      case 'location8':
                      case 'location9':
                      case 'location10':
                      case 'location11':
                      case 'location12':
                      case 'location13':
                      case 'location14':
                      case 'location15':
                      case 'location16':
                      case 'location17':
                      case 'location18':
                      case 'location19':
                      case 'location20':
                      case 'location21':
                      case 'location22':
                      case 'location23':
                      case 'location24':
                      case 'location25':
                      case 'location26':
                      case 'location27':
                      case 'location28':
                      case 'location29':
                      case 'location30':
                      case 'location31':
                        calculatedPrice = 'NO EXIT';
                  default:
                    break;
                }
              } else if (selectedClass === 'class3') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                    calculatedPrice = 206;
                    break;
                  case 'location6':
                  case 'location7':
                    case 'location6':
                      case 'location7':
                  case 'location8':
                  case 'location9':
                  case 'location10':
                  case 'location11':
                  case 'location12':
                  case 'location13':
                  case 'location14':
                  case 'location15':
                  case 'location16':
                  case 'location17':
                  case 'location18':
                  case 'location19':
                  case 'location20':
                  case 'location21':
                  case 'location22':
                  case 'location23':
                  case 'location24':
                  case 'location25':
                  case 'location26':
                  case 'location27':
                  case 'location28':
                  case 'location29':
                  case 'location30':
                  case 'location31':
                    calculatedPrice = 'NO EXIT';
                    break;
                  default:
                    break;
                }
              }
            }




 // MEYCAUAYAN ENTRY POINT (DONE)
 if (
  selectedOption === 'option1' &&
  locationdropdown === 'locationE' &&
  locationdropdown2 &&
  (locationdropdown2 === 'location1' ||
   locationdropdown2 === 'location2' ||
   locationdropdown2 === 'location3' ||
   locationdropdown2 === 'location4' ||
   locationdropdown2 === 'location5' ||
   locationdropdown2 === 'location7' ||
   locationdropdown2 === 'location8' ||
   locationdropdown2 === 'location9' ||
   locationdropdown2 === 'location10' ||
   locationdropdown2 === 'location11' ||
   locationdropdown2 === 'location12' ||
   locationdropdown2 === 'location13' ||
   locationdropdown2 === 'location14' ||
   locationdropdown2 === 'location15' ||
   locationdropdown2 === 'location16' ||
   locationdropdown2 === 'location17' ||
   locationdropdown2 === 'location18' ||
   locationdropdown2 === 'location19' ||
   locationdropdown2 === 'location20' ||
   locationdropdown2 === 'location21' ||
   locationdropdown2 === 'location22' ||
   locationdropdown2 === 'location23' ||
   locationdropdown2 === 'location24' ||
   locationdropdown2 === 'location25' ||
   locationdropdown2 === 'location26' ||
   locationdropdown2 === 'location27' ||
   locationdropdown2 === 'location28' ||
   locationdropdown2 === 'location29' ||
   locationdropdown2 === 'location30' ||
   locationdropdown2 === 'location31')
) {
  if (selectedClass === 'class1') {
    switch (locationdropdown2) {
      case 'location1':
      case 'location2':
      case 'location3':
      case 'location4':
      case 'location7':
        calculatedPrice = 69;
        break;
        case 'location5':
          calculatedPrice = 'NO EXIT';
          break;
      case 'location8':
        calculatedPrice = 77;
        break;
      case 'location9':
        calculatedPrice = 84;
        break;
      case 'location10':
        calculatedPrice = 88;
        break;
      case 'location11':
        calculatedPrice = 107;
        break;
      case 'location12':
        calculatedPrice = 122;
        break;
      case 'location13':
        calculatedPrice = 128;
        break;
      case 'location14':
        calculatedPrice = 156;
        break;
      case 'location15':
        calculatedPrice = 203;
        break;
      case 'location16':
        calculatedPrice = 239;
        break;
      case 'location17':
        calculatedPrice = 268;
        break;
      case 'location18':
        calculatedPrice = 302;
        break;
      case 'location19':
        calculatedPrice = 310;
        break;
      case 'location20':
        calculatedPrice = 332;
        break;
      case 'location21':
        calculatedPrice = 656;
        break;
      case 'location22':
        calculatedPrice = 560;
        break;
      case 'location23':
        calculatedPrice = 464;
        break;
      case 'location24':
        calculatedPrice = 393;
        break;
      case 'location25':
        calculatedPrice = 341;
        break;
      case 'location26':
        calculatedPrice = 332;
        break;
      case 'location27':
        calculatedPrice = 353;
        break;
      case 'location28':
        calculatedPrice = 361;
        break;
      case 'location29':
        calculatedPrice = 414;
        break;
      case 'location30':
        calculatedPrice = 487;
        break;
      case 'location31':
        calculatedPrice = 512;
        break;
      default:
        break;
    }
  } else if (selectedClass === 'class2') {
    switch (locationdropdown2) {
      case 'location1':
      case 'location2':
      case 'location3':
      case 'location4':
      case 'location7':
        calculatedPrice = 172;
        break;
        case 'location5':
          calculatedPrice = 'NO EXIT';
          break;
      case 'location8':
        calculatedPrice = 193;
        break;
      case 'location9':
        calculatedPrice = 210;
        break;
      case 'location10':
        calculatedPrice = 219;
        break;
      case 'location11':
        calculatedPrice = 267;
        break;
      case 'location12':
        calculatedPrice = 306;
        break;
      case 'location13':
        calculatedPrice = 320;
        break;
      case 'location14':
        calculatedPrice = 389;
        break;
      case 'location15':
        calculatedPrice = 507;
        break;
      case 'location16':
        calculatedPrice = 597;
        break;
      case 'location17':
        calculatedPrice = 669;
        break;
      case 'location18':
        calculatedPrice = 755;
        break;
      case 'location19':
        calculatedPrice = 775;
        break;
      case 'location20':
        calculatedPrice = 829;
        break;
      case 'location21':
        calculatedPrice = 1494;
        break;
      case 'location22':
        calculatedPrice = 1284;
        break;
      case 'location23':
        calculatedPrice = 1092;
        break;
      case 'location24':
        calculatedPrice = 952;
        break;
      case 'location25':
        calculatedPrice = 846;
        break;
      case 'location26':
        calculatedPrice = 829;
        break;
      case 'location27':
        calculatedPrice = 871;
        break;
      case 'location28':
        calculatedPrice = 887;
        break;
      case 'location29':
        calculatedPrice = 994;
        break;
      case 'location30':
        calculatedPrice = 1138;
        break;
      case 'location31':
        calculatedPrice = 1188;
        break;
      default:
        break;
    }
  } else if (selectedClass === 'class3') {
    switch (locationdropdown2) {
      case 'location1':
      case 'location2':
      case 'location3':
      case 'location4':
      case 'location7':
        calculatedPrice = 206;
        break;
        case 'location5':
          calculatedPrice = 'NO EXIT';
          break;
      case 'location8':
        calculatedPrice = 232;
        break;
      case 'location9':
        calculatedPrice = 252;
        break;
      case 'location10':
        calculatedPrice = 263;
        break;
      case 'location11':
        calculatedPrice = 321;
        break;
      case 'location12':
        calculatedPrice = 367;
        break;
      case 'location13':
        calculatedPrice = 383;
        break;
      case 'location14':
        calculatedPrice = 467;
        break;
      case 'location15':
        calculatedPrice = 609;
        break;
      case 'location16':
        calculatedPrice = 717;
        break;
      case 'location17':
        calculatedPrice = 803;
        break;
      case 'location18':
        calculatedPrice = 905;
        break;
      case 'location19':
        calculatedPrice = 930;
        break;
      case 'location20':
        calculatedPrice = 995;
        break;
      case 'location21':
        calculatedPrice = 1967;
        break;
      case 'location22':
        calculatedPrice = 1678;
        break;
      case 'location23':
        calculatedPrice = 1390;
        break;
      case 'location24':
        calculatedPrice = 1179;
        break;
      case 'location25':
        calculatedPrice = 1021;
        break;
      case 'location26':
        calculatedPrice = 995;
        break;
      case 'location27':
        calculatedPrice = 1059;
        break;
      case 'location28':
        calculatedPrice = 1082;
        break;
      case 'location29':
        calculatedPrice = 1242;
        break;
      case 'location30':
        calculatedPrice = 1459;
        break;
      case 'location31':
        calculatedPrice = 1534;
        break;
      default:
        break;
    }
  }
}



// MARILAO ENTRY POINT (DONE)
if (
  selectedOption === 'option1' &&
  locationdropdown === 'locationF' &&
  locationdropdown2 &&
  (locationdropdown2 === 'location1' ||
   locationdropdown2 === 'location2' ||
   locationdropdown2 === 'location3' ||
   locationdropdown2 === 'location4' ||
   locationdropdown2 === 'location5' ||
   locationdropdown2 === 'location6' ||
   locationdropdown2 === 'location8' ||
   locationdropdown2 === 'location9' ||
   locationdropdown2 === 'location10' ||
   locationdropdown2 === 'location11' ||
   locationdropdown2 === 'location12' ||
   locationdropdown2 === 'location13' ||
   locationdropdown2 === 'location14' ||
   locationdropdown2 === 'location15' ||
   locationdropdown2 === 'location16' ||
   locationdropdown2 === 'location17' ||
   locationdropdown2 === 'location18' ||
   locationdropdown2 === 'location19' ||
   locationdropdown2 === 'location20' ||
   locationdropdown2 === 'location21' ||
   locationdropdown2 === 'location22' ||
   locationdropdown2 === 'location23' ||
   locationdropdown2 === 'location24' ||
   locationdropdown2 === 'location25' ||
   locationdropdown2 === 'location26' ||
   locationdropdown2 === 'location27' ||
   locationdropdown2 === 'location28' ||
   locationdropdown2 === 'location29' ||
   locationdropdown2 === 'location30' ||
   locationdropdown2 === 'location31')
) {
  if (selectedClass === 'class1') {
    switch (locationdropdown2) {
      case 'location1':
      case 'location2':
      case 'location3':
      case 'location4':
      case 'location6':
        calculatedPrice = 69;
        break;
        case 'location5':
          calculatedPrice = 'NO EXIT';
          break;
      case 'location8':
        calculatedPrice = 77;
        break;
      case 'location9':
        calculatedPrice = 84;
        break;
      case 'location10':
        calculatedPrice = 88;
        break;
      case 'location11':
        calculatedPrice = 107;
        break;
      case 'location12':
        calculatedPrice = 122;
        break;
      case 'location13':
        calculatedPrice = 128;
        break;
      case 'location14':
        calculatedPrice = 156;
        break;
      case 'location15':
        calculatedPrice = 203;
        break;
      case 'location16':
        calculatedPrice = 239;
        break;
      case 'location17':
        calculatedPrice = 268;
        break;
      case 'location18':
        calculatedPrice = 302;
        break;
      case 'location19':
        calculatedPrice = 310;
        break;
      case 'location20':
        calculatedPrice = 332;
        break;
      case 'location21':
        calculatedPrice = 656;
        break;
      case 'location22':
        calculatedPrice = 560;
        break;
      case 'location23':
        calculatedPrice = 464;
        break;
      case 'location24':
        calculatedPrice = 393;
        break;
      case 'location25':
        calculatedPrice = 341;
        break;
      case 'location26':
        calculatedPrice = 332;
        break;
      case 'location27':
        calculatedPrice = 353;
        break;
      case 'location28':
        calculatedPrice = 361;
        break;
      case 'location29':
        calculatedPrice = 414;
        break;
      case 'location30':
        calculatedPrice = 487;
        break;
      case 'location31':
        calculatedPrice = 512;
        break;
      default:
        break;
    }
  } else if (selectedClass === 'class2') {
    switch (locationdropdown2) {
      case 'location1':
      case 'location2':
      case 'location3':
      case 'location4':
      case 'location6':
        calculatedPrice = 172;
        break;
        case 'location5':
          calculatedPrice = 'NO EXIT';
          break;
      case 'location8':
        calculatedPrice = 193;
        break;
      case 'location9':
        calculatedPrice = 210;
        break;
      case 'location10':
        calculatedPrice = 219;
        break;
      case 'location11':
        calculatedPrice = 267;
        break;
      case 'location12':
        calculatedPrice = 306;
        break;
      case 'location13':
        calculatedPrice = 320;
        break;
      case 'location14':
        calculatedPrice = 389;
        break;
      case 'location15':
        calculatedPrice = 507;
        break;
      case 'location16':
        calculatedPrice = 597;
        break;
      case 'location17':
        calculatedPrice = 669;
        break;
      case 'location18':
        calculatedPrice = 755;
        break;
      case 'location19':
        calculatedPrice = 775;
        break;
      case 'location20':
        calculatedPrice = 829;
        break;
      case 'location21':
        calculatedPrice = 1494;
        break;
      case 'location22':
        calculatedPrice = 1284;
        break;
      case 'location23':
        calculatedPrice = 1092;
        break;
      case 'location24':
        calculatedPrice = 952;
        break;
      case 'location25':
        calculatedPrice = 846;
        break;
      case 'location26':
        calculatedPrice = 829;
        break;
      case 'location27':
        calculatedPrice = 871;
        break;
      case 'location28':
        calculatedPrice = 887;
        break;
      case 'location29':
        calculatedPrice = 994;
        break;
      case 'location30':
        calculatedPrice = 1138;
        break;
      case 'location31':
        calculatedPrice = 1188;
        break;
      default:
        break;
    }
  } else if (selectedClass === 'class3') {
    switch (locationdropdown2) {
      case 'location1':
      case 'location2':
      case 'location3':
      case 'location4':
      case 'location6':
        calculatedPrice = 206;
        break;
        case 'location5':
          calculatedPrice = 'NO EXIT';
          break;
      case 'location8':
        calculatedPrice = 232;
        break;
      case 'location9':
        calculatedPrice = 252;
        break;
      case 'location10':
        calculatedPrice = 263;
        break;
      case 'location11':
        calculatedPrice = 321;
        break;
      case 'location12':
        calculatedPrice = 367;
        break;
      case 'location13':
        calculatedPrice = 383;
        break;
      case 'location14':
        calculatedPrice = 467;
        break;
      case 'location15':
        calculatedPrice = 609;
        break;
      case 'location16':
        calculatedPrice = 717;
        break;
      case 'location17':
        calculatedPrice = 803;
        break;
      case 'location18':
        calculatedPrice = 905;
        break;
      case 'location19':
        calculatedPrice = 930;
        break;
      case 'location20':
        calculatedPrice = 995;
        break;
      case 'location21':
        calculatedPrice = 1967;
        break;
      case 'location22':
        calculatedPrice = 1678;
        break;
      case 'location23':
        calculatedPrice = 1390;
        break;
      case 'location24':
        calculatedPrice = 1179;
        break;
      case 'location25':
        calculatedPrice = 1021;
        break;
      case 'location26':
        calculatedPrice = 995;
        break;
      case 'location27':
        calculatedPrice = 1059;
        break;
      case 'location28':
        calculatedPrice = 1082;
        break;
      case 'location29':
        calculatedPrice = 1242;
        break;
      case 'location30':
        calculatedPrice = 1459;
        break;
      case 'location31':
        calculatedPrice = 1534;
        break;
      default:
        break;
    }
  }
}



// CIUDAD DE VICTORIA ENTRY POINT (DONE)
if (
  selectedOption === 'option1' &&
  locationdropdown === 'locationG' &&
  locationdropdown2 &&
  (locationdropdown2 === 'location1' ||
   locationdropdown2 === 'location2' ||
   locationdropdown2 === 'location3' ||
   locationdropdown2 === 'location4' ||
   locationdropdown2 === 'location5' ||
   locationdropdown2 === 'location6' ||
   locationdropdown2 === 'location7' ||
   locationdropdown2 === 'location9' ||
   locationdropdown2 === 'location10' ||
   locationdropdown2 === 'location11' ||
   locationdropdown2 === 'location12' ||
   locationdropdown2 === 'location13' ||
   locationdropdown2 === 'location14' ||
   locationdropdown2 === 'location15' ||
   locationdropdown2 === 'location16' ||
   locationdropdown2 === 'location17' ||
   locationdropdown2 === 'location18' ||
   locationdropdown2 === 'location19' ||
   locationdropdown2 === 'location20' ||
   locationdropdown2 === 'location21' ||
   locationdropdown2 === 'location22' ||
   locationdropdown2 === 'location23' ||
   locationdropdown2 === 'location24' ||
   locationdropdown2 === 'location25' ||
   locationdropdown2 === 'location26' ||
   locationdropdown2 === 'location27' ||
   locationdropdown2 === 'location28' ||
   locationdropdown2 === 'location29' ||
   locationdropdown2 === 'location30' ||
   locationdropdown2 === 'location31')
) {
  // Update the price based on the selectedClass and destination
  if (selectedClass === 'class1') {
    switch (locationdropdown2) {
      case 'location1':
        calculatedPrice = 77;
        break;
      case 'location2':
        calculatedPrice = 77;
        break;
      case 'location3':
        calculatedPrice = 77;
        break;
      case 'location4':
        calculatedPrice = 77;
        break;
      case 'location5':
        calculatedPrice = 'NO EXIT';
        break;
      case 'location6':
        calculatedPrice = 77;
        break;
      case 'location7':
        calculatedPrice = 77;
        break;
      case 'location9':
        calculatedPrice = 7;
        break;
      case 'location10':
        calculatedPrice = 10;
        break;
      case 'location11':
        calculatedPrice = 30;
        break;
      case 'location12':
        calculatedPrice = 45;
        break;
      case 'location13':
        calculatedPrice = 51;
        break;
      case 'location14':
        calculatedPrice = 78;
        break;
      case 'location15':
        calculatedPrice = 126;
        break;
      case 'location16':
        calculatedPrice = 162;
        break;
      case 'location17':
        calculatedPrice = 190;
        break;
      case 'location18':
        calculatedPrice = 225;
        break;
      case 'location19':
        calculatedPrice = 233;
        break;
      case 'location20':
        calculatedPrice = 254;
        break;
      case 'location21':
        calculatedPrice = 578;
        break;
      case 'location22':
        calculatedPrice = 482;
        break;
      case 'location23':
        calculatedPrice = 386;
        break;
      case 'location24':
        calculatedPrice = 315;
        break;
      case 'location25':
        calculatedPrice = 263;
        break;
      case 'location26':
        calculatedPrice = 254;
        break;
      case 'location27':
        calculatedPrice = 275;
        break;
      case 'location28':
        calculatedPrice = 283;
        break;
      case 'location29':
        calculatedPrice = 336;
        break;
      case 'location30':
        calculatedPrice = 409;
        break;
      case 'location31':
        calculatedPrice = 434;
        break;
      default:
        break;
    }
  } else if (selectedClass === 'class2') {
    switch (locationdropdown2) {
      case 'location1':
        calculatedPrice = 193;
        break;
      case 'location2':
        calculatedPrice = 193;
        break;
      case 'location3':
        calculatedPrice = 193;
        break;
      case 'location4':
        calculatedPrice = 193;
        break;
      case 'location5':
        calculatedPrice = 'NO EXIT';
        break;
      case 'location6':
        calculatedPrice = 193;
        break;
      case 'location7':
        calculatedPrice = 193;
        break;
      case 'location9':
        calculatedPrice = 17;
        break;
      case 'location10':
        calculatedPrice = 26;
        break;
      case 'location11':
        calculatedPrice = 74;
        break;
      case 'location12':
        calculatedPrice = 113;
        break;
      case 'location13':
        calculatedPrice = 126;
        break;
      case 'location14':
        calculatedPrice = 196;
        break;
      case 'location15':
        calculatedPrice = 314;
        break;
      case 'location16':
        calculatedPrice = 404;
        break;
      case 'location17':
        calculatedPrice = 476;
        break;
      case 'location18':
        calculatedPrice = 561;
        break;
      case 'location19':
        calculatedPrice = 582;
        break;
      case 'location20':
        calculatedPrice = 636;
        break;
      case 'location21':
        calculatedPrice = 1301;
        break;
      case 'location22':
        calculatedPrice = 1091;
        break;
      case 'location23':
        calculatedPrice = 899;
        break;
      case 'location24':
        calculatedPrice = 759;
        break;
      case 'location25':
        calculatedPrice = 653;
        break;
      case 'location26':
        calculatedPrice = 636;
        break;
      case 'location27':
        calculatedPrice = 678;
        break;
      case 'location28':
        calculatedPrice = 694;
        break;
      case 'location29':
        calculatedPrice = 801;
        break;
      case 'location30':
        calculatedPrice = 945;
        break;
      case 'location31':
        calculatedPrice = 995;
        break;
      default:
        break;
    }
  } else if (selectedClass === 'class3') {
    switch (locationdropdown2) {
      case 'location1':
        calculatedPrice = 232;
        break;
      case 'location2':
        calculatedPrice = 232;
        break;
      case 'location3':
        calculatedPrice = 232;
        break;
      case 'location4':
        calculatedPrice = 232;
        break;
      case 'location5':
        calculatedPrice = 'NO EXIT';
        break;
      case 'location6':
        calculatedPrice = 232;
        break;
      case 'location7':
        calculatedPrice = 232;
        break;
      case 'location9':
        calculatedPrice = 20;
        break;
      case 'location10':
        calculatedPrice = 31;
        break;
      case 'location11':
        calculatedPrice = 89;
        break;
      case 'location12':
        calculatedPrice = 135;
        break;
      case 'location13':
        calculatedPrice = 152;
        break;
      case 'location14':
        calculatedPrice = 235;
        break;
      case 'location15':
        calculatedPrice = 377;
        break;
      case 'location16':
        calculatedPrice = 485;
        break;
      case 'location17':
        calculatedPrice = 571;
        break;
      case 'location18':
        calculatedPrice = 674;
        break;
      case 'location19':
        calculatedPrice = 699;
        break;
      case 'location20':
        calculatedPrice = 763;
        break;
      case 'location21':
        calculatedPrice = 1735;
        break;
      case 'location22':
        calculatedPrice = 1446;
        break;
      case 'location23':
        calculatedPrice = 1158;
        break;
      case 'location24':
        calculatedPrice = 947;
        break;
      case 'location25':
        calculatedPrice = 789;
        break;
      case 'location26':
        calculatedPrice = 763;
        break;
      case 'location27':
        calculatedPrice = 827;
        break;
      case 'location28':
        calculatedPrice = 850;
        break;
      case 'location29':
        calculatedPrice = 1010;
        break;
      case 'location30':
        calculatedPrice = 1227;
        break;
      case 'location31':
        calculatedPrice = 1302;
        break;
      default:
        break;
    }
  }
}



   // BOCAUE ENTRY POINT (DONE)
  if (
    selectedOption === 'option1' &&
    locationdropdown === 'locationH' &&
    locationdropdown2 &&
    (locationdropdown2 === 'location1' ||
     locationdropdown2 === 'location2' ||
     locationdropdown2 === 'location3' ||
     locationdropdown2 === 'location4' ||
     locationdropdown2 === 'location5' ||
     locationdropdown2 === 'location6' ||
     locationdropdown2 === 'location7' ||
     locationdropdown2 === 'location8' ||
     locationdropdown2 === 'location10' ||
     locationdropdown2 === 'location11' ||
     locationdropdown2 === 'location12' ||
     locationdropdown2 === 'location13' ||
     locationdropdown2 === 'location14' ||
     locationdropdown2 === 'location15' ||
     locationdropdown2 === 'location16' ||
     locationdropdown2 === 'location17' ||
     locationdropdown2 === 'location18' ||
     locationdropdown2 === 'location19' ||
     locationdropdown2 === 'location20' ||
     locationdropdown2 === 'location21' ||
     locationdropdown2 === 'location22' ||
     locationdropdown2 === 'location23' ||
     locationdropdown2 === 'location24' ||
     locationdropdown2 === 'location25' ||
     locationdropdown2 === 'location26' ||
     locationdropdown2 === 'location27' ||
     locationdropdown2 === 'location28' ||
     locationdropdown2 === 'location29' ||
     locationdropdown2 === 'location30' ||
     locationdropdown2 === 'location31')
  ) {
    // Update the price based on the selectedClass and destination
    if (selectedClass === 'class1') {
      switch (locationdropdown2) {
        case 'location1':
          calculatedPrice = 84;
          break;
        case 'location2':
          calculatedPrice = 84;
          break;
        case 'location3':
          calculatedPrice = 84;
          break;
        case 'location4':
          calculatedPrice = 84;
          break;
        case 'location5':
          calculatedPrice = 'NO EXIT';
          break;
        case 'location6':
          calculatedPrice = 84;
          break;
        case 'location7':
          calculatedPrice = 84;
          break;
        case 'location8':
          calculatedPrice = 7;
          break;
        case 'location10':
          calculatedPrice = 4;
          break;
        case 'location11':
          calculatedPrice = 23;
          break;
        case 'location12':
          calculatedPrice = 38;
          break;
        case 'location13':
          calculatedPrice = 44;
          break;
        case 'location14':
          calculatedPrice = 71;
          break;
        case 'location15':
          calculatedPrice = 119;
          break;
        case 'location16':
          calculatedPrice = 155;
          break;
        case 'location17':
          calculatedPrice = 184;
          break;
        case 'location18':
          calculatedPrice = 218;
          break;
        case 'location19':
          calculatedPrice = 226;
          break;
        case 'location20':
          calculatedPrice = 248;
          break;
        case 'location21':
          calculatedPrice = 572;
          break;
        case 'location22':
          calculatedPrice = 476;
          break;
        case 'location23':
          calculatedPrice = 380;
          break;
        case 'location24':
          calculatedPrice = 309;
          break;
        case 'location25':
          calculatedPrice = 257;
          break;
        case 'location26':
          calculatedPrice = 248;
          break;
        case 'location27':
          calculatedPrice = 269;
          break;
        case 'location28':
          calculatedPrice = 277;
          break;
        case 'location29':
          calculatedPrice = 330;
          break;
        case 'location30':
          calculatedPrice = 403;
          break;
        case 'location31':
          calculatedPrice = 428;
          break;
        default:
          break;
      }
    } else if (selectedClass === 'class2') {
      switch (locationdropdown2) {
        case 'location1':
          calculatedPrice = 210;
          break;
        case 'location2':
          calculatedPrice = 210;
          break;
        case 'location3':
          calculatedPrice = 210;
          break;
        case 'location4':
          calculatedPrice = 210;
          break;
        case 'location5':
          calculatedPrice = 'NO EXIT';
          break;
        case 'location6':
          calculatedPrice = 210;
          break;
        case 'location7':
          calculatedPrice = 210;
          break;
        case 'location8':
          calculatedPrice = 17;
          break;
        case 'location10':
          calculatedPrice = 9;
          break;
        case 'location11':
          calculatedPrice = 57;
          break;
        case 'location12':
          calculatedPrice = 96;
          break;
        case 'location13':
          calculatedPrice = 109;
          break;
        case 'location14':
          calculatedPrice = 179;
          break;
        case 'location15':
          calculatedPrice = 297;
          break;
        case 'location16':
          calculatedPrice = 387;
          break;
        case 'location17':
          calculatedPrice = 459;
          break;
        case 'location18':
          calculatedPrice = 544;
          break;
        case 'location19':
          calculatedPrice = 565;
          break;
        case 'location20':
          calculatedPrice = 619;
          break;
        case 'location21':
          calculatedPrice = 1284;
          break;
        case 'location22':
          calculatedPrice = 1074;
          break;
        case 'location23':
          calculatedPrice = 882;
          break;
        case 'location24':
          calculatedPrice = 742;
          break;
        case 'location25':
          calculatedPrice = 636;
          break;
        case 'location26':
          calculatedPrice = 619;
          break;
        case 'location27':
          calculatedPrice = 661;
          break;
        case 'location28':
          calculatedPrice = 677;
          break;
        case 'location29':
          calculatedPrice = 784;
          break;
        case 'location30':
          calculatedPrice = 928;
          break;
        case 'location31':
          calculatedPrice = 978;
          break;
        default:
          break;
      }
    } else if (selectedClass === 'class3') {
      switch (locationdropdown2) {
        case 'location1':
          calculatedPrice = 252;
          break;
        case 'location2':
          calculatedPrice = 252;
          break;
        case 'location3':
          calculatedPrice = 252;
          break;
        case 'location4':
          calculatedPrice = 252;
          break;
        case 'location5':
          calculatedPrice = 'NO EXIT';
          break;
        case 'location6':
          calculatedPrice = 252;
          break;
        case 'location7':
          calculatedPrice = 252;
          break;
        case 'location8':
          calculatedPrice = 20;
          break;
        case 'location10':
          calculatedPrice = 11;
          break;
        case 'location11':
          calculatedPrice = 68;
          break;
        case 'location12':
          calculatedPrice = 115;
          break;
        case 'location13':
          calculatedPrice = 131;
          break;
        case 'location14':
          calculatedPrice = 214;
          break;
        case 'location15':
          calculatedPrice = 356;
          break;
        case 'location16':
          calculatedPrice = 464;
          break;
        case 'location17':
          calculatedPrice = 551;
          break;
        case 'location18':
          calculatedPrice = 653;
          break;
        case 'location19':
          calculatedPrice = 678;
          break;
        case 'location20':
          calculatedPrice = 743;
          break;
        case 'location21':
          calculatedPrice = 1715;
          break;
        case 'location22':
          calculatedPrice = 1426;
          break;
        case 'location23':
          calculatedPrice = 1138;
          break;
        case 'location24':
          calculatedPrice = 927;
          break;
        case 'location25':
          calculatedPrice = 769;
          break;
        case 'location26':
          calculatedPrice = 743;
          break;
        case 'location27':
          calculatedPrice = 807;
          break;
        case 'location28':
          calculatedPrice = 830;
          break;
        case 'location29':
          calculatedPrice = 990;
          break;
        case 'location30':
          calculatedPrice = 1207;
          break;
        case 'location31':
          calculatedPrice = 1282;
          break;
        default:
          break;
      }
    }
  }


  // TAMBUBONG ENTRY POINT (DONE)
if (
  selectedOption === 'option1' &&
  locationdropdown === 'locationH' &&
  locationdropdown2 &&
  (locationdropdown2 === 'location1' ||
   locationdropdown2 === 'location2' ||
   locationdropdown2 === 'location3' ||
   locationdropdown2 === 'location4' ||
   locationdropdown2 === 'location5' ||
   locationdropdown2 === 'location6' ||
   locationdropdown2 === 'location7' ||
   locationdropdown2 === 'location8' ||
   locationdropdown2 === 'location9' ||
   locationdropdown2 === 'location11' ||
   locationdropdown2 === 'location12' ||
   locationdropdown2 === 'location13' ||
   locationdropdown2 === 'location14' ||
   locationdropdown2 === 'location15' ||
   locationdropdown2 === 'location16' ||
   locationdropdown2 === 'location17' ||
   locationdropdown2 === 'location18' ||
   locationdropdown2 === 'location19' ||
   locationdropdown2 === 'location20' ||
   locationdropdown2 === 'location21' ||
   locationdropdown2 === 'location22' ||
   locationdropdown2 === 'location23' ||
   locationdropdown2 === 'location24' ||
   locationdropdown2 === 'location25' ||
   locationdropdown2 === 'location26' ||
   locationdropdown2 === 'location27' ||
   locationdropdown2 === 'location28' ||
   locationdropdown2 === 'location29' ||
   locationdropdown2 === 'location30' ||
   locationdropdown2 === 'location31')
) {
  // Update the price based on the selectedClass and destination
  if (selectedClass === 'class1') {
    switch (locationdropdown2) {
      case 'location1':
        calculatedPrice = 88;
        break;
      case 'location2':
        calculatedPrice = 88;
        break;
      case 'location3':
        calculatedPrice = 88;
        break;
      case 'location4':
        calculatedPrice = 88;
        break;
      case 'location5':
        calculatedPrice = 'NO EXIT';
        break;
      case 'location6':
        calculatedPrice = 88;
        break;
      case 'location7':
        calculatedPrice = 88;
        break;
      case 'location8':
        calculatedPrice = 10;
        break;
      case 'location9':
        calculatedPrice = 4;
        break;
      case 'location11':
        calculatedPrice = 19;
        break;
      case 'location12':
        calculatedPrice = 35;
        break;
      case 'location13':
        calculatedPrice = 40;
        break;
      case 'location14':
        calculatedPrice = 68;
        break;
      case 'location15':
        calculatedPrice = 115;
        break;
      case 'location16':
        calculatedPrice = 151;
        break;
      case 'location17':
        calculatedPrice = 180;
        break;
      case 'location18':
        calculatedPrice = 214;
        break;
      case 'location19':
        calculatedPrice = 222;
        break;
      case 'location20':
        calculatedPrice = 244;
        break;
      case 'location21':
        calculatedPrice = 568;
        break;
      case 'location22':
        calculatedPrice = 472;
        break;
      case 'location23':
        calculatedPrice = 376;
        break;
      case 'location24':
        calculatedPrice = 305;
        break;
      case 'location25':
        calculatedPrice = 253;
        break;
      case 'location26':
        calculatedPrice = 244;
        break;
      case 'location27':
        calculatedPrice = 265;
        break;
      case 'location28':
        calculatedPrice = 273;
        break;
      case 'location29':
        calculatedPrice = 326;
        break;
      case 'location30':
        calculatedPrice = 399;
        break;
      case 'location31':
        calculatedPrice = 424;
        break;
      default:
        break;
    }
  } else if (selectedClass === 'class2') {
    switch (locationdropdown2) {
      case 'location1':
        calculatedPrice = 219;
        break;
      case 'location2':
        calculatedPrice = 219;
        break;
      case 'location3':
        calculatedPrice = 219;
        break;
      case 'location4':
        calculatedPrice = 219;
        break;
      case 'location5':
        calculatedPrice = 'NO EXIT';
        break;
      case 'location6':
        calculatedPrice = 219;
        break;
      case 'location7':
        calculatedPrice = 219;
        break;
      case 'location8':
        calculatedPrice = 26;
        break;
      case 'location9':
        calculatedPrice = 9;
        break;
      case 'location11':
        calculatedPrice = 48;
        break;
      case 'location12':
        calculatedPrice = 87;
        break;
      case 'location13':
        calculatedPrice = 100;
        break;
      case 'location14':
        calculatedPrice = 170;
        break;
      case 'location15':
        calculatedPrice = 288;
        break;
      case 'location16':
        calculatedPrice = 378;
        break;
      case 'location17':
        calculatedPrice = 450;
        break;
      case 'location18':
        calculatedPrice = 535;
        break;
      case 'location19':
        calculatedPrice = 556;
        break;
      case 'location20':
        calculatedPrice = 610;
        break;
      case 'location21':
        calculatedPrice = 1275;
        break;
      case 'location22':
        calculatedPrice = 1065;
        break;
      case 'location23':
        calculatedPrice = 873;
        break;
      case 'location24':
        calculatedPrice = 733;
        break;
      case 'location25':
        calculatedPrice = 627;
        break;
      case 'location26':
        calculatedPrice = 610;
        break;
      case 'location27':
        calculatedPrice = 652;
        break;
      case 'location28':
        calculatedPrice = 668;
        break;
      case 'location29':
        calculatedPrice = 775;
        break;
      case 'location30':
        calculatedPrice = 919;
        break;
      case 'location31':
        calculatedPrice = 969;
        break;
      default:
        break;
    }
  } else if (selectedClass === 'class3') {
    switch (locationdropdown2) {
      case 'location1':
        calculatedPrice = 263;
        break;
      case 'location2':
        calculatedPrice = 263;
        break;
      case 'location3':
        calculatedPrice = 263;
        break;
      case 'location4':
        calculatedPrice = 263;
        break;
      case 'location5':
        calculatedPrice = 'NO EXIT';
        break;
      case 'location6':
        calculatedPrice = 263;
        break;
      case 'location7':
        calculatedPrice = 263;
        break;
      case 'location8':
        calculatedPrice = 31;
        break;
      case 'location9':
        calculatedPrice = 11;
        break;
      case 'location11':
        calculatedPrice = 57;
        break;
      case 'location12':
        calculatedPrice = 104;
        break;
      case 'location13':
        calculatedPrice = 120;
        break;
      case 'location14':
        calculatedPrice = 203;
        break;
      case 'location15':
        calculatedPrice = 345;
        break;
      case 'location16':
        calculatedPrice = 453;
        break;
      case 'location17':
        calculatedPrice = 540;
        break;
      case 'location18':
        calculatedPrice = 642;
        break;
      case 'location19':
        calculatedPrice = 667;
        break;
      case 'location20':
        calculatedPrice = 732;
        break;
      case 'location21':
        calculatedPrice = 1704;
        break;
      case 'location22':
        calculatedPrice = 1415;
        break;
      case 'location23':
        calculatedPrice = 1127;
        break;
      case 'location24':
        calculatedPrice = 916;
        break;
      case 'location25':
        calculatedPrice = 758;
        break;
      case 'location26':
        calculatedPrice = 732;
        break;
      case 'location27':
        calculatedPrice = 796;
        break;
      case 'location28':
        calculatedPrice = 819;
        break;
      case 'location29':
        calculatedPrice = 979;
        break;
      case 'location30':
        calculatedPrice = 1196;
        break;
      case 'location31':
        calculatedPrice = 1271;
        break;
      default:
        break;
    }
  }
}


  // BALAGTAS ENTRY POINT (DONE)
  if (
    selectedOption === 'option1' &&
    locationdropdown === 'locationJ' &&
    locationdropdown2 &&
    (locationdropdown2 === 'location1' ||
     locationdropdown2 === 'location2' ||
     locationdropdown2 === 'location3' ||
     locationdropdown2 === 'location4' ||
     locationdropdown2 === 'location5' ||
     locationdropdown2 === 'location6' ||
     locationdropdown2 === 'location7' ||
     locationdropdown2 === 'location8' ||
     locationdropdown2 === 'location9' ||
     locationdropdown2 === 'location10' ||
     locationdropdown2 === 'location12' ||
     locationdropdown2 === 'location13' ||
     locationdropdown2 === 'location14' ||
     locationdropdown2 === 'location15' ||
     locationdropdown2 === 'location16' ||
     locationdropdown2 === 'location17' ||
     locationdropdown2 === 'location18' ||
     locationdropdown2 === 'location19' ||
     locationdropdown2 === 'location20' ||
     locationdropdown2 === 'location21' ||
     locationdropdown2 === 'location22' ||
     locationdropdown2 === 'location23' ||
     locationdropdown2 === 'location24' ||
     locationdropdown2 === 'location25' ||
     locationdropdown2 === 'location26' ||
     locationdropdown2 === 'location27' ||
     locationdropdown2 === 'location28' ||
     locationdropdown2 === 'location29' ||
     locationdropdown2 === 'location30' ||
     locationdropdown2 === 'location31')
  ) {
    // Update the price based on the selectedClass and destination
    if (selectedClass === 'class1') {
      switch (locationdropdown2) {
        case 'location1':
          calculatedPrice = 107;
          break;
        case 'location2':
          calculatedPrice = 107;
          break;
        case 'location3':
          calculatedPrice = 107;
          break;
        case 'location4':
          calculatedPrice = 107;
          break;
        case 'location5':
          calculatedPrice = 'NO EXIT';
          break;
        case 'location6':
          calculatedPrice = 107;
          break;
        case 'location7':
          calculatedPrice = 107;
          break;
        case 'location8':
          calculatedPrice = 30;
          break;
        case 'location9':
          calculatedPrice = 23;
          break;
        case 'location10':
          calculatedPrice = 19;
          break;
        case 'location12':
          calculatedPrice = 15;
          break;
        case 'location13':
          calculatedPrice = 21;
          break;
        case 'location14':
          calculatedPrice = 49;
          break;
        case 'location15':
          calculatedPrice = 96;
          break;
        case 'location16':
          calculatedPrice = 132;
          break;
        case 'location17':
          calculatedPrice = 161;
          break;
        case 'location18':
          calculatedPrice = 195;
          break;
        case 'location19':
          calculatedPrice = 203;
          break;
        case 'location20':
          calculatedPrice = 225;
          break;
        case 'location21':
          calculatedPrice = 549;
          break;
        case 'location22':
          calculatedPrice = 453;
          break;
        case 'location23':
          calculatedPrice = 357;
          break;
        case 'location24':
          calculatedPrice = 286;
          break;
        case 'location25':
          calculatedPrice = 234;
          break;
        case 'location26':
          calculatedPrice = 225;
          break;
        case 'location27':
          calculatedPrice = 246;
          break;
        case 'location28':
          calculatedPrice = 254;
          break;
        case 'location29':
          calculatedPrice = 307;
          break;
        case 'location30':
          calculatedPrice = 380;
          break;
        case 'location31':
          calculatedPrice = 405;
          break;
        default:
          break;
      }
    } else if (selectedClass === 'class2') {
      switch (locationdropdown2) {
        case 'location1':
          calculatedPrice = 267;
          break;
        case 'location2':
          calculatedPrice = 267;
          break;
        case 'location3':
          calculatedPrice = 267;
          break;
        case 'location4':
          calculatedPrice = 267;
          break;
        case 'location5':
          calculatedPrice = 'NO EXIT';
          break;
        case 'location6':
          calculatedPrice = 267;
          break;
        case 'location7':
          calculatedPrice = 267;
          break;
        case 'location8':
          calculatedPrice = 74;
          break;
        case 'location9':
          calculatedPrice = 57;
          break;
        case 'location10':
          calculatedPrice = 48;
          break;
        case 'location12':
          calculatedPrice = 39;
          break;
        case 'location13':
          calculatedPrice = 52;
          break;
        case 'location14':
          calculatedPrice = 122;
          break;
        case 'location15':
          calculatedPrice = 240;
          break;
        case 'location16':
          calculatedPrice = 330;
          break;
        case 'location17':
          calculatedPrice = 402;
          break;
        case 'location18':
          calculatedPrice = 487;
          break;
        case 'location19':
          calculatedPrice = 508;
          break;
        case 'location20':
          calculatedPrice = 562;
          break;
        case 'location21':
          calculatedPrice = 1227;
          break;
        case 'location22':
          calculatedPrice = 1017;
          break;
        case 'location23':
          calculatedPrice = 825;
          break;
        case 'location24':
          calculatedPrice = 685;
          break;
        case 'location25':
          calculatedPrice = 579;
          break;
        case 'location26':
          calculatedPrice = 562;
          break;
        case 'location27':
          calculatedPrice = 604;
          break;
        case 'location28':
          calculatedPrice = 620;
          break;
        case 'location29':
          calculatedPrice = 727;
          break;
        case 'location30':
          calculatedPrice = 871;
          break;
        case 'location31':
          calculatedPrice = 921;
          break;
        default:
          break;
      }
    } else if (selectedClass === 'class3') {
      switch (locationdropdown2) {
        case 'location1':
          calculatedPrice = 321;
          break;
        case 'location2':
          calculatedPrice = 321;
          break;
        case 'location3':
          calculatedPrice = 321;
          break;
        case 'location4':
          calculatedPrice = 321;
          break;
        case 'location5':
          calculatedPrice = 'NO EXIT';
          break;
        case 'location6':
          calculatedPrice = 321;
          break;
        case 'location7':
          calculatedPrice = 321;
          break;
        case 'location8':
          calculatedPrice = 89;
          break;
        case 'location9':
          calculatedPrice = 68;
          break;
        case 'location10':
          calculatedPrice = 57;
          break;
        case 'location12':
          calculatedPrice = 46;
          break;
        case 'location13':
          calculatedPrice = 63;
          break;
        case 'location14':
          calculatedPrice = 146;
          break;
        case 'location15':
          calculatedPrice = 288;
          break;
        case 'location16':
          calculatedPrice = 396;
          break;
        case 'location17':
          calculatedPrice = 482;
          break;
        case 'location18':
          calculatedPrice = 585;
          break;
        case 'location19':
          calculatedPrice = 610;
          break;
        case 'location20':
          calculatedPrice = 674;
          break;
        case 'location21':
          calculatedPrice = 1646;
          break;
        case 'location22':
          calculatedPrice = 1357;
          break;
        case 'location23':
          calculatedPrice = 1069;
          break;
        case 'location24':
          calculatedPrice = 858;
          break;
        case 'location25':
          calculatedPrice = 700;
          break;
        case 'location26':
          calculatedPrice = 674;
          break;
        case 'location27':
          calculatedPrice = 738;
          break;
        case 'location28':
          calculatedPrice = 761;
          break;
        case 'location29':
          calculatedPrice = 921;
          break;
        case 'location30':
          calculatedPrice = 1138;
          break;
        case 'location31':
          calculatedPrice = 1213;
          break;
        default:
          break;
      }
    }
  }


    // TABANG ENTRY POINT (DONE)
    if (
      selectedOption === 'option1' &&
      locationdropdown === 'locationK' &&
      locationdropdown2 &&
      (locationdropdown2 === 'location1' ||
       locationdropdown2 === 'location2' ||
       locationdropdown2 === 'location3' ||
       locationdropdown2 === 'location4' ||
       locationdropdown2 === 'location5' ||
       locationdropdown2 === 'location6' ||
       locationdropdown2 === 'location7' ||
       locationdropdown2 === 'location8' ||
       locationdropdown2 === 'location9' ||
       locationdropdown2 === 'location10' ||
       locationdropdown2 === 'location11' ||
       locationdropdown2 === 'location13' ||
       locationdropdown2 === 'location14' ||
       locationdropdown2 === 'location15' ||
       locationdropdown2 === 'location16' ||
       locationdropdown2 === 'location17' ||
       locationdropdown2 === 'location18' ||
       locationdropdown2 === 'location19' ||
       locationdropdown2 === 'location20' ||
       locationdropdown2 === 'location21' ||
       locationdropdown2 === 'location22' ||
       locationdropdown2 === 'location23' ||
       locationdropdown2 === 'location24' ||
       locationdropdown2 === 'location25' ||
       locationdropdown2 === 'location26' ||
       locationdropdown2 === 'location27' ||
       locationdropdown2 === 'location28' ||
       locationdropdown2 === 'location29' ||
       locationdropdown2 === 'location30' ||
       locationdropdown2 === 'location31')
    ) {
      // Update the price based on the selectedClass and destination
      if (selectedClass === 'class1') {
        switch (locationdropdown2) {
          case 'location1':
          case 'location2':
          case 'location3':
          case 'location4':
          case 'location6':
            calculatedPrice = 122;
            break;
            case 'location5':
              calculatedPrice = 'NO EXIT';
              break;
          case 'location7':
            calculatedPrice = 122;
            break;
          case 'location8':
            calculatedPrice = 45;
            break;
          case 'location9':
            calculatedPrice = 38;
            break;
          case 'location10':
            calculatedPrice = 35;
            break;
          case 'location11':
            calculatedPrice = 15;
            break;
          case 'location13':
          case 'location14':
          case 'location15':
          case 'location16':
          case 'location17':
          case 'location18':
          case 'location19':
          case 'location20':
          case 'location21':
          case 'location22':
          case 'location23':
          case 'location24':
          case 'location25':
          case 'location26':
          case 'location27':
          case 'location28':
          case 'location29':
          case 'location30':
          case 'location31':
            calculatedPrice = 'NO EXIT';
            break;
          default:
            break;
        }
      } else if (selectedClass === 'class2') {
        switch (locationdropdown2) {
          case 'location1':
          case 'location2':
          case 'location3':
          case 'location4':
          case 'location6':
            calculatedPrice = 306;
            break;
            case 'location5':
              calculatedPrice = 'NO EXIT';
              break;
          case 'location7':
            calculatedPrice = 306;
            break;
          case 'location8':
            calculatedPrice = 113;
            break;
          case 'location9':
            calculatedPrice = 96;
            break;
          case 'location10':
            calculatedPrice = 48;
            break;
              case 'location11':
                calculatedPrice = 39;
            break;
              case 'location13':
              case 'location14':
              case 'location15':
              case 'location16':
              case 'location17':
              case 'location18':
              case 'location19':
              case 'location20':
              case 'location21':
              case 'location22':
              case 'location23':
              case 'location24':
              case 'location25':
              case 'location26':
              case 'location27':
              case 'location28':
              case 'location29':
              case 'location30':
              case 'location31':
                calculatedPrice = 'NO EXIT';
                break;
              default:
                break;
        }
      } else if (selectedClass === 'class3') {
        switch (locationdropdown2) {
          case 'location1':
          case 'location2':
          case 'location3':
          case 'location4':
          case 'location6':
            calculatedPrice = 367;
            break;
            case 'location5':
              calculatedPrice = 'NO EXIT';
              break;
          case 'location7':
            calculatedPrice = 367;
            break;
          case 'location8':
            calculatedPrice = 135;
            break;
          case 'location9':
            calculatedPrice = 115;
            break;
          case 'location10':
            calculatedPrice = 104;
            break;
            case 'location11':
              calculatedPrice = 46;
            break;
              case 'location13':
              case 'location14':
              case 'location15':
              case 'location16':
              case 'location17':
              case 'location18':
              case 'location19':
              case 'location20':
              case 'location21':
              case 'location22':
              case 'location23':
              case 'location24':
              case 'location25':
              case 'location26':
              case 'location27':
              case 'location28':
              case 'location29':
              case 'location30':
              case 'location31':
                calculatedPrice = 'NO EXIT';
                break;
          default:
            break;
        }
      }
    }
  

  // STA. RITA ENTRY POINT (DONE)
  if (
    selectedOption === 'option1' &&
    locationdropdown === 'locationL' &&
    locationdropdown2 &&
    (locationdropdown2 === 'location1' ||
     locationdropdown2 === 'location2' ||
     locationdropdown2 === 'location3' ||
     locationdropdown2 === 'location4' ||
     locationdropdown2 === 'location5' ||
     locationdropdown2 === 'location6' ||
     locationdropdown2 === 'location7' ||
     locationdropdown2 === 'location8' ||
     locationdropdown2 === 'location9' ||
     locationdropdown2 === 'location10' ||
     locationdropdown2 === 'location11' ||
     locationdropdown2 === 'location12' ||
     locationdropdown2 === 'location14' ||
     locationdropdown2 === 'location15' ||
     locationdropdown2 === 'location16' ||
     locationdropdown2 === 'location17' ||
     locationdropdown2 === 'location18' ||
     locationdropdown2 === 'location19' ||
     locationdropdown2 === 'location20' ||
     locationdropdown2 === 'location21' ||
     locationdropdown2 === 'location22' ||
     locationdropdown2 === 'location23' ||
     locationdropdown2 === 'location24' ||
     locationdropdown2 === 'location25' ||
     locationdropdown2 === 'location26' ||
     locationdropdown2 === 'location27' ||
     locationdropdown2 === 'location28' ||
     locationdropdown2 === 'location29' ||
     locationdropdown2 === 'location30' ||
     locationdropdown2 === 'location31')
  ) {
    // Update the price based on the selectedClass and destination
    if (selectedClass === 'class1') {
      switch (locationdropdown2) {
        case 'location1':
        case 'location2':
        case 'location3':
        case 'location4':
        case 'location6':
          calculatedPrice = 128;
          break;
          case 'location5':
            calculatedPrice = 'NO EXIT';
          break;
        case 'location7':
          calculatedPrice = 51;
          break;
        case 'location8':
          calculatedPrice = 44;
          break;
        case 'location9':
          calculatedPrice = 40;
          break;
        case 'location10':
          calculatedPrice = 21;
          break;
        case 'location11':
          calculatedPrice = 'NO EXIT';
          break;
        case 'location13':
          calculatedPrice = 28;
          break;
        case 'location14':
          calculatedPrice = 75;
          break;
        case 'location15':
          calculatedPrice = 111;
          break;
        case 'location16':
          calculatedPrice = 140;
          break;
        case 'location17':
          calculatedPrice = 174;
          break;
        case 'location18':
          calculatedPrice = 182;
          break;
        case 'location19':
          calculatedPrice = 204;
          break;
        case 'location20':
          calculatedPrice = 488;
          break;
        case 'location21':
          calculatedPrice = 400;
          break;
        case 'location22':
          calculatedPrice = 317;
          break;
        case 'location23':
          calculatedPrice = 257;
          break;
        case 'location24':
          calculatedPrice = 211;
          break;
        case 'location25':
          calculatedPrice = 204;
          break;
        case 'location26':
          calculatedPrice = 222;
          break;
        case 'location27':
          calculatedPrice = 229;
          break;
        case 'location28':
          calculatedPrice = 258;
          break;
        case 'location29':
          calculatedPrice = 275;
          break;
        case 'location30':
          calculatedPrice = 337;
          break;
        case 'location31':
          calculatedPrice = 359;
          break;
        default:
          break;
      }
    } else if (selectedClass === 'class2') {
      switch (locationdropdown2) {
        case 'location1':
        case 'location2':
        case 'location3':
        case 'location4':
        case 'location5':
        case 'location6':
          calculatedPrice = 320;
          break;
        case 'location7':
          calculatedPrice = 126;
          break;
        case 'location8':
          calculatedPrice = 109;
          break;
        case 'location9':
          calculatedPrice = 100;
          break;
        case 'location10':
          calculatedPrice = 52;
          break;
        case 'location11':
          calculatedPrice = 'NO EXIT';
          break;
        case 'location13':
          calculatedPrice = 69;
          break;
        case 'location14':
          calculatedPrice = 188;
          break;
        case 'location15':
          calculatedPrice = 278;
          break;
        case 'location16':
          calculatedPrice = 349;
          break;
        case 'location17':
          calculatedPrice = 435;
          break;
        case 'location18':
          calculatedPrice = 456;
          break;
        case 'location19':
          calculatedPrice = 509;
          break;
        case 'location20':
          calculatedPrice = 1093;
          break;
        case 'location21':
          calculatedPrice = 901;
          break;
        case 'location22':
          calculatedPrice = 736;
          break;
        case 'location23':
          calculatedPrice = 615;
          break;
        case 'location24':
          calculatedPrice = 524;
          break;
        case 'location25':
          calculatedPrice = 509;
          break;
        case 'location26':
          calculatedPrice = 545;
          break;
        case 'location27':
          calculatedPrice = 559;
          break;
        case 'location28':
          calculatedPrice = 618;
          break;
        case 'location29':
          calculatedPrice = 651;
          break;
        case 'location30':
          calculatedPrice = 775;
          break;
        case 'location31':
          calculatedPrice = 818;
          break;
        default:
          break;
      }
    } else if (selectedClass === 'class3') {
      switch (locationdropdown2) {
        case 'location1':
        case 'location2':
        case 'location3':
        case 'location4':
        case 'location5':
        case 'location6':
          calculatedPrice = 383;
          break;
        case 'location7':
          calculatedPrice = 152;
          break;
        case 'location8':
          calculatedPrice = 131;
          break;
        case 'location9':
          calculatedPrice = 120;
          break;
        case 'location10':
          calculatedPrice = 63;
          break;
        case 'location11':
          calculatedPrice = 'NO EXIT';
          break;
        case 'location13':
          calculatedPrice = 83;
          break;
        case 'location14':
          calculatedPrice = 225;
          break;
        case 'location15':
          calculatedPrice = 333;
          break;
        case 'location16':
          calculatedPrice = 419;
          break;
        case 'location17':
          calculatedPrice = 522;
          break;
        case 'location18':
          calculatedPrice = 547;
          break;
        case 'location19':
          calculatedPrice = 611;
          break;
        case 'location20':
          calculatedPrice = 1462;
          break;
        case 'location21':
          calculatedPrice = 1199;
          break;
        case 'location22':
          calculatedPrice = 951;
          break;
        case 'location23':
          calculatedPrice = 770;
          break;
        case 'location24':
          calculatedPrice = 633;
          break;
        case 'location25':
          calculatedPrice = 611;
          break;
        case 'location26':
          calculatedPrice = 666;
          break;
        case 'location27':
          calculatedPrice = 686;
          break;
        case 'location28':
          calculatedPrice = 774;
          break;
        case 'location29':
          calculatedPrice = 824;
          break;
        case 'location30':
          calculatedPrice = 1010;
          break;
        case 'location31':
          calculatedPrice = 1075;
          break;
        default:
          break;
      }
    }
  }


    // PULILAN ENTRY POINT (DONE)
    if (
      selectedOption === 'option1' &&
      locationdropdown === 'locationL' &&
      locationdropdown2 &&
      (locationdropdown2 === 'location1' ||
       locationdropdown2 === 'location2' ||
       locationdropdown2 === 'location3' ||
       locationdropdown2 === 'location4' ||
       locationdropdown2 === 'location5' ||
       locationdropdown2 === 'location6' ||
       locationdropdown2 === 'location7' ||
       locationdropdown2 === 'location8' ||
       locationdropdown2 === 'location9' ||
       locationdropdown2 === 'location10' ||
       locationdropdown2 === 'location11' ||
       locationdropdown2 === 'location12' ||
       locationdropdown2 === 'location14' ||
       locationdropdown2 === 'location15' ||
       locationdropdown2 === 'location16' ||
       locationdropdown2 === 'location17' ||
       locationdropdown2 === 'location18' ||
       locationdropdown2 === 'location19' ||
       locationdropdown2 === 'location20' ||
       locationdropdown2 === 'location21' ||
       locationdropdown2 === 'location22' ||
       locationdropdown2 === 'location23' ||
       locationdropdown2 === 'location24' ||
       locationdropdown2 === 'location25' ||
       locationdropdown2 === 'location26' ||
       locationdropdown2 === 'location27' ||
       locationdropdown2 === 'location28' ||
       locationdropdown2 === 'location29' ||
       locationdropdown2 === 'location30' ||
       locationdropdown2 === 'location31')
    ) {
      // Update the price based on the selectedClass and destination
      if (selectedClass === 'class1') {
        switch (locationdropdown2) {
          case 'location1':
          case 'location2':
          case 'location3':
          case 'location4':
          case 'location5':
          case 'location6':
            calculatedPrice = 156;
            break;
          case 'location7':
            calculatedPrice = 78;
            break;
          case 'location8':
            calculatedPrice = 71;
            break;
          case 'location9':
            calculatedPrice = 68;
            break;
          case 'location10':
            calculatedPrice = 49;
            break;
          case 'location11':
            calculatedPrice = 'NO EXIT';
            break;
          case 'location12':
            calculatedPrice = 28;
            break;
          case 'location14':
            calculatedPrice = 47;
            break;
          case 'location15':
            calculatedPrice = 83;
            break;
          case 'location16':
            calculatedPrice = 112;
            break;
          case 'location17':
            calculatedPrice = 146;
            break;
          case 'location18':
            calculatedPrice = 155;
            break;
          case 'location19':
            calculatedPrice = 176;
            break;
          case 'location20':
            calculatedPrice = 460;
            break;
          case 'location21':
            calculatedPrice = 372;
            break;
          case 'location22':
            calculatedPrice = 289;
            break;
          case 'location23':
            calculatedPrice = 229;
            break;
          case 'location24':
            calculatedPrice = 183;
            break;
          case 'location25':
            calculatedPrice = 176;
            break;
          case 'location26':
            calculatedPrice = 194;
            break;
          case 'location27':
            calculatedPrice = 201;
            break;
          case 'location28':
            calculatedPrice = 230;
            break;
          case 'location29':
            calculatedPrice = 247;
            break;
          case 'location30':
            calculatedPrice = 309;
            break;
          case 'location31':
            calculatedPrice = 331;
            break;
          default:
            break;
        }
      } else if (selectedClass === 'class2') {
        switch (locationdropdown2) {
          case 'location1':
          case 'location2':
          case 'location3':
          case 'location4':
          case 'location5':
          case 'location6':
            calculatedPrice = 389;
            break;
          case 'location7':
            calculatedPrice = 196;
            break;
          case 'location8':
            calculatedPrice = 179;
            break;
          case 'location9':
            calculatedPrice = 170;
            break;
          case 'location10':
            calculatedPrice = 122;
            break;
          case 'location11':
            calculatedPrice = 'NO EXIT';
            break;
          case 'location12':
            calculatedPrice = 69;
            break;
          case 'location14':
            calculatedPrice = 118;
            break;
          case 'location15':
            calculatedPrice = 208;
            break;
          case 'location16':
            calculatedPrice = 280;
            break;
          case 'location17':
            calculatedPrice = 366;
            break;
          case 'location18':
            calculatedPrice = 386;
            break;
          case 'location19':
            calculatedPrice = 440;
            break;
          case 'location20':
            calculatedPrice = 1024;
            break;
          case 'location21':
            calculatedPrice = 832;
            break;
          case 'location22':
            calculatedPrice = 667;
            break;
          case 'location23':
            calculatedPrice = 546;
            break;
          case 'location24':
            calculatedPrice = 455;
            break;
          case 'location25':
            calculatedPrice = 440;
            break;
          case 'location26':
            calculatedPrice = 476;
            break;
          case 'location27':
            calculatedPrice = 490;
            break;
          case 'location28':
            calculatedPrice = 549;
            break;
          case 'location29':
            calculatedPrice = 582;
            break;
          case 'location30':
            calculatedPrice = 706;
            break;
          case 'location31':
            calculatedPrice = 749;
            break;
          default:
            break;
        }
      } else if (selectedClass === 'class3') {
        switch (locationdropdown2) {
          case 'location1':
          case 'location2':
          case 'location3':
          case 'location4':
          case 'location5':
          case 'location6':
            calculatedPrice = 467;
            break;
          case 'location7':
            calculatedPrice = 235;
            break;
          case 'location8':
            calculatedPrice = 214;
            break;
          case 'location9':
            calculatedPrice = 203;
            break;
          case 'location10':
            calculatedPrice = 146;
            break;
          case 'location11':
            calculatedPrice = 'NO EXIT';
            break;
          case 'location12':
            calculatedPrice = 83;
            break;
          case 'location14':
            calculatedPrice = 142;
            break;
          case 'location15':
            calculatedPrice = 250;
            break;
          case 'location16':
            calculatedPrice = 336;
            break;
          case 'location17':
            calculatedPrice = 439;
            break;
          case 'location18':
            calculatedPrice = 464;
            break;
          case 'location19':
            calculatedPrice = 528;
            break;
          case 'location20':
            calculatedPrice = 1379;
            break;
          case 'location21':
            calculatedPrice = 1116;
            break;
          case 'location22':
            calculatedPrice = 868;
            break;
          case 'location23':
            calculatedPrice = 687;
            break;
          case 'location24':
            calculatedPrice = 550;
            break;
          case 'location25':
            calculatedPrice = 528;
            break;
          case 'location26':
            calculatedPrice = 583;
            break;
          case 'location27':
            calculatedPrice = 603;
            break;
          case 'location28':
            calculatedPrice = 691;
            break;
          case 'location29':
            calculatedPrice = 741;
            break;
          case 'location30':
            calculatedPrice = 927;
            break;
          case 'location31':
            calculatedPrice = 992;
            break;
          default:
            break;
        }
      }
    }


     // SAN SIMON ENTRY POINT (DONE)
     if (
      selectedOption === 'option1' &&
      locationdropdown === 'locationM' &&
      locationdropdown2 &&
      (locationdropdown2 === 'location1' ||
       locationdropdown2 === 'location2' ||
       locationdropdown2 === 'location3' ||
       locationdropdown2 === 'location4' ||
       locationdropdown2 === 'location5' ||
       locationdropdown2 === 'location6' ||
       locationdropdown2 === 'location7' ||
       locationdropdown2 === 'location8' ||
       locationdropdown2 === 'location9' ||
       locationdropdown2 === 'location10' ||
       locationdropdown2 === 'location11' ||
       locationdropdown2 === 'location12' ||
       locationdropdown2 === 'location13' ||
       locationdropdown2 === 'location15' ||
       locationdropdown2 === 'location16' ||
       locationdropdown2 === 'location17' ||
       locationdropdown2 === 'location18' ||
       locationdropdown2 === 'location19' ||
       locationdropdown2 === 'location20' ||
       locationdropdown2 === 'location21' ||
       locationdropdown2 === 'location22' ||
       locationdropdown2 === 'location23' ||
       locationdropdown2 === 'location24' ||
       locationdropdown2 === 'location25' ||
       locationdropdown2 === 'location26' ||
       locationdropdown2 === 'location27' ||
       locationdropdown2 === 'location28' ||
       locationdropdown2 === 'location29' ||
       locationdropdown2 === 'location30' ||
       locationdropdown2 === 'location31')
    ) {
      // Update the price based on the selectedClass and destination
      if (selectedClass === 'class1') {
        switch (locationdropdown2) {
          case 'location1':
          case 'location2':
          case 'location3':
          case 'location4':
          case 'location5':
          case 'location6':
            calculatedPrice = 203;
            break;
          case 'location7':
            calculatedPrice = 126;
            break;
          case 'location8':
            calculatedPrice = 119;
            break;
          case 'location9':
            calculatedPrice = 115;
            break;
          case 'location10':
            calculatedPrice = 96;
            break;
          case 'location11':
            calculatedPrice = 'NO EXIT';
            break;
          case 'location12':
            calculatedPrice = 75;
            break;
          case 'location13':
            calculatedPrice = 47;
            break;
          case 'location15':
            calculatedPrice = 36;
            break;
          case 'location16':
            calculatedPrice = 65;
            break;
          case 'location17':
            calculatedPrice = 99;
            break;
          case 'location18':
            calculatedPrice = 107;
            break;
          case 'location19':
            calculatedPrice = 129;
            break;
          case 'location20':
            calculatedPrice = 413;
            break;
          case 'location21':
            calculatedPrice = 325;
            break;
          case 'location22':
            calculatedPrice = 242;
            break;
          case 'location23':
            calculatedPrice = 182;
            break;
          case 'location24':
            calculatedPrice = 136;
            break;
          case 'location25':
            calculatedPrice = 129;
            break;
          case 'location26':
            calculatedPrice = 147;
            break;
          case 'location27':
            calculatedPrice = 154;
            break;
          case 'location28':
            calculatedPrice = 183;
            break;
          case 'location29':
            calculatedPrice = 200;
            break;
          case 'location30':
            calculatedPrice = 262;
            break;
          case 'location31':
            calculatedPrice = 284;
            break;
          default:
            break;
        }
      } else if (selectedClass === 'class2') {
        switch (locationdropdown2) {
          case 'location1':
          case 'location2':
          case 'location3':
          case 'location4':
          case 'location5':
          case 'location6':
            calculatedPrice = 507;
            break;
          case 'location7':
            calculatedPrice = 314;
            break;
          case 'location8':
            calculatedPrice = 297;
            break;
          case 'location9':
            calculatedPrice = 288;
            break;
          case 'location10':
            calculatedPrice = 240;
            break;
          case 'location11':
            calculatedPrice = 'NO EXIT';
            break;
          case 'location12':
            calculatedPrice = 188;
            break;
          case 'location13':
            calculatedPrice = 118;
            break;
          case 'location15':
            calculatedPrice = 90;
            break;
          case 'location16':
            calculatedPrice = 162;
            break;
          case 'location17':
            calculatedPrice = 247;
            break;
          case 'location18':
            calculatedPrice = 268;
            break;
          case 'location19':
            calculatedPrice = 322;
            break;
          case 'location20':
            calculatedPrice = 906;
            break;
          case 'location21':
            calculatedPrice = 714;
            break;
          case 'location22':
            calculatedPrice = 549;
            break;
          case 'location23':
            calculatedPrice = 428;
            break;
          case 'location24':
            calculatedPrice = 337;
            break;
          case 'location25':
            calculatedPrice = 322;
            break;
          case 'location26':
            calculatedPrice = 358;
            break;
          case 'location27':
            calculatedPrice = 372;
            break;
          case 'location28':
            calculatedPrice = 431;
            break;
          case 'location29':
            calculatedPrice = 464;
            break;
          case 'location30':
            calculatedPrice = 588;
            break;
          case 'location31':
            calculatedPrice = 631;
            break;
          default:
            break;
        }
      } else if (selectedClass === 'class3') {
        switch (locationdropdown2) {
          case 'location1':
          case 'location2':
          case 'location3':
          case 'location4':
          case 'location5':
          case 'location6':
            calculatedPrice = 609;
            break;
          case 'location7':
            calculatedPrice = 377;
            break;
          case 'location8':
            calculatedPrice = 356;
            break;
          case 'location9':
            calculatedPrice = 345;
            break;
          case 'location10':
            calculatedPrice = 288;
            break;
          case 'location11':
            calculatedPrice = 'NO EXIT';
            break;
          case 'location12':
            calculatedPrice = 225;
            break;
          case 'location13':
            calculatedPrice = 142;
            break;
          case 'location15':
            calculatedPrice = 108;
            break;
          case 'location16':
            calculatedPrice = 194;
            break;
          case 'location17':
            calculatedPrice = 297;
            break;
          case 'location18':
            calculatedPrice = 322;
            break;
          case 'location19':
            calculatedPrice = 386;
            break;
          case 'location20':
            calculatedPrice = 1237;
            break;
          case 'location21':
            calculatedPrice = 974;
            break;
          case 'location22':
            calculatedPrice = 726;
            break;
          case 'location23':
            calculatedPrice = 454;
            break;
          case 'location24':
            calculatedPrice = 408;
            break;
          case 'location25':
            calculatedPrice = 386;
            break;
          case 'location26':
            calculatedPrice = 441;
            break;
          case 'location27':
            calculatedPrice = 461;
            break;
          case 'location28':
            calculatedPrice = 549;
            break;
          case 'location29':
            calculatedPrice = 599;
            break;
          case 'location30':
            calculatedPrice = 785;
            break;
          case 'location31':
            calculatedPrice = 850;
            break;
          default:
            break;
        }
      }
    }
    
    
         // SAN FERNANDO ENTRY POINT (DONE)
         if (
          selectedOption === 'option1' &&
          locationdropdown === 'locationN' &&
          locationdropdown2 &&
          (locationdropdown2 === 'location1' ||
           locationdropdown2 === 'location2' ||
           locationdropdown2 === 'location3' ||
           locationdropdown2 === 'location4' ||
           locationdropdown2 === 'location5' ||
           locationdropdown2 === 'location6' ||
           locationdropdown2 === 'location7' ||
           locationdropdown2 === 'location8' ||
           locationdropdown2 === 'location9' ||
           locationdropdown2 === 'location10' ||
           locationdropdown2 === 'location11' ||
           locationdropdown2 === 'location12' ||
           locationdropdown2 === 'location13' ||
           locationdropdown2 === 'location14' ||
           locationdropdown2 === 'location16' ||
           locationdropdown2 === 'location17' ||
           locationdropdown2 === 'location18' ||
           locationdropdown2 === 'location19' ||
           locationdropdown2 === 'location20' ||
           locationdropdown2 === 'location21' ||
           locationdropdown2 === 'location22' ||
           locationdropdown2 === 'location23' ||
           locationdropdown2 === 'location24' ||
           locationdropdown2 === 'location25' ||
           locationdropdown2 === 'location26' ||
           locationdropdown2 === 'location27' ||
           locationdropdown2 === 'location28' ||
           locationdropdown2 === 'location29' ||
           locationdropdown2 === 'location30' ||
           locationdropdown2 === 'location31')
        ) {
          // Update the price based on the selectedClass and destination
          if (selectedClass === 'class1') {
            switch (locationdropdown2) {
              case 'location1':
              case 'location2':
              case 'location3':
              case 'location4':
              case 'location5':
              case 'location6':
                calculatedPrice = 239;
                break;
              case 'location7':
                calculatedPrice = 162;
                break;
              case 'location8':
                calculatedPrice = 155;
                break;
              case 'location9':
                calculatedPrice = 151;
                break;
              case 'location10':
                calculatedPrice = 132;
                break;
              case 'location11':
                calculatedPrice = 'NO EXIT';
                break;
              case 'location12':
                calculatedPrice = 111;
                break;
              case 'location13':
                calculatedPrice = 83;
                break;
              case 'location14':
                calculatedPrice = 36;
                break;
              case 'location16':
                calculatedPrice = 29;
                break;
              case 'location17':
                calculatedPrice = 63;
                break;
              case 'location18':
                calculatedPrice = 71;
                break;
              case 'location19':
                calculatedPrice = 93;
                break;
              case 'location20':
                calculatedPrice = 377;
                break;
              case 'location21':
                calculatedPrice = 289;
                break;
              case 'location22':
                calculatedPrice = 206;
                break;
              case 'location23':
                calculatedPrice = 146;
                break;
              case 'location24':
                calculatedPrice = 100;
                break;
              case 'location25':
                calculatedPrice = 93;
                break;
              case 'location26':
                calculatedPrice = 111;
                break;
              case 'location27':
                calculatedPrice = 118;
                break;
              case 'location28':
                calculatedPrice = 147;
                break;
              case 'location29':
                calculatedPrice = 164;
                break;
              case 'location30':
                calculatedPrice = 226;
                break;
              case 'location31':
                calculatedPrice = 248;
                break;
              default:
                break;
            }
          } else if (selectedClass === 'class2') {
            switch (locationdropdown2) {
              case 'location1':
              case 'location2':
              case 'location3':
              case 'location4':
              case 'location5':
              case 'location6':
                calculatedPrice = 597;
                break;
              case 'location7':
                calculatedPrice = 404;
                break;
              case 'location8':
                calculatedPrice = 387;
                break;
              case 'location9':
                calculatedPrice = 378;
                break;
              case 'location10':
                calculatedPrice = 330;
                break;
              case 'location11':
                calculatedPrice = 'NO EXIT';
                break;
              case 'location12':
                calculatedPrice = 278;
                break;
              case 'location13':
                calculatedPrice = 208;
                break;
              case 'location14':
                calculatedPrice = 90;
                break;
              case 'location16':
                calculatedPrice = 72;
                break;
              case 'location17':
                calculatedPrice = 157;
                break;
              case 'location18':
                calculatedPrice = 178;
                break;
              case 'location19':
                calculatedPrice = 232;
                break;
              case 'location20':
                calculatedPrice = 816;
                break;
              case 'location21':
                calculatedPrice = 624;
                break;
              case 'location22':
                calculatedPrice = 459;
                break;
              case 'location23':
                calculatedPrice = 338;
                break;
              case 'location24':
                calculatedPrice = 247;
                break;
              case 'location25':
                calculatedPrice = 232;
                break;
              case 'location26':
                calculatedPrice = 268;
                break;
              case 'location27':
                calculatedPrice = 282;
                break;
              case 'location28':
                calculatedPrice = 341;
                break;
              case 'location29':
                calculatedPrice = 374;
                break;
              case 'location30':
                calculatedPrice = 498;
                break;
              case 'location31':
                calculatedPrice = 541;
                break;
              default:
                break;
            }
          } else if (selectedClass === 'class3') {
            switch (locationdropdown2) {
              case 'location1':
              case 'location2':
              case 'location3':
              case 'location4':
              case 'location5':
              case 'location6':
                calculatedPrice = 717;
                break;
              case 'location7':
                calculatedPrice = 485;
                break;
              case 'location8':
                calculatedPrice = 464;
                break;
              case 'location9':
                calculatedPrice = 453;
                break;
              case 'location10':
                calculatedPrice = 396;
                break;
              case 'location11':
                calculatedPrice = 'NO EXIT';
                break;
              case 'location12':
                calculatedPrice = 333;
                break;
              case 'location13':
                calculatedPrice = 250;
                break;
              case 'location14':
                calculatedPrice = 108;
                break;
              case 'location16':
                calculatedPrice = 86;
                break;
              case 'location17':
                calculatedPrice = 189;
                break;
              case 'location18':
                calculatedPrice = 214;
                break;
              case 'location19':
                calculatedPrice = 278;
                break;
              case 'location20':
                calculatedPrice = 1129;
                break;
              case 'location21':
                calculatedPrice = 866;
                break;
              case 'location22':
                calculatedPrice = 618;
                break;
              case 'location23':
                calculatedPrice = 437;
                break;
              case 'location24':
                calculatedPrice = 300;
                break;
              case 'location25':
                calculatedPrice = 278;
                break;
              case 'location26':
                calculatedPrice = 333;
                break;
              case 'location27':
                calculatedPrice = 353;
                break;
              case 'location28':
                calculatedPrice = 441;
                break;
              case 'location29':
                calculatedPrice = 491;
                break;
              case 'location30':
                calculatedPrice = 677;
                break;
              case 'location31':
                calculatedPrice = 742;
                break;
              default:
                break;
            }
          }
        }

             // MEXICO ENTRY POINT (DONE)
             if (
              selectedOption === 'option1' &&
              locationdropdown === 'locationO' &&
              locationdropdown2 &&
              (locationdropdown2 === 'location1' ||
               locationdropdown2 === 'location2' ||
               locationdropdown2 === 'location3' ||
               locationdropdown2 === 'location4' ||
               locationdropdown2 === 'location5' ||
               locationdropdown2 === 'location6' ||
               locationdropdown2 === 'location7' ||
               locationdropdown2 === 'location8' ||
               locationdropdown2 === 'location9' ||
               locationdropdown2 === 'location10' ||
               locationdropdown2 === 'location11' ||
               locationdropdown2 === 'location12' ||
               locationdropdown2 === 'location13' ||
               locationdropdown2 === 'location14' ||
               locationdropdown2 === 'location15' ||
               locationdropdown2 === 'location17' ||
               locationdropdown2 === 'location18' ||
               locationdropdown2 === 'location19' ||
               locationdropdown2 === 'location20' ||
               locationdropdown2 === 'location21' ||
               locationdropdown2 === 'location22' ||
               locationdropdown2 === 'location23' ||
               locationdropdown2 === 'location24' ||
               locationdropdown2 === 'location25' ||
               locationdropdown2 === 'location26' ||
               locationdropdown2 === 'location27' ||
               locationdropdown2 === 'location28' ||
               locationdropdown2 === 'location29' ||
               locationdropdown2 === 'location30' ||
               locationdropdown2 === 'location31')
            ) {
              // Update the price based on the selectedClass and destination
              if (selectedClass === 'class1') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 268;
                    break;
                  case 'location7':
                    calculatedPrice = 190;
                    break;
                  case 'location8':
                    calculatedPrice = 184;
                    break;
                  case 'location9':
                    calculatedPrice = 180;
                    break;
                  case 'location10':
                    calculatedPrice = 161;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 140;
                    break;
                  case 'location13':
                    calculatedPrice = 112;
                    break;
                  case 'location14':
                    calculatedPrice = 65;
                    break;
                  case 'location15':
                    calculatedPrice = 29;
                    break;
                  case 'location17':
                    calculatedPrice = 34;
                    break;
                  case 'location18':
                    calculatedPrice = 43;
                    break;
                  case 'location19':
                    calculatedPrice = 64;
                    break;
                  case 'location20':
                    calculatedPrice = 348;
                    break;
                  case 'location21':
                    calculatedPrice = 260;
                    break;
                  case 'location22':
                    calculatedPrice = 177;
                    break;
                  case 'location23':
                    calculatedPrice = 117;
                    break;
                  case 'location24':
                    calculatedPrice = 71;
                    break;
                  case 'location25':
                    calculatedPrice = 64;
                    break;
                  case 'location26':
                    calculatedPrice = 82;
                    break;
                  case 'location27':
                    calculatedPrice = 89;
                    break;
                  case 'location28':
                    calculatedPrice = 118;
                    break;
                  case 'location29':
                    calculatedPrice = 135;
                    break;
                  case 'location30':
                    calculatedPrice = 197;
                    break;
                  case 'location31':
                    calculatedPrice = 219;
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class2') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 669;
                    break;
                  case 'location7':
                    calculatedPrice = 476;
                    break;
                  case 'location8':
                    calculatedPrice = 459;
                    break;
                  case 'location9':
                    calculatedPrice = 450;
                    break;
                  case 'location10':
                    calculatedPrice = 402;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 349;
                    break;
                  case 'location13':
                    calculatedPrice = 280;
                    break;
                  case 'location14':
                    calculatedPrice = 162;
                    break;
                  case 'location15':
                    calculatedPrice = 72;
                    break;
                  case 'location17':
                    calculatedPrice = 86;
                    break;
                  case 'location18':
                    calculatedPrice = 106;
                    break;
                  case 'location19':
                    calculatedPrice = 160;
                    break;
                  case 'location20':
                    calculatedPrice = 744;
                    break;
                  case 'location21':
                    calculatedPrice = 552;
                    break;
                  case 'location22':
                    calculatedPrice = 387;
                    break;
                  case 'location23':
                    calculatedPrice = 226;
                    break;
                  case 'location24':
                    calculatedPrice = 175;
                    break;
                  case 'location25':
                    calculatedPrice = 160;
                    break;
                  case 'location26':
                    calculatedPrice = 196;
                    break;
                  case 'location27':
                    calculatedPrice = 210;
                    break;
                  case 'location28':
                    calculatedPrice = 269;
                    break;
                  case 'location29':
                    calculatedPrice = 302;
                    break;
                  case 'location30':
                    calculatedPrice = 426;
                    break;
                  case 'location31':
                    calculatedPrice = 469;
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class3') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 803;
                    break;
                  case 'location7':
                    calculatedPrice = 571;
                    break;
                  case 'location8':
                    calculatedPrice = 551;
                    break;
                  case 'location9':
                    calculatedPrice = 540;
                    break;
                  case 'location10':
                    calculatedPrice = 482;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 419;
                    break;
                  case 'location13':
                    calculatedPrice = 336;
                    break;
                  case 'location14':
                    calculatedPrice = 194;
                    break;
                  case 'location15':
                    calculatedPrice = 86;
                    break;
                  case 'location17':
                    calculatedPrice = 103;
                    break;
                  case 'location18':
                    calculatedPrice = 128;
                    break;
                  case 'location19':
                    calculatedPrice = 192;
                    break;
                  case 'location20':
                    calculatedPrice = 1043;
                    break;
                  case 'location21':
                    calculatedPrice = 780;
                    break;
                  case 'location22':
                    calculatedPrice = 532;
                    break;
                  case 'location23':
                    calculatedPrice = 351;
                    break;
                  case 'location24':
                    calculatedPrice = 214;
                    break;
                  case 'location25':
                    calculatedPrice = 192;
                    break;
                  case 'location26':
                    calculatedPrice = 247;
                    break;
                  case 'location27':
                    calculatedPrice = 267;
                    break;
                  case 'location28':
                    calculatedPrice = 355;
                    break;
                  case 'location29':
                    calculatedPrice = 405;
                    break;
                  case 'location30':
                    calculatedPrice = 591;
                    break;
                  case 'location31':
                    calculatedPrice = 656;
                    break;
                  default:
                    break;
                }
              }
            }


             // ANGELES ENTRY POINT (DONE)
             if (
              selectedOption === 'option1' &&
              locationdropdown === 'locationP' &&
              locationdropdown2 &&
              (locationdropdown2 === 'location1' ||
               locationdropdown2 === 'location2' ||
               locationdropdown2 === 'location3' ||
               locationdropdown2 === 'location4' ||
               locationdropdown2 === 'location5' ||
               locationdropdown2 === 'location6' ||
               locationdropdown2 === 'location7' ||
               locationdropdown2 === 'location8' ||
               locationdropdown2 === 'location9' ||
               locationdropdown2 === 'location10' ||
               locationdropdown2 === 'location11' ||
               locationdropdown2 === 'location12' ||
               locationdropdown2 === 'location13' ||
               locationdropdown2 === 'location14' ||
               locationdropdown2 === 'location15' ||
               locationdropdown2 === 'location16' ||
               locationdropdown2 === 'location18' ||
               locationdropdown2 === 'location19' ||
               locationdropdown2 === 'location20' ||
               locationdropdown2 === 'location21' ||
               locationdropdown2 === 'location22' ||
               locationdropdown2 === 'location23' ||
               locationdropdown2 === 'location24' ||
               locationdropdown2 === 'location25' ||
               locationdropdown2 === 'location26' ||
               locationdropdown2 === 'location27' ||
               locationdropdown2 === 'location28' ||
               locationdropdown2 === 'location29' ||
               locationdropdown2 === 'location30' ||
               locationdropdown2 === 'location31')
            ) {
              // Update the price based on the selectedClass and destination
              if (selectedClass === 'class1') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 302;
                    break;
                  case 'location7':
                    calculatedPrice = 225;
                    break;
                  case 'location8':
                    calculatedPrice = 218;
                    break;
                  case 'location9':
                    calculatedPrice = 214;
                    break;
                  case 'location10':
                    calculatedPrice = 195;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 174;
                    break;
                  case 'location13':
                    calculatedPrice = 146;
                    break;
                  case 'location14':
                    calculatedPrice = 99;
                    break;
                  case 'location15':
                    calculatedPrice = 63;
                    break;
                  case 'location16':
                    calculatedPrice = 34;
                    break;
                  case 'location18':
                    calculatedPrice = 8;
                    break;
                  case 'location19':
                    calculatedPrice = 30;
                    break;
                  case 'location20':
                    calculatedPrice = 314;
                    break;
                  case 'location21':
                    calculatedPrice = 226;
                    break;
                  case 'location22':
                    calculatedPrice = 143;
                    break;
                  case 'location23':
                    calculatedPrice = 83;
                    break;
                  case 'location24':
                    calculatedPrice = 37;
                    break;
                  case 'location25':
                    calculatedPrice = 30;
                    break;
                  case 'location26':
                    calculatedPrice = 48;
                    break;
                  case 'location27':
                    calculatedPrice = 55;
                    break;
                  case 'location28':
                    calculatedPrice = 84;
                    break;
                  case 'location29':
                    calculatedPrice = 101;
                    break;
                  case 'location30':
                    calculatedPrice = 163;
                    break;
                  case 'location31':
                    calculatedPrice = 185;
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class2') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 755;
                    break;
                  case 'location7':
                    calculatedPrice = 561;
                    break;
                  case 'location8':
                    calculatedPrice = 544;
                    break;
                  case 'location9':
                    calculatedPrice = 535;
                    break;
                  case 'location10':
                    calculatedPrice = 487;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 435;
                    break;
                  case 'location13':
                    calculatedPrice = 366;
                    break;
                  case 'location14':
                    calculatedPrice = 247;
                    break;
                  case 'location15':
                    calculatedPrice = 157;
                    break;
                  case 'location16':
                    calculatedPrice = 86;
                    break;
                  case 'location18':
                    calculatedPrice = 21;
                    break;
                  case 'location19':
                    calculatedPrice = 74;
                    break;
                  case 'location20':
                    calculatedPrice = 658;
                    break;
                  case 'location21':
                    calculatedPrice = 466;
                    break;
                  case 'location22':
                    calculatedPrice = 301;
                    break;
                  case 'location23':
                    calculatedPrice = 180;
                    break;
                  case 'location24':
                    calculatedPrice = 89;
                    break;
                  case 'location25':
                    calculatedPrice = 74;
                    break;
                  case 'location26':
                    calculatedPrice = 110;
                    break;
                  case 'location27':
                    calculatedPrice = 124;
                    break;
                  case 'location28':
                    calculatedPrice = 183;
                    break;
                  case 'location29':
                    calculatedPrice = 216;
                    break;
                  case 'location30':
                    calculatedPrice = 340;
                    break;
                  case 'location31':
                    calculatedPrice = 383;
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class3') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 905;
                    break;
                  case 'location7':
                    calculatedPrice = 674;
                    break;
                  case 'location8':
                    calculatedPrice = 653;
                    break;
                  case 'location9':
                    calculatedPrice = 642;
                    break;
                  case 'location10':
                    calculatedPrice = 585;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 522;
                    break;
                  case 'location13':
                    calculatedPrice = 439;
                    break;
                  case 'location14':
                    calculatedPrice = 297;
                    break;
                  case 'location15':
                    calculatedPrice = 189;
                    break;
                  case 'location16':
                    calculatedPrice = 103;
                    break;
                  case 'location18':
                    calculatedPrice = 25;
                    break;
                  case 'location19':
                    calculatedPrice = 89;
                    break;
                  case 'location20':
                    calculatedPrice = 940;
                    break;
                  case 'location21':
                    calculatedPrice = 677;
                    break;
                  case 'location22':
                    calculatedPrice = 429;
                    break;
                  case 'location23':
                    calculatedPrice = 248;
                    break;
                  case 'location24':
                    calculatedPrice = 111;
                    break;
                  case 'location25':
                    calculatedPrice = 89;
                    break;
                  case 'location26':
                    calculatedPrice = 144;
                    break;
                  case 'location27':
                    calculatedPrice = 164;
                    break;
                  case 'location28':
                    calculatedPrice = 252;
                    break;
                  case 'location29':
                    calculatedPrice = 302;
                    break;
                  case 'location30':
                    calculatedPrice = 488;
                    break;
                  case 'location31':
                    calculatedPrice = 553;
                    break;
                  default:
                    break;
                }
              }
            }


             // DAU ENTRY POINT (DONE)
             if (
              selectedOption === 'option1' &&
              locationdropdown === 'locationQ' &&
              locationdropdown2 &&
              (locationdropdown2 === 'location1' ||
               locationdropdown2 === 'location2' ||
               locationdropdown2 === 'location3' ||
               locationdropdown2 === 'location4' ||
               locationdropdown2 === 'location5' ||
               locationdropdown2 === 'location6' ||
               locationdropdown2 === 'location7' ||
               locationdropdown2 === 'location8' ||
               locationdropdown2 === 'location9' ||
               locationdropdown2 === 'location10' ||
               locationdropdown2 === 'location11' ||
               locationdropdown2 === 'location12' ||
               locationdropdown2 === 'location13' ||
               locationdropdown2 === 'location14' ||
               locationdropdown2 === 'location15' ||
               locationdropdown2 === 'location16' ||
               locationdropdown2 === 'location17' ||
               locationdropdown2 === 'location19' ||
               locationdropdown2 === 'location20' ||
               locationdropdown2 === 'location21' ||
               locationdropdown2 === 'location22' ||
               locationdropdown2 === 'location23' ||
               locationdropdown2 === 'location24' ||
               locationdropdown2 === 'location25' ||
               locationdropdown2 === 'location26' ||
               locationdropdown2 === 'location27' ||
               locationdropdown2 === 'location28' ||
               locationdropdown2 === 'location29' ||
               locationdropdown2 === 'location30' ||
               locationdropdown2 === 'location31')
            ) {
              // Update the price based on the selectedClass and destination
              if (selectedClass === 'class1') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 310;
                    break;
                  case 'location7':
                    calculatedPrice = 233;
                    break;
                  case 'location8':
                    calculatedPrice = 226;
                    break;
                  case 'location9':
                    calculatedPrice = 222;
                    break;
                  case 'location10':
                    calculatedPrice = 203;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 182;
                    break;
                  case 'location13':
                    calculatedPrice = 155;
                    break;
                  case 'location14':
                    calculatedPrice = 107;
                    break;
                  case 'location15':
                    calculatedPrice = 71;
                    break;
                  case 'location16':
                    calculatedPrice = 43;
                    break;
                  case 'location17':
                    calculatedPrice = 8;
                    break;
                  case 'location19':
                    calculatedPrice = 21;
                    break;
                  case 'location20':
                    calculatedPrice = 305;
                    break;
                  case 'location21':
                    calculatedPrice = 217;
                    break;
                  case 'location22':
                    calculatedPrice = 134;
                    break;
                  case 'location23':
                    calculatedPrice = 74;
                    break;
                  case 'location24':
                    calculatedPrice = 28;
                    break;
                  case 'location25':
                    calculatedPrice = 21;
                    break;
                  case 'location26':
                    calculatedPrice = 39;
                    break;
                  case 'location27':
                    calculatedPrice = 46;
                    break;
                  case 'location28':
                    calculatedPrice = 75;
                    break;
                  case 'location29':
                    calculatedPrice = 92;
                    break;
                  case 'location30':
                    calculatedPrice = 154;
                    break;
                  case 'location31':
                    calculatedPrice = 176;
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class2') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 775;
                    break;
                  case 'location7':
                    calculatedPrice = 582;
                    break;
                  case 'location8':
                    calculatedPrice = 565;
                    break;
                  case 'location9':
                    calculatedPrice = 556;
                    break;
                  case 'location10':
                    calculatedPrice = 508;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 456;
                    break;
                  case 'location13':
                    calculatedPrice = 386;
                    break;
                  case 'location14':
                    calculatedPrice = 268;
                    break;
                  case 'location15':
                    calculatedPrice = 178;
                    break;
                  case 'location16':
                    calculatedPrice = 106;
                    break;
                  case 'location17':
                    calculatedPrice = 21;
                    break;
                  case 'location19':
                    calculatedPrice = 54;
                    break;
                  case 'location20':
                    calculatedPrice = 638;
                    break;
                  case 'location21':
                    calculatedPrice = 446;
                    break;
                  case 'location22':
                    calculatedPrice = 281;
                    break;
                  case 'location23':
                    calculatedPrice = 160;
                    break;
                  case 'location24':
                    calculatedPrice = 69;
                    break;
                  case 'location25':
                    calculatedPrice = 54;
                    break;
                  case 'location26':
                    calculatedPrice = 90;
                    break;
                  case 'location27':
                    calculatedPrice = 104;
                    break;
                  case 'location28':
                    calculatedPrice = 163;
                    break;
                  case 'location29':
                    calculatedPrice = 196;
                    break;
                  case 'location30':
                    calculatedPrice = 320;
                    break;
                  case 'location31':
                    calculatedPrice = 363;
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class3') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 930;
                    break;
                  case 'location7':
                    calculatedPrice = 699;
                    break;
                  case 'location8':
                    calculatedPrice = 678;
                    break;
                  case 'location9':
                    calculatedPrice = 667;
                    break;
                  case 'location10':
                    calculatedPrice = 610;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 547;
                    break;
                  case 'location13':
                    calculatedPrice = 464;
                    break;
                  case 'location14':
                    calculatedPrice = 322;
                    break;
                  case 'location15':
                    calculatedPrice = 214;
                    break;
                  case 'location16':
                    calculatedPrice = 128;
                    break;
                  case 'location17':
                    calculatedPrice = 25;
                    break;
                  case 'location19':
                    calculatedPrice = 64;
                    break;
                  case 'location20':
                    calculatedPrice = 915;
                    break;
                  case 'location21':
                    calculatedPrice = 652;
                    break;
                  case 'location22':
                    calculatedPrice = 404;
                    break;
                  case 'location23':
                    calculatedPrice = 223;
                    break;
                  case 'location24':
                    calculatedPrice = 86;
                    break;
                  case 'location25':
                    calculatedPrice = 64;
                    break;
                  case 'location26':
                    calculatedPrice = 119;
                    break;
                  case 'location27':
                    calculatedPrice = 139;
                    break;
                  case 'location28':
                    calculatedPrice = 227;
                    break;
                  case 'location29':
                    calculatedPrice = 277;
                    break;
                  case 'location30':
                    calculatedPrice = 463;
                    break;
                  case 'location31':
                    calculatedPrice = 528;
                    break;
                  default:
                    break;
                }
              }
            }


             // STA. INES ENTRY POINT (DONE)
             if (
              selectedOption === 'option1' &&
              locationdropdown === 'locationR' &&
              locationdropdown2 &&
              (locationdropdown2 === 'location1' ||
               locationdropdown2 === 'location2' ||
               locationdropdown2 === 'location3' ||
               locationdropdown2 === 'location4' ||
               locationdropdown2 === 'location5' ||
               locationdropdown2 === 'location6' ||
               locationdropdown2 === 'location7' ||
               locationdropdown2 === 'location8' ||
               locationdropdown2 === 'location9' ||
               locationdropdown2 === 'location10' ||
               locationdropdown2 === 'location11' ||
               locationdropdown2 === 'location12' ||
               locationdropdown2 === 'location13' ||
               locationdropdown2 === 'location14' ||
               locationdropdown2 === 'location15' ||
               locationdropdown2 === 'location16' ||
               locationdropdown2 === 'location17' ||
               locationdropdown2 === 'location18' ||
               locationdropdown2 === 'location20' ||
               locationdropdown2 === 'location21' ||
               locationdropdown2 === 'location22' ||
               locationdropdown2 === 'location23' ||
               locationdropdown2 === 'location24' ||
               locationdropdown2 === 'location25' ||
               locationdropdown2 === 'location26' ||
               locationdropdown2 === 'location27' ||
               locationdropdown2 === 'location28' ||
               locationdropdown2 === 'location29' ||
               locationdropdown2 === 'location30' ||
               locationdropdown2 === 'location31')
            ) {
              // Update the price based on the selectedClass and destination
              if (selectedClass === 'class1') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 332;
                    break;
                  case 'location7':
                    calculatedPrice = 254;
                    break;
                  case 'location8':
                    calculatedPrice = 248;
                    break;
                  case 'location9':
                    calculatedPrice = 244;
                    break;
                  case 'location10':
                    calculatedPrice = 225;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 204;
                    break;
                  case 'location13':
                    calculatedPrice = 176;
                    break;
                  case 'location14':
                    calculatedPrice = 129;
                    break;
                  case 'location15':
                    calculatedPrice = 93;
                    break;
                  case 'location16':
                    calculatedPrice = 64;
                    break;
                  case 'location17':
                    calculatedPrice = 30;
                    break;
                  case 'location18':
                    calculatedPrice = 21;
                    break;
                  case 'location20':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location21':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location22':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location23':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location24':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location25':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location26':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location27':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location28':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location29':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location30':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location31':
                    calculatedPrice = 'NO EXIT';
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class2') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 829;
                    break;
                  case 'location7':
                    calculatedPrice = 636;
                    break;
                  case 'location8':
                    calculatedPrice = 619;
                    break;
                  case 'location9':
                    calculatedPrice = 610;
                    break;
                  case 'location10':
                    calculatedPrice = 562;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 509;
                    break;
                  case 'location13':
                    calculatedPrice = 440;
                    break;
                  case 'location14':
                    calculatedPrice = 322;
                    break;
                  case 'location15':
                    calculatedPrice = 232;
                    break;
                  case 'location16':
                    calculatedPrice = 160;
                    break;
                  case 'location17':
                    calculatedPrice = 74;
                    break;
                  case 'location18':
                    calculatedPrice = 54;
                    break;
                  case 'location20':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location21':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location22':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location23':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location24':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location25':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location26':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location27':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location28':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location29':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location30':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location31':
                    calculatedPrice = 'NO EXIT';
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class3') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 995;
                    break;
                  case 'location7':
                    calculatedPrice = 763;
                    break;
                  case 'location8':
                    calculatedPrice = 743;
                    break;
                  case 'location9':
                    calculatedPrice = 732;
                    break;
                  case 'location10':
                    calculatedPrice = 674;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 611;
                    break;
                  case 'location13':
                    calculatedPrice = 528;
                    break;
                  case 'location14':
                    calculatedPrice = 386;
                    break;
                  case 'location15':
                    calculatedPrice = 278;
                    break;
                  case 'location16':
                    calculatedPrice = 192;
                    break;
                  case 'location17':
                    calculatedPrice = 89;
                    break;
                  case 'location18':
                    calculatedPrice = 64;
                    break;
                  case 'location20':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location21':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location22':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location23':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location24':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location25':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location26':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location27':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location28':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location29':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location30':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location31':
                    calculatedPrice = 'NO EXIT';
                    break;
                  default:
                    break;
                }
              }
            }


             // STA. INES ENTRY POINT (DONE)
             if (
              selectedOption === 'option1' &&
              locationdropdown === 'locationS' &&
              locationdropdown2 &&
              (locationdropdown2 === 'location1' ||
               locationdropdown2 === 'location2' ||
               locationdropdown2 === 'location3' ||
               locationdropdown2 === 'location4' ||
               locationdropdown2 === 'location5' ||
               locationdropdown2 === 'location6' ||
               locationdropdown2 === 'location7' ||
               locationdropdown2 === 'location8' ||
               locationdropdown2 === 'location9' ||
               locationdropdown2 === 'location10' ||
               locationdropdown2 === 'location11' ||
               locationdropdown2 === 'location12' ||
               locationdropdown2 === 'location13' ||
               locationdropdown2 === 'location14' ||
               locationdropdown2 === 'location15' ||
               locationdropdown2 === 'location16' ||
               locationdropdown2 === 'location17' ||
               locationdropdown2 === 'location18' ||
               locationdropdown2 === 'location19' ||
               locationdropdown2 === 'location20' ||
               locationdropdown2 === 'location21' ||
               locationdropdown2 === 'location22' ||
               locationdropdown2 === 'location23' ||
               locationdropdown2 === 'location24' ||
               locationdropdown2 === 'location25' ||
               locationdropdown2 === 'location26' ||
               locationdropdown2 === 'location27' ||
               locationdropdown2 === 'location28' ||
               locationdropdown2 === 'location29' ||
               locationdropdown2 === 'location30' ||
               locationdropdown2 === 'location31')
            ) {
              // Update the price based on the selectedClass and destination
              if (selectedClass === 'class1') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 616;
                    break;
                  case 'location7':
                    calculatedPrice = 538;
                    break;
                  case 'location8':
                    calculatedPrice = 532;
                    break;
                  case 'location9':
                    calculatedPrice = 528;
                    break;
                  case 'location10':
                    calculatedPrice = 509;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 488;
                    break;
                  case 'location13':
                    calculatedPrice = 460;
                    break;
                  case 'location14':
                    calculatedPrice = 413;
                    break;
                  case 'location15':
                    calculatedPrice = 377;
                    break;
                  case 'location16':
                    calculatedPrice = 348;
                    break;
                  case 'location17':
                    calculatedPrice = 314;
                    break;
                  case 'location18':
                    calculatedPrice = 305;
                    break;
                  case 'location19':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location20':
                    calculatedPrice = 35;
                    break;
                  case 'location21':
                    calculatedPrice = 88;
                    break;
                  case 'location22':
                    calculatedPrice = 171;
                    break;
                  case 'location23':
                    calculatedPrice = 231;
                    break;
                  case 'location24':
                    calculatedPrice = 277;
                    break;
                  case 'location25':
                    calculatedPrice = 284;
                    break;
                  case 'location26':
                    calculatedPrice = 302;
                    break;
                  case 'location27':
                    calculatedPrice = 309;
                    break;
                  case 'location28':
                    calculatedPrice = 338;
                    break;
                  case 'location29':
                    calculatedPrice = 355;
                    break;
                  case 'location30':
                    calculatedPrice = 417;
                    break;
                  case 'location31':
                    calculatedPrice = 439;
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class2') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 1413;
                    break;
                  case 'location7':
                    calculatedPrice = 1220;
                    break;
                  case 'location8':
                    calculatedPrice = 1203;
                    break;
                  case 'location9':
                    calculatedPrice = 1194;
                    break;
                  case 'location10':
                    calculatedPrice = 1146;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 1093;
                    break;
                  case 'location13':
                    calculatedPrice = 1024;
                    break;
                  case 'location14':
                    calculatedPrice = 906;
                    break;
                  case 'location15':
                    calculatedPrice = 816;
                    break;
                  case 'location16':
                    calculatedPrice = 744;
                    break;
                  case 'location17':
                    calculatedPrice = 658;
                    break;
                  case 'location18':
                    calculatedPrice = 638;
                    break;
                  case 'location19':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location20':
                      calculatedPrice = 86;
                    break;
                  case 'location21':
                    calculatedPrice = 192;
                    break;
                  case 'location22':
                    calculatedPrice = 357;
                    break;
                  case 'location23':
                    calculatedPrice = 478;
                    break;
                  case 'location24':
                    calculatedPrice = 569;
                    break;
                  case 'location25':
                    calculatedPrice = 584;
                    break;
                  case 'location26':
                    calculatedPrice = 620;
                    break;
                  case 'location27':
                    calculatedPrice = 634;
                    break;
                  case 'location28':
                    calculatedPrice = 693;
                    break;
                  case 'location29':
                    calculatedPrice = 726;
                    break;
                  case 'location30':
                    calculatedPrice = 850;
                    break;
                  case 'location31':
                    calculatedPrice = 893;
                    break;
                  default:
                    break;
                }
              } else if (selectedClass === 'class3') {
                switch (locationdropdown2) {
                  case 'location1':
                  case 'location2':
                  case 'location3':
                  case 'location4':
                  case 'location5':
                  case 'location6':
                    calculatedPrice = 1967;
                    break;
                  case 'location7':
                    calculatedPrice = 1735;
                    break;
                  case 'location8':
                    calculatedPrice = 1715;
                    break;
                  case 'location9':
                    calculatedPrice = 1704;
                    break;
                  case 'location10':
                    calculatedPrice = 1646;
                    break;
                  case 'location11':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location12':
                    calculatedPrice = 1583;
                    break;
                  case 'location13':
                    calculatedPrice = 1500;
                    break;
                  case 'location14':
                    calculatedPrice = 1358;
                    break;
                  case 'location15':
                    calculatedPrice = 1250;
                    break;
                  case 'location16':
                    calculatedPrice = 1164;
                    break;
                  case 'location17':
                    calculatedPrice = 1061;
                    break;
                  case 'location18':
                    calculatedPrice = 1036;
                    break;
                  case 'location19':
                    calculatedPrice = 'NO EXIT';
                    break;
                  case 'location20':
                    calculatedPrice = 104;
                    break; 
                  case 'location21':
                    calculatedPrice = 104;
                    break;
                  case 'location22':
                    calculatedPrice = 289;
                    break;
                  case 'location23':
                    calculatedPrice = 577;
                    break;
                  case 'location24':
                    calculatedPrice = 788;
                    break;
                  case 'location25':
                    calculatedPrice = 946;
                    break;
                  case 'location26':
                    calculatedPrice = 972;
                    break;
                  case 'location27':
                    calculatedPrice = 1036;
                    break;
                  case 'location28':
                    calculatedPrice = 1059;
                    break;
                  case 'location29':
                    calculatedPrice = 1219;
                    break;
                  case 'location30':
                    calculatedPrice = 1436;
                    break;
                  case 'location31':
                    calculatedPrice = 1511;
                    break;
                  default:
                    break;
                }
              }
            }



    // Set the calculated price
    let priceText;
    if (calculatedPrice === 'NO EXIT' || 'N/A') {
      priceText = calculatedPrice;
    } else {
      priceText = `₱${calculatedPrice.toLocaleString('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    }
    setPrice(priceText);
  };

  const handleNewFunction = () => {
    // Reset form state and set the flag to start a new function
    setSelectedOption('');
    setlocationdropdown('');
    setlocationdropdown2('');
    setVehicleDropdown('');
    setSelectedClass('');
    setPrice(null);
    
  };

  
  const containerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#fce4ec', // Light pink background
    transition: 'background-color 0.3s ease-in-out',
    animation: 'fadeIn 0.5s ease-in-out',
  };
  
  const formStyle = {
    position: 'relative',
    width: '300px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(236, 64, 122, 0.3)', // Light pink shadow
    marginTop: '20px',
    transition: 'box-shadow 0.3s ease-in-out, border-color 0.5s ease-in-out',
    animation: `
      fadeInUp 0.5s ease-in-out,
      moveBorder 2s infinite
    `, // Applied animation for border
  };
  
  const labelStyle = {
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#ec407a', // Pink text
    transition: 'color 0.3s ease-in-out',
  };
  
  const selectStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
    border: '2px solid #ec407a', // Pink border
    borderRadius: '4px',
    transition: 'border-color 0.3s ease-in-out',
  };
  
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
    animation: 'fadeInUp 0.5s ease-in-out',
    ':hover': {
      backgroundColor: '#388e3c', // Dark green on hover
    },
  };
  
  const priceStyle = {
    marginTop: '20px',
    fontWeight: 'bold',
    color: '#4CAF50',
    transition: 'color 0.3s ease-in-out',
    animation: price ? 'fadeInUp 0.5s ease-in-out' : '',
  };
  
  const newFunctionButtonStyle = {
    backgroundColor: '#00bcd4', // Light blue
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: price ? 'block' : 'none',
    transition: 'background-color 0.3s ease-in-out',
    animation: 'fadeInUp 0.5s ease-in-out',
    ':hover': {
      backgroundColor: '#0097a7', // Dark blue on hover
    },
  };
  
  // Apply styles to your components using the above objects
  

  return (
    <div style={containerStyle} className='container'>
      <div style={formStyle} className='form'>
        <label style={labelStyle}>Select EXPRESSWAY:</label>
        <select style={selectStyle} value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select...</option>
          <option value="option1">SCTEX/NLEX</option>
        </select>

        {selectedOption && (
          <div>
            <label style={labelStyle}>FROM</label>
            <select style={selectStyle} value={locationdropdown} onChange={handlelocationdropdownChange}>
              <option value="">Select...</option>
              <option value="locationA">Mindanao Avenue</option>
              <option value="locationB">Karuhatan</option>
              <option value="locationC">Valenzuela</option>
              <option value="locationD">Lawang Bato</option>
              <option value="locationE">Meycauayan</option>
              <option value="locationF">Marilao</option>
              <option value="locationG">Ciudad de Victoria</option>
              <option value="locationH">Bocaue</option>
              <option value="locationI">Tambubong</option>
              <option value="locationJ">Balagtas</option>
              <option value="locationK">Tabang</option>
              <option value="locationL">Sta. Rita</option>
              <option value="locationM">Pulilan</option>
              <option value="locationN">San Simon</option>
              <option value="locationO">San Fernando</option>
              <option value="locationP">Mexico</option>
              <option value="locationQ">Angeles</option>
              <option value="locationR">Dau</option>
              <option value="locationS">Sta. Ines</option>
              <option value="locationT">Tipo/SFEX</option>
              <option value="locationU">Dinalupihan</option>
              <option value="locationV">Floridablanca</option>
              <option value="locationW">Porac</option>
              <option value="locationX">Clark South</option>
              <option value="locationY">Mabalacat (Mabiga)</option>
              <option value="locationZ">Clark North</option>
              <option value="locationA1">Dolores</option>
              <option value="locationB1">Concepcion</option>
              <option value="locationC1">San Miguel</option>
              <option value="locationD1">Tarlac</option>
              <option value="locationE1">Balintawak</option>
              

            </select>
            <label style={labelStyle}>TO</label>
            <select style={selectStyle} value={locationdropdown2} onChange={handlelocationdropdown2Change}>
              <option value="">Select...</option>
              <option value="location1">Balintawak</option>
              <option value="location2">Mindanao Avenue</option>
              <option value="location3">Karuhatan</option>
              <option value="location4">Valenzuela</option>
              <option value="location5">Lawang Bato</option>
              <option value="location6">Meycauayan</option>
              <option value="location7">Marilao</option>
              <option value="location8">Ciudad de Victoria</option>
              <option value="location9">Bocaue</option>
              <option value="location10">Tambubong</option>
              <option value="location11">Balagtas</option>
              <option value="location12">Tabang</option>
              <option value="location13">Sta. Rita</option>
              <option value="location14">Pulilan</option>
              <option value="location15">San Simon</option>
              <option value="location16">San Fernando</option>
              <option value="location17">Mexico</option>
              <option value="location18">Angeles</option>
              <option value="location19">Dau</option>
              <option value="location20">Sta. Ines</option>
              <option value="location21">Tipo/SFEX</option>
              <option value="location22">Dinalupihan</option>
              <option value="location23">Floridablanca</option>
              <option value="location24">Porac</option>
              <option value="location25">Clark South</option>
              <option value="location26">Mabalacat (Mabiga)</option>
              <option value="location27">Clark North</option>
              <option value="location28">Dolores</option>
              <option value="location29">Concepcion</option>
              <option value="location30">San Miguel</option>
              <option value="location31">Tarlac</option>
            </select>
          </div>
        )}

        {locationdropdown2 && (
          <div>
            <label style={labelStyle}>Select a class:</label>
            <select style={selectStyle} value={selectedClass} onChange={handleClassChange}>
              <option value="">Select...</option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
            </select>
          </div>
        )}

        {selectedClass && (
          <div>
            <label style={labelStyle}>Select a vehicle:</label>
            <select style={selectStyle} value={vehicleDropdown} onChange={handleVehicleDropdownChange}>
              <option value="">Select...</option>
              {selectedClass === 'class1' && (
                <>
                  <option value="Car">Car</option>
                  <option value="Van">Van</option>
                  <option value="Motorcycle">Motorcycle</option>
                  <option value="Jeepney">Jeepney</option>
                  <option value="Pick-up">Pick-up</option>
                </>
              )}
              {selectedClass === 'class2' && (
                <>
                  <option value="Bus">Bus</option>
                  <option value="Truck">Truck</option>
                </>
              )}
              {selectedClass === 'class3' && (
                <>
                  <option value="Large Truck">Large Truck</option>
                  <option value="Large Truck with Trailer">Large Truck with Trailer</option>
                </>
              )}
            </select>
          </div>
        )}

        {vehicleDropdown && (
          <div>
            <button style={buttonStyle} onClick={handleSubmit} className='submit'>
              Submit
            </button>
          </div>
        )}
      </div>

      {price && (
        <p style={priceStyle} className='price'>
          Price: {price}
        </p>
      )}

      <button style={newFunctionButtonStyle} onClick={handleNewFunction} className='newFunctionButton'>
        Ulitin mo ba?
      </button>
      <img
        src="https://th.bing.com/th/id/OIP.cGDCkyqbDQ0i1cpN-4J5UAHaHa?rs=1&pid=ImgDetMain"  
        alt="Lelouch Lamperouge"
        style={{ width: '100px', borderRadius: '50%', marginTop: '20px'}}
         className="responsive-image"
      />
    </div>
    
  );
};

export default DropdownMenuWithInputsAndVehiclesAndSubmit;
