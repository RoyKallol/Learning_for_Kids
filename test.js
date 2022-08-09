		var wordList=["ant","apple","ass","axe","ball","banana","bat","bean","bird","boat","book","boy","bus","camel","cap",
		"car","cat","cow","cup","deer","dog","doll","door","duck","eagle","ear","egg","elephant","eye","fan","fish","flag","flower",
		"frog","girl","glass","goat","grape","gun","hand","hare","hat","hen","horse","house","ice","infant","ink","iron","jackfruit",
		"jar","jeep","joker","jug","jute","kettle","key","kid","king","kite","lamp","leaf","leg","lichi","lion","lip","man","mango","map",
		"mat","monkey","moon","mug","net","nib","nose","nurse","nut","olive","onion","orange","owl","ox","palm","pan","parrot",
		"pen","plate","potato","quail","queen","quill","quilt","quran","rabbit","radio","ram","rat","rose","sheep","ship","snake","soap",
		"son","spoon","star","sun","tea","tiger","top","train","tree","umbrella","umpire","uncle","uniform","van","vase","vegetable",
		"violin","vulture","wall","watch","water","wheel","wolf","wool","xebec","xmastree","xray","xylophone","yam","yarn","yolk","yoyo",
		"zebra","zero","zip","zoo"];
	
		/*var wordList=["ant","apple","ass","axe","ball","banana","bat","bean","bird","boat","book","boy","bus","camel","cap",
		"car","cat","cow","cup","deer","dog","doll","door","duck","eagle","ear","egg","elephant","eye"];*/
		// Shuffling and placing letters
		function getRandomInt(max) {
		return Math.floor(Math.random() * max);
		}
		
		function shuffle(a) {
			var j, x, i;
			for (i = a.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				x = a[i];
				a[i] = a[j];
				a[j] = x;
			}
			return a;
		}
		
	/*	var idqu = document.getElementsByClassName("question_upper");
		var styles = window.getComputedStyle(idqu[0]);	
		idqu[0].style.height=styles.getPropertyValue("width");*/
		var myChoise = getRandomInt(wordList.length);
	//	var myChoise = 129;
		var requiredWord=wordList[myChoise];
		var wordPath="url(image/A_Z/"+requiredWord+".jpg)";
		document.getElementById("image1").style.backgroundImage=wordPath;
		var upperRequiredWord=requiredWord.toUpperCase();
		var arrayList=upperRequiredWord.split("");
		var iter=arrayList.length;
		var myPointer=0;
		var finalArrayList=[];
		for(var i=0;i<9-iter;i++){
			arrayList.push(String.fromCharCode(getRandomInt(26)+65));
		}
		shuffle(arrayList);
		for(var i=0;i<9;i++){
			var res="is"+i;
			document.getElementById(res).innerHTML = arrayList[i];
		}
		
		// Clicking letter
		function clickMe(){
			var num = Number(this.id.charAt(2));
			this.style.visibility="collapse";
			for(var i=num-3;i>=0;i-=3){
				var clp=0;
				for(var j=i+3;j<=8;j+=3){
					if(document.getElementById("is"+j).style.visibility == "collapse")
						clp++;
				}
				document.getElementById("is"+i).style.top=(Math.floor(i/3)+clp)*33+"%";
			}
			/*
			if(num == 3){
				document.getElementById("is0").style.top="33%";
			}else if(num == 6){
				document.getElementById("is0").style.top="33%";
				document.getElementById("is3").style.top="66%";
			}*/
			
			// change output 
			var ress="it"+myPointer;
			document.getElementById(ress).style.visibility="visible";
			document.getElementById(ress).innerHTML=this.innerHTML;
			finalArrayList.push(this.innerHTML);
			myPointer++;
			
			// check if the word is correct
			var finalWord=finalArrayList.join("");
			var n=finalWord.localeCompare(upperRequiredWord);
			if(n==0){
				document.getElementById("image1").style.backgroundImage="url(image/gifty/yes"+getRandomInt(16)+".gif)";
			//	document.getElementById("image1").style.backgroundImage="url(image/gifty/yes12.gif)";
			}
		}
		document.getElementById("is0").onclick = clickMe;
		document.getElementById("is1").onclick = clickMe;
		document.getElementById("is2").onclick = clickMe;
		document.getElementById("is3").onclick = clickMe;
		document.getElementById("is4").onclick = clickMe;
		document.getElementById("is5").onclick = clickMe;
		document.getElementById("is6").onclick = clickMe;
		document.getElementById("is7").onclick = clickMe;
		document.getElementById("is8").onclick = clickMe;
		
		
		function retry1(){
			for(var i=0;i<9;i++){
				document.getElementById("is"+i).style.visibility="visible";
				document.getElementById("is"+i).style.top=Math.floor(i/3)*33+"%";
				document.getElementById("it"+i).style.visibility="hidden";
			}
			finalArrayList = [];
			myPointer = 0;
			document.getElementById("image1").style.backgroundImage=wordPath;
		}
		document.getElementById("retry1").onclick = retry1;
		
		function next1(){
			location.reload();
		}
		document.getElementById("next1").onclick = next1;