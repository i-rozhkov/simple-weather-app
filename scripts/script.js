var Geo = {};
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(success,error);
} else {
	alert('Geolocation is not supported');
	}

function error() {
	alert("That's weird! We couldn't find you!");
}

function success(position) {
	Geo.lat = position.coords.latitude;
	Geo.lng = position.coords.longitude;
	var Weather = "https://fcc-weather-api.glitch.me/api/current?lat="+Geo.lat+"&lon="+Geo.lng;
	$.ajax({
		url : Weather,
		dataType : "jsonp",
		success : function(data) {
			var location = data['name'];
			var temp = data['main']['temp'];
			var desc = data['weather']['description'];
			var country = data['sys']['country'];
			var wind = data['wind']['speed'];
			var id = data['weather'][0]['id'];
			//setting the spans to the correct parameters
			$('#location').html(location + ', ' + country);
			$('#temp').html(temp.toFixed());
			$('#desc').html(desc);
			$('#wind').html(wind);

			function setBg (id) {
				switch (true) {
					case id == 800:
					document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1493157081793-0b825d79d3d8?w=1500')";
					break;
					case id == 801:
					document.body.style.backgroundImage = "url('https://images.unsplash.com/reserve/r7LctaT0SOu1JcXIkTjC_AaronGuzman_Clouds_IMG_7335.jpg?w=1500')";
					break;
					case id >= 200 && id <= 232:
					document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1504123010103-b1f3fe484a32?w=1500')";
					break;
					case id >= 300 && id <= 321:
					document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1475368754617-6d70294be037?w=1500')";
					break;
					case id >= 500 && id <= 504:
					document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1438449805896-28a666819a20?w=1500')";
					break;
					case id >= 511 && id <= 531:
					document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1444384851176-6e23071c6127?w=1567')";
					break;
					case id >= 600 && id <= 622:
					document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1453783991377-3529f1f1e1d8?w=1504')";
					break;
					case id >= 700 && id <= 781:
					document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1445964047600-cdbdb873673d?w=1456')";
					break;
					case id >= 802 && id <= 804:
					document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1498496294664-d9372eb521f3?w=1500')";
					break;
				}
			}
			setBg(id);
		}
	});
}

function changeDeg () {
	const degree = document.getElementById('degree');
	let temp = document.getElementById('temp');
	let currentTemp = temp.innerHTML;
	if (degree.className == "celc") {
		degree.classList.remove("celc");
		degree.classList.add("far");
		temp.innerHTML = currentTemp * 9/5 + 32;
		degree.innerHTML = '&deg;F';
	} else if (degree.className == "far") {
		degree.classList.remove("far");
		degree.classList.add("celc");
		temp.innerHTML = ((currentTemp - 32) * 5/9).toFixed();
		degree.innerHTML = '&deg;C';
	}
}
