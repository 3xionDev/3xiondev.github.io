function getOS() {
  const userAgent = window.navigator.userAgent;
  let os = "Unknown OS";

  if (userAgent.indexOf("Win") != -1) os = "Windows";
  if (userAgent.indexOf("Mac") != -1) os = "Mac OS";
  if (userAgent.indexOf("Linux") != -1) os = "Linux";
  if (userAgent.indexOf("Android") != -1) os = "Android";
  if (userAgent.indexOf("like Mac") != -1) os = "iOS"; // For iPhones/iPads

  return os;
}

setInterval(() => {
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	
//	let binclock = document.createElement("h5");
//	binclock.id = 'bin';
//	binclock.class = 'top-flex-core';

	let d = new Date();
	let hours = d.getHours();
	let minutes = d.getMinutes();
	let seconds = d.getSeconds();
	let milliseconds = d.getMilliseconds();
	let tz = "UTC" + (((d.getTimezoneOffset() / -60) > 1) ? "+" + d.getTimezoneOffset() / -60 : d.getTimezoneOffset() / -60);
	
	hours = (hours > 12) ? hours - 12 : hours;
	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;
	milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
	milliseconds = (milliseconds < 100) ? "0" + milliseconds : milliseconds;
	binms = d.getMilliseconds().toString(2).padStart(10, "0");
	

	document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds + "<br> <h5 id=\'bin\'></h5>";
	document.getElementById('calendar').innerHTML = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "<br>" + days[d.getDay()] + "<br>" + tz + "<br>" + getOS() + "<br>" + "Rev1";
	document.getElementById('bin').innerHTML = d.getHours().toString(2).padStart(5, "0") + " " + d.getMinutes().toString(2).padStart(6, "0") + " " + d.getSeconds().toString(2).padStart(6, "0") + " " + binms;
}, 10)
