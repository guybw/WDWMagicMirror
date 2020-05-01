/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
	modules: [
		{
		module: 'MMM-SmartWebDisplay',
		position: 'fullscreen_below',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
			logDebug: false, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
			height:"1080px", //hauteur du cadre en pixel ou %
			width:"1920px", //largeur
               		updateInterval: 0, //in min. Set it to 0 for no refresh (for videos)
                	NextURLInterval: 0, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updated
                	displayLastUpdate: false, //to display the last update of the URL
					displayLastUpdateFormat: 'ddd - HH:mm:ss', //format of the date and time to display
                	url: ["http://localhost/WDW/index.html"], //source of the URL to be displayed
					scrolling: "no", // allow scrolling or not. html 4 only
					shutoffDelay: 10000 //delay in miliseconds to video shut-off while using together with MMM-PIR-Sensor 
				}
		},		
			
		{
		module: "MMM-DarkSkyForecast",
		position: "top_right",
		classes: "default everyone",
		disabled: false,
		config: {
			apikey: "", /* Enter your key here */
			latitude: "",		/* Enter your lat here */
			longitude: "",    /* Enter your long here */
			iconset: "1m",
			forecastLayout: "table",
			units: "us",
			showDailyForecast: false,
			useAnimatedIcons: false,
			showHourlyForecast: false,
			updateInterval: 15,
			showWind: false,
			showPrecipitation: false,
				}
		},		
		
		{
		module: "clock",
		position: "top_right",
		config: {
			showDate: false,
			displaySeconds: false,
				}
		},
		
		{
		module: "calendar",
        position: "top_right",
		header: "Upcoming Events",
		config: {
				maxTitleLength: 30,
				maximumNumberOfDays: 180,	/* how many days of events do you want to show */
				timeFormat: "absolute",
				nextDaysRelative: true,
				fade: false,
				calendars: [
							{
                            symbol: "calendar-check-o ",
                             url: ""	/* Enter your calendar ics path here */
                             }
                           ],                    
                }
        },
        
		{
		module: "MMM-DateOnly",
		position: "top_right",
		config: {
				dateFormat: "dddd, MMMM Do",
				showWeek: false
				} 
		},
		
		{
		module: "helloworld",
		position: "top_right",
		config: {
				text: "Local Weather"
				}
		},
		
		{
		module: 'MMM-PIR-Sensor',
		config: {
				sensorPin: 21,
				powerSaving: true,
				powerSavingDelay: 20
				}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
