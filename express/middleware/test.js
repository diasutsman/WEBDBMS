// print prime numbers from 1 to 100
function printPrimes() {
    for (var i = 2; i < 100; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

//printPrimes()

// matching 1 or + uppercase/lowercase letter(s) (combination possible), with the extension .jpg, .jpeg, .png, .bmp, or .gif.
String.prototype.isImage = function () {
    var regex = /^(?:[\w]\.)*(?:jpg|jpeg|png|bmp|gif)$/i;
    return regex.test(this);
}

// matching 1 or + uppercase/lowercase letter(s) (combination possible), with the extension .mp3, .flac, .alac, or .aac.
String.prototype.isAudio= function(){
    var regex = /^(?:[\w]\.)*(?:mp3|flac|alac|aac)$/i;
    return regex.test(this);
}
console.log("NothingElseMatters.mp3".isAudio())

// remove duplicates from an array
function removeDuplicates(arr) {
    var unique = {};
    arr.forEach(function (i) {
        if (!unique[i]) {
            unique[i] = true;
        }
    });
    return Object.keys(unique);
}

// insertion sort
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var temp = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

// merge sort
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

// merge two sorted arrays
function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}

// quick sort
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var pivot = arr[0];
    var left = [];
    var right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

// bubble sort
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// get weather api 
function getWeather(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=d7f7b9c0b7d9e8e8d7b9c0b7d9e8e8d7";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
        if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            var weather = data.weather[0].description;
            var temp = data.main.temp;
            var wind = data.wind.speed;
            console.log(weather + " " + temp + " " + wind);
        }
    }
    request.send();
}

// class with constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// add two binary strings without converting to decimal
function addBinary(a, b) {
    var result = "";
    var carry = 0;
    var i = a.length - 1;
    var j = b.length - 1;
    while (i >= 0 || j >= 0 || carry === 1) {
        var sum = carry;
        if (i >= 0) {
            sum += a[i--] - '0';
        }
        if (j >= 0) {
            sum += b[j--] - '0';
        }
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    return result;
}

// sort by bits
function sortByBits(arr) {
    return arr.sort(function (a, b) {
        return (a.toString(2).length + b.toString(2).length) - (a - b);
    });
}

// animation
function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    var start = new Date().getTime();
    var timer = setInterval(function () {
        var step = Math.min(1, (new Date().getTime() - start) / time);
        if (prop) {
            elem[style] = (from + step * (to - from)) + unit;
        } else {
            elem.style[style] = (from + step * (to - from)) + unit;
        }
        if (step === 1) {
            clearInterval(timer);
        }
    }, 25);
}

// add two numbers without using + or - operators
function add(a, b) {
    var result = "";
    var carry = 0;
    var i = a.length - 1;
    var j = b.length - 1;
    while (i >= 0 || j >= 0 || carry === 1) {
        var sum = carry;
        if (i >= 0) {
            sum += a[i--] - '0';
        }
        if (j >= 0) {
            sum += b[j--] - '0';
        }
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    return result;
}
