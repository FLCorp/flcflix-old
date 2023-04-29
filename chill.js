var audioPlayer = document.getElementById("myAudio");
		var audioSource = document.getElementById("audioSource");
		var audioTitle = document.getElementById("audioTitle");
        var audioBtn = document.getElementById("audioBtn");
        var audio2Btn = document.getElementById("audio2Btn")
		var defaultSrc = audioSource.getAttribute("src");
		var defaultTitle = audioTitle.innerHTML;
        var defaultBtn = audioBtn.innerHTML;
        var default2Btn = audio2Btn.innerHTML;
		var audio2Src = "audio/chillmode1.mp3";
		var audio2Title = "Zelda & Chill - GameChops";
		var audio3Src = "audio/chillmode2.mp3";
		var audio3Title = "Mario & Chill - GameChops";

		function changeAudio(audioNumber) {
			var newSrc, newTitle;
			if (audioNumber === 2) {
				if (audioSource.getAttribute("src") === defaultSrc) {
					newSrc = audio2Src;
					newTitle = audio2Title;
                    newBtn = "Chilltendo - GameChops";
                    new2Btn = "Mario & Chill - GameChops";
				} else if (audioSource.getAttribute("src") === audio2Src) {
					newSrc = defaultSrc;
					newTitle = defaultTitle;
                    newBtn = "Zelda & Chill - GameChops";
                    new2Btn = "Mario & Chill - GameChops";
				} else {
					newSrc = audio2Src;
					newTitle = audio2Title;
                    newBtn = "Mario & Chill - GameChops";
                    new2Btn = "Chilltendo - GameChops";
				}
			} else if (audioNumber === 3) {
				if (audioSource.getAttribute("src") === defaultSrc) {
					newSrc = audio3Src;
					newTitle = audio3Title;
                    newBtn = "Zelda & Chill - GameChops";
                    new2Btn = "Chilltendo - GameChops";
				} else if (audioSource.getAttribute("src") === audio3Src) {
					newSrc = defaultSrc;
					newTitle = defaultTitle;
                    newBtn = "Zelda & Chill - GameChops";
                    new2Btn = "Mario & Chill - GameChops";
				} else {
					newSrc = audio3Src;
					newTitle = audio3Title;
                    newBtn = "Zelda & Chill - GameChops";
                    new2Btn = "Chilltendo - GameChops";
				}
			}
			audioSource.setAttribute("src", newSrc);
			audioTitle.innerHTML = newTitle;
            audioBtn.innerHTML = newBtn;
            audio2Btn.innerHTML = new2Btn;
			audioPlayer.load();
			audioPlayer.play();
		}