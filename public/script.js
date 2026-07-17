const submit_button = document.getElementById("submit-btn");
const vin = document.getElementById("vin-input");
const warning_message = document.getElementById("warning-message");

const manufacturer = document.getElementById("value-manufacturer");
const year = document.getElementById("value-year");
const month = document.getElementById("value-month");

const year_types = {
    1:  {
        "A": 2010,
        "B": 2011,
        "C": 2012,
        "D": 2013,
        "E": 2014,
        "F": 2015,
        "G": 2016,
        "H": 2017,
        "J": 2018,
        "K": 2019,
        "L": 2020,
        "M": 2021,
        "N": 2022,
        "P": 2023,
        "R": 2024,
        "S": 2025,
        "T": 2026,
        "V": 2027,
        "W": 2028,
        "X": 2029,
        "Y": 2030,
    },
    2: {
        "A": 2010,
        "B": 2011,
        "C": 2012,
        "D": 2013,
        "E": 2014,
        "F": 2015,
        "G": 2016,
        "H": 2017,
        "J": 2018,
        "K": 2019,
        "L": 2020,
        "M": 2021,
        "N": 2022,
        "P": 2023,
        "R": 2024,
        "S": 2025,
        "T": 2026,
        "U": 2027,
        "V": 2028,
        "W": 2029,
        "X": 2030,
    },
    3: {
        "QZ": 2009,
        "PZ": 2009,
        "NZ": 2010,
        "MZ": 2011,
        "LZ": 2012,
        "KZ": 2013,
        "JZ": 2014,
        "HZ": 2015,
        "GZ": 2016,
        "FZ": 2017,
        "EZ": 2018,
        "DZ": 2019,
        "CZ": 2020,
        "BZ": 2021,
        "AZ": 2022,
        "1Z": 2023,
        "2Z": 2024,
        "3Z": 2025,
        "4Z": 2026,
        "5Z": 2027,
        "6Z": 2028,
        "7Z": 2029,
        "8Z": 2030,
    },
    4: {
        "10": 2010,
        "11": 2011,
        "12": 2012,
        "13": 2013,
        "14": 2014,
        "15": 2015,
        "16": 2016,
        "17": 2017,
        "18": 2018,
        "19": 2019,
        "20": 2020,
        "21": 2021,
        "22": 2022,
        "23": 2023,
        "24": 2024,
        "25": 2025,
        "26": 2026,
        "27": 2027,
        "28": 2028,
        "29": 2029,
        "30": 2030,
    },
    5: {
        "5": 2005,
        "6": 2006,
        "7": 2007,
        "8": 2008,
        "9": 2009,
        "A": 2010,
        "B": 2011,
        "C": 2012,
        "D": 2013,
        "E": 2014,
        "F": 2015,
        "G": 2016,
        "H": 2017,
        "J": 2018,
        "K": 2019,
        "L": 2020,
        "M": 2021,
        "N": 2022,
        "P": 2023,
        "R": 2024,
        "S": 2025,
        "T": 2026,
        "V": 2027,
        "W": 2028,
        "X": 2029,
        "Y": 2030,
    },
    6: {
        "1": 2018,
        "2": 2019,
        "3": 2020,
        "4": 2021,
        "5": 2022,
        "6": 2023,
        "7": 2024,
        "8": 2025,
        "9": 2026,
    }
}

const month_types = {
    1: {
        "A": "January",
        "B": "February",
        "C": "March",
        "D": "April",
        "E": "May",
        "F": "June",
        "G": "July",
        "H": "August",
        "J": "September",
        "K": "October",
        "N": "November",
        "P": "December",
    },
    2: {
        "A": "January",
        "B": "February",
        "C": "March",
        "D": "April",
        "E": "May",
        "F": "June",
        "G": "July",
        "H": "August",
        "J": "September",
        "K": "October",
        "L": "November",
        "M": "December",
    },
    3: {
        "A": "January",
        "B": "February",
        "C": "March",
        "D": "April",
        "F": "May",
        "G": "June",
        "H": "July",
        "K": "August",
        "M": "September",
        "N": "October",
        "P": "November",
        "R": "December",
    },
    4: {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
    },
    5: {
        "1": "January",
        "2": "February",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "July",
        "8": "August",
        "9": "September",
        "A": "October",
        "B": "November",
        "C": "December",
    }
}


const vin_values = {
    "MAT": {"manufacturer": "Tata Motors", "year_location": 10, "month_location": 12, "year_type": 1, "month_type": 1},
    "MA6": {"manufacturer": "Chervolet", "year_location": 9, "month_location": 7, "year_type": 1, "month_type": 2},
    "MMM": {"manufacturer": "Chervolet", "year_location": 9, "month_location": 4, "year_type": 2, "month_type": 3},
    "MAK": {"manufacturer": "Honda", "year_location": 10, "month_location": 9, "year_type": 1, "month_type": 2},
    "MA1": {"manufacturer": "Mahindra", "year_location": 10, "month_location": 12, "year_type": 1, "month_type": 2},
    "MA7": {"manufacturer": "Mitsubishi", "year_location": 10, "month_location": 11, "year_type": 1, "month_type": 2},
    "MAL": {"manufacturer": "Hyundai", "year_location": 10, "month_location": 19, "year_type": 1, "month_type": 2},
    "MCA": {"manufacturer": "Fiat", "year_location": "1920", "month_location": 18, "year_type": 3, "month_type": 2},
    "TMB": {"manufacturer": "Skoda", "year_location": 10, "month_location": 6, "year_type": 1, "month_type": 2},
    "MEX": {"manufacturer": "Skoda", "year_location": 10, "month_location": 6, "year_type": 1, "month_type": 2},
    "WVW": {"manufacturer": "Volkswagen", "year_location": "56", "month_location": 4, "year_type": 4, "month_type": 2},
    "MEX": {"manufacturer": "Volkswagen", "year_location": "56", "month_location": 4, "year_type": 4, "month_type": 2},
    "MBJ": {"manufacturer": "Toyota", "year_location": "2122", "month_location": "1920", "year_type": 4, "month_type": 4},
    "MA3": {"manufacturer": "Maruti Suzuki", "year_location": 10, "month_location": 11, "year_type": 5, "month_type": 2},
    "MDH": {"manufacturer": "Nissan", "year_location": 10, "month_location": 11, "year_type": 1, "month_type": 5},
    "MAJ": {"manufacturer": "Ford", "year_location": 11, "month_location": null, "year_type": 1},
    "MEE": {"manufacturer": "Renault", "year_location": 10, "month_location": 11, "year_type": 1, "month_type": 5},
    "MZB": {"manufacturer": "Kia", "year_location": null, "month_location": 19, "year_type": 1, "month_type": 2},
    "MCA": {"manufacturer": "Jeep", "year_location": null, "month_location": 19, "year_type": 1, "month_type": 2},
    "MZ7": {"manufacturer": "MG", "year_location": 10, "month_location": 9, "year_type": 1, "month_type": 2},
}

function set_warning(message) {
    if (message === "") {
        warning_message.style.display = "none";
        return;
    }
    warning_message.style.display = "block";
    warning_message.innerHTML = message;
}

function set_vin_values(manufacturerValue, yearValue, monthValue) {
    manufacturer.innerHTML = manufacturerValue;
    year.innerHTML = yearValue;
    month.innerHTML = monthValue;
}

function find_vin_values(vin) {
    const manufacturer_code = vin.substring(0, 3);
    

    let manufacturer = vin_values[manufacturer_code];
    let year_location = manufacturer.year_location;
    let month_location = manufacturer.month_location;
    let year_type = manufacturer.year_type;
    let month_type = manufacturer.month_type;
    let year_lookup = ""
    let month_lookup = ""
    let year = ""
    let month = ""

    if (vin_values[manufacturer_code] === undefined) {
        set_warning("Manufacturer code not found. Either the VIN is invalid or the manufacturer code is not in the database.");
        return;
    }

    if (manufacturer === null){
        set_warning("Manufacturer code not found. Either the VIN is invalid or the manufacturer code is not in the database.");
        return;
    }


    if(year_location === null) {
        year = "-";
        set_warning(manufacturer.manufacturer + " does not have a year code in the VIN.");
    }
    else if(typeof year_location === "string") {
        for (let i = 0; i < year_location.length; i++) {
            year_lookup = year_lookup + vin.charAt(year_location.charAt(i) - 1);
        }
    }
    else {
        year_lookup = vin.charAt(year_location - 1);
    }
    
    if(month_location === null) {
        month = "-";
        set_warning(manufacturer.manufacturer + " does not have a month code in the VIN.");
    }
    else if(typeof month_location === "string") {
        for (let i = 0; i < month_location.length; i++) {
            month_lookup = month_lookup + vin.charAt(month_location.charAt(i) - 1);
        }
    }
    else {
        month_lookup = vin.charAt(month_location - 1);
    }

    year = year_types[year_type][year_lookup];
    month = month_types[month_type][month_lookup];

    set_vin_values(manufacturer.manufacturer, year, month);
}

submit_button.addEventListener("click", function() {
    if (vin.value.length < 17 || vin.value.length > 22) { 
        set_warning("VIN must be 17 characters long");
        return;
    }
    set_vin_values("-", "-", "-");
    set_warning("");

    find_vin_values(vin.value);
});