var partidos = [
	{
		match_id: 1,
		nombre1: "U1",
		nombre2: "U4",
		mes: "06",
		horario: "9:30 AM",
		lugar: " Greenbay",
		dia: "01",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.025884368862!2d-87.64002798468655!3d41.913802279219254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220546173!5m2!1sen!2sar"
		
	},
	{
		match_id: 2,
		nombre1: "U2",
		nombre2: "U3",
		mes: "06",
		horario: "1:30 PM",
		lugar: " Greenbay",
		dia: "01",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.025884368862!2d-87.64002798468655!3d41.913802279219254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220546173!5m2!1sen!2sar"
	},
	{
		match_id: 3,
		nombre1: "U5",
		nombre2: "U6",
		mes: "06",
		horario: "9:30 AM",
		lugar: " Howard A Yeager",
		dia: "08",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085614!2d-87.66511458468622!3d41.923264579218745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220598419!5m2!1sen!2sar"
	},
	{
		match_id: 4,
		nombre1: "U6",
		nombre2: "U1",
		mes: "06",
		horario: "1:30 PM",
		lugar: " Marjorie P Hart",
		dia: "08",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658434!2d-87.64808628468606!3d41.9295782792181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220630456!5m2!1sen!2sar"
	},
	{
		match_id: 5,
		nombre1: "U2",
		nombre2: "U4",
		mes: "06",
		horario: "9:30 AM",
		lugar: " North",
		dia: "15",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492106!2d-87.64837698468676!3d41.907096479219916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409+N+Ogden+Ave%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2sar!4v1554220668072!5m2!1sen!2sar"
	},
	{
		match_id: 6,
		nombre1: "U3",
		nombre2: "U5",
		mes: "06",
		horario: "1:30 PM",
		lugar: " AJ Katzenmaier",
		dia: "15",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6542461109857!2d-87.631239084687!3d41.900292379220446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2sar!4v1554220459812!5m2!1sen!2sar"
	},
	{
		match_id: 7,
		nombre1: "U1",
		nombre2: "U3",
		mes: "06",
		horario: "9:30 AM",
		lugar: " South",
		dia: "22",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7479505250685!2d-87.65355538468634!3d41.919776779218864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220695897!5m2!1sen!2sar"
	},
	{
		match_id: 8,
		nombre1: "U2",
		nombre2: "U6",
		mes: "06",
		horario: "1:30 PM",
		lugar: " Howard A Yeager",
		dia: "22",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085614!2d-87.66511458468622!3d41.923264579218745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220598419!5m2!1sen!2sar"
	},
	{
		match_id: 9,
		nombre1: "U4",
		nombre2: "U5",
		mes: "06",
		horario: "9:30 AM",
		lugar: " Greenbay",
		dia: "29",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.025884368862!2d-87.64002798468655!3d41.913802279219254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220546173!5m2!1sen!2sar"
	},

	{
		match_id: 10,
		nombre1: "U2",
		nombre2: "U5",
		mes: "07",
		horario: "9:30 AM",
		lugar: "Marjorie P Hart",
		dia: "06",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658434!2d-87.64808628468606!3d41.9295782792181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220630456!5m2!1sen!2sar"
	},
	{
		match_id: 11,
		nombre1: "U1",
		nombre2: "U6",
		mes: "07",
		horario: "1:00 PM",
		lugar: "South",
		dia: "06",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7479505250685!2d-87.65355538468634!3d41.919776779218864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220695897!5m2!1sen!2sar"
	},
	{
		match_id: 12,
		nombre1: "U3",
		nombre2: "U4",
		mes: "07",
		horario: "9:30 AM",
		lugar: "Howard A Yeager	",
		dia: "08",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085614!2d-87.66511458468622!3d41.923264579218745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220598419!5m2!1sen!2sar"
	},
	{
		match_id: 13,
		nombre1: "U5",
		nombre2: "U1",
		mes: "07",
		horario: "1:00 PM",
		lugar: "Greenbay",
		dia: "08",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.025884368862!2d-87.64002798468655!3d41.913802279219254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220546173!5m2!1sen!2sar"
	},
	{
		match_id: 14,
		nombre1: "U6",
		nombre2: "U3",
		mes: "07",
		horario: "9:30 AM",
		lugar: "North",
		dia: "20",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492106!2d-87.64837698468676!3d41.907096479219916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409+N+Ogden+Ave%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2sar!4v1554220668072!5m2!1sen!2sar"
	},
	{
		match_id: 15,
		nombre1: "U2",
		nombre2: "U4",
		mes: "07",
		horario: "1:00 PM",
		lugar: "Marjorie P Hart",
		dia: "20",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658434!2d-87.64808628468606!3d41.9295782792181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220630456!5m2!1sen!2sar"
	},
	{
		match_id: 16,
		nombre1: "U3",
		nombre2: "U1",
		mes: "07",
		horario: "9:30 AM",
		lugar: "AJ Katzenmaier",
		dia: "27",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6542461109857!2d-87.631239084687!3d41.900292379220446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2sar!4v1554220459812!5m2!1sen!2sar"
	},
	{
		match_id: 17,
		nombre1: "U5",
		nombre2: "U6",
		mes: "07",
		horario: "1:00 PM",
		lugar: "Howard A Yeager",
		dia: "27",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085614!2d-87.66511458468622!3d41.923264579218745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220598419!5m2!1sen!2sar"
	},
	{
		match_id: 18,
		nombre1: "U6",
		nombre2: "U1",
		mes: "08",
		horario: "9:30 AM",
		lugar: " Marjorie P Hart",
		dia: "07",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658434!2d-87.64808628468606!3d41.9295782792181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220630456!5m2!1sen!2sar"
	},
	{
		match_id: 19,
		nombre1: "U5",
		nombre2: "U6",
		mes: "08",
		horario: "1:00 PM",
		lugar: "AJ Katzenmaier",
		dia: "07",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6542461109857!2d-87.631239084687!3d41.900292379220446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2sar!4v1554220459812!5m2!1sen!2sar"
  },
  {
		match_id: 20,
		nombre1: "U3",
		nombre2: "U2",
		mes: "08",
		horario: "1:00 PM",
		lugar: "Marjorie P Hart",
		dia: "10",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658434!2d-87.64808628468606!3d41.9295782792181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220630456!5m2!1sen!2sar"
  },
  {
		match_id: 21,
		nombre1: "U5",
		nombre2: "U4",
		mes: "08",
		horario: "5:00 PM",
		lugar: "Howard A Yeager",
		dia: "10",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085614!2d-87.66511458468622!3d41.923264579218745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1554220598419!5m2!1sen!2sar"
	},
	{
		match_id: 22,
		nombre1: "U1",
		nombre2: "U6",
		mes: "08",
		horario: "7:00 PM",
		lugar: "AJ Katzenmaier",
		dia: "17",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6542461109857!2d-87.631239084687!3d41.900292379220446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2sar!4v1554220459812!5m2!1sen!2sar"
  }
];
