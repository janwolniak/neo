
	function sendmail(adres, nick, link) 
	{
		var mailto_link;
		var body;
		if (!adres)
		{
			adres = document.getElementById("adres").value;
		}
		if (nick)
		{
			nick = "Witaj " + nick;
		}
		else
		{
			nick = "";
		}
		body = document.getElementById("pole2").value;
		body = body.replace( "\n", "%0D%0A");
		body = body.replace( "\r", "");
		mailto_link = "mailto:" + adres + "?body=";
		if (nick)
		{
			mailto_link += nick + "%0D%0A%0D%0A";
		}
		mailto_link += body;
		if (link)
		{
			mailto_link += '%0D%0A%0D%0ALink do strony: '+link;
		}
		mailto_link += '&subject=' + document.getElementById("pole1").value;
  		window = window.open(mailto_link, 'emailWindow');
	}

	function sendsms(telefon, nick, link)
	{
		var sms_link;
		var body;
		if (!telefon)
			telefon = document.getElementById("telefon").value;
		if (nick)
			nick = "Witaj " + nick;
		else
			nick = "";
		body = document.getElementById("wiadomosc").value;
		if (!body)
			body = "";	
		body = body.replace( "\n", "%0D%0A");
		body = body.replace( "\r", "");
		sms_link = "sms://" + telefon + "?body=";
		if (nick)
			sms_link += nick + "%0D%0A";
		sms_link += body;

		if (link && document.getElementById("AddLink").checked == true)
		{
			sms_link += '%0D%0ALink do strony: '+link;
		}
  		window = window.open(sms_link, 'smsWindow');
	}

	function checkgrupa(grupa)
	{
		var grupy = document.getElementsByName("grupa");
		var i;
		
		for (i=0;i<grupy.length;i++)
		{
			var grupa = grupy[i].value;
			var osoby = document.getElementsByName("osoba");
			var j;

			if (grupy[i].checked)
			{					
				//alert(grupy[i].value);				
				for (j=0;j<osoby.length;j++)
				{
					if (osoby[j].value==grupa)
					{
						osoby[j].checked=true;
					}
				}
			}
			else
			{
				for (j=0;j<osoby.length;j++)
				{
					if (osoby[j].value==grupa)
					{
						osoby[j].checked=false;
					}
				}				
			}
		}
		checkmail();
	}

	function checkmail()
	{
		var osoby = document.forms[0].osoba;
		var email = document.getElementsByClassName("email");
		var telefon = document.getElementsByClassName("telefon");
		var adresy = "";
		var telefony = "";
		var i;
		
		for (i=0;i<osoby.length;i++)
		{
			if (osoby[i].checked)
			{
				if (adresy.length != 0)
					adresy = adresy + ", ";
				if (telefony.length != 0)
					telefony = telefony + ", ";
				adresy = adresy + email[i].innerHTML;
				telefony = telefony + telefon[i].innerHTML;
			}
		}
		document.getElementById("adres").value = adresy;
		document.getElementById("telefon").value = telefony;
		
		if (document.getElementById("mail").style.display != 'inline' && document.getElementById("sms").style.display != 'inline')
		{
			document.getElementById("mail").style.display = 'inline';
		}
	}

	function checkgrupatel(grupa)
	{
		var grupy = document.getElementsByName("grupatel");
		var i;
		
		for (i=0;i<grupy.length;i++)
		{
			var grupa = grupy[i].value;
			var osoby = document.getElementsByName("osobatel");
			var j;

			if (grupy[i].checked)
			{					
				//alert(grupy[i].value);				
				for (j=0;j<osoby.length;j++)
				{
					if (osoby[j].value==grupa)
					{
						osoby[j].checked=true;
					}
				}
			}
			else
			{
				for (j=0;j<osoby.length;j++)
				{
					if (osoby[j].value==grupa)
					{
						osoby[j].checked=false;
					}
				}				
			}
		}
		checktel();
	}

	function checktel()
	{
		var osoby = document.forms[0].osobatel;
		var telefon = document.getElementsByClassName("telefon");
		var telefony = "";
		var i;
		
		for (i=0;i<osoby.length;i++)
		{
			if (osoby[i].checked)
			{
				if (telefony.length != 0)
					telefony = telefony + ", ";
				telefony = telefony + telefon[i].innerHTML;
			}
		}
		document.getElementById("telefon").value = telefony;
	}
	
	function defmail()
	{
		if (document.getElementById("mail").style.display != 'inline')
		{
			document.getElementById("mail").style.display = 'inline';
			document.getElementById("sms").style.display = 'none';
		}
		else
		{
			document.getElementById("mail").style.display = 'none';
		}
	}
	function defsms()
	{
		if (document.getElementById("sms").style.display != 'inline')
		{
			document.getElementById("sms").style.display = 'inline';
			document.getElementById("mail").style.display = 'none';
		}
		else
		{
			document.getElementById("sms").style.display = 'none';
		}
	}

	//--------------------------------------- Galeria ----------------------------------------------
	function Galeria1()
	{
		var zdjecia = document.getElementById("nivoslider-4");
		zdjecia.innerHTML = '<img src="http://www.favourite.pl/w6/Zdjecia/201306/IMGP5281.JPG" alt="1" />';
	}

	function Galeria2()
	{
		jQuery(window).load(
							function(){
								jQuery("#nivoslider-5").nivoSlider({
								effect:"random",
								slices:15,
								boxCols:8,
								boxRows:4,
								animSpeed:500,
								pauseTime:3000,
								startSlide:0,
								directionNav:true,
								controlNav:true,
								controlNavThumbs:false,
								pauseOnHover:true,
								manualAdvance:false
							});
						});
	}
	

	function TypCheck(value) 
	{
		if (value == "E")
		{
			document.getElementById("TematyLiturgii").style.visibility = "hidden";
			document.getElementById("CzytaniaMszalne").style.visibility = "inherit";
		}
		else
		{
			document.getElementById("TematyLiturgii").style.visibility = "visible";
			document.getElementById("CzytaniaMszalne").style.visibility = "hidden";
		}
	}

