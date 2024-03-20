/* id:      a unique name for the tile
 * img:     the image file name for the tile (saved in Assets folder)
 * title:   what is displayed as the tile title in the web view
 * link:    the url to the target website (if its an external link; internal links are handled differently -> ref WM)
 * tags:    list of words that are assosciated with the content of the tile and are searchable, but are not displayed anywhere
 * style:   assigns a color to the tile:
 *          - spvr:     violet
 *          - aro:      blue
 *          - general:  orange
 *          - pub:      green
 *          - sfo:      yellow
 *          - doc:      red
 * 
 * Tile object do not need to be sorted alphabetically. They will be automatically sorted upon initial page load. 
 * 
 */

export interface Tile{
	id: string
	img: string
	title: string
	link?: string
	tags: string
	style: string
}

export const homeTileData:Tile[] = [{
		id: "aisPhone",
		img: "fax.png",
		title: "AIS Phone & Equipment Map",
		link: "Documents/AISEQPT.pdf",
		tags: "ais phone equipment map telephone eqpt iawp",
		style: "spvr"
	},
    {
		id: "arrmsg",
		img: "europe.png",
		title: "ARR MSG/Phone Numbers",
		tags: "arrival phone arr number nr foreign italia france austria germany",
		style: "aro"
	},
	{
		id: "atfmx",
		img: "024-warning.png",
		title: "ATFMX document",
		link: "U:\\ZOL\\PR-Team\\AIS-ALLG",
		tags: "atfmx document slot exception flow",
		style: "spvr"
	},
	{
		id: "arOnline",
		img: "maintenance.png",
		title: "AROnline",
		link: "https://aronline.skyguide.corp/",
		tags: "aronline master page addressing in flight change",
		style: "aro"
	},
	{
		id: "bioman",
		img: "085-calendar.png",
		title: "BIOMAN",
		link: "http://bioman.skyguide.corp/",
		tags: "bioman tourenplan schichtplan",
		style: "general"
	},
	{
		id: "biomanDaily",
		img: "085-calendar.png",
		title: "BIOMAN Daily Plan",
		link: "http://bioman.skyguide.corp/dailyPlan/Default.aspx",
		tags: "bioman daily plan touren schicht täglich tag",
		style: "general"
	},
	{
		id: "confluenceAIM",
		img: "icons8-confluence-512.png",
		title: "Confluence AIM Operations",
		link: "https://confluence.skyguide.corp/display/AOP/AIM+Operations",
		tags: "confluence aim operations",
		style: "spvr"
	},
	{
		id: "reports",
		img: "dashboard.png",
		title: "Crystal Reports",
		link: "",
		tags: "crystal reports",
		style: "spvr"
	},
	{
		id: "dabs",
		img: "rocket.png",
		title: "Daily Airspace Bulletin DABS",
		link: "https://skybriefing.com/",
		tags: "daily airspace bulletin dabs cotsena",
		style: "pub"
	},
	{
		id: "deepl",
		img: "translation.png",
		title: "DeepL Translate",
		link: "https://www.deepl.com/translator",
		tags: "deepl translate french english german übersetz",
		style: "general"
	},
	{
		id: "dienstplan",
		img: "085-calendar.png",
		title: "Dienstplan",
		link: "Documents/DP_Dienstplan.pdf",
		tags: "dienstplan tourenplan schichtplan",
		style: "spvr"
	},
	{
		id: "edienstplan",
		img: "085-calendar.png",
		title: "Dienstplan elektronisch",
		link: "https://status.flightsupport.ch/login",
		tags: "dienstplan tourenplan schichtplan elektronisch internet tv fernseher",
		style: "spvr"
	},
	{
		id: "drohnenKarte",
		img: "030-drone-20.png",
		title: "Drone Chart RPAS",
		link: "https://map.geo.admin.ch/?topic=aviation&bgLayer=ch.swisstopo.pixelkarte-grau&layers=ch.bazl.einschraenkungen-drohnen&X=189554.62&Y=664804.11&zoom=1&catalogNodes=1379&layers_opacity=0.6&lang=de",
		tags: "drohnen drone karte chart rpas maps",
		style: "sfo"
	},
	{
		id: "drohnenInfo",
		img: "004-drone-2.png",
		title: "Drone Info BAZL",
		link: "https://www.bazl.admin.ch/bazl/en/home/drohnen.html",
		tags: "bazl drohnen drone info",
		style: "sfo"
	},
	{
		id: "eadDB",
		img: "connection.png",
		title: "European AIS Database",
		link: "https://www.ead.eurocontrol.int/cms-eadbasic/opencms/en/login/ead-basic/",
		tags: "ead european ais database international aim aro",
		style: "doc"
	},
	{
		id: "eAip",
		img: "044-passport.png",
		title: "eAIP",
		link: "http://ais.skyguide.corp/map/eaipbytable.html",
		tags: "eaip electronic aip internal aip",
		style: "doc"
	},
	{
		id: "eATM",
		img: "checklist.png",
		title: "eATM Daily Briefing",
		link: "https://eatm/reading_list/",
		tags: "eatm daily briefing list",
		style: "general"
	},
	{
		id: "yonder",
		img: "checklist.png",
		title: "Yonder",
		link: "https://skyguide.yondermind.info/?#/",
		tags: "eatm daily briefing list yonder",
		style: "general"
	},
	{
		id: "ewac",
		img: "031-preferences.png",
		title: "eWAC AIM OPS",
		link: "https://evapps.skyguide.corp/s/ewac-spvr-prod",
		tags: "ewac aim ops cos",
		style: "spvr"
	},
	{
		id: "flightkeysTool",
		img: "filter.png",
		title: "Flightkeys Screening Tool",
		link: "http://aip-screening.skyguide.corp/",
		tags: "flightkeys aip tool screening",
		style: "doc"
	},
	{
		id: "flightsupport",
		img: "002-maps.png",
		title: "Flightsupport",
		link: "https://flightsupport.ch/maps",
		tags: "maps karte sommer flightsupport",
		style: "aro"
	},
	{
		id: "frenchStuff",
		img: "eiffel-tower.png",
		title: "Français / French / Französisch",
		tags: "französisch francais françcais french special flight office drohne drone sfo vocabulaire wörter übersetzung",
		style: "general"
	}, // internal link
	{
		id: "helpdeskQA",
		img: "026-it.png",
		title: "Helpdesk Q&A",
		link: "https://aronline.skyguide.corp/helpdesk-faq/faq-overview/",
		tags: "helpdesk ais aro aim faq question answers fragen antworten",
		style: "aro"
	},
	{
		id: "icao",
		img: "029-filling cabinet.png",
		title: "ICAO Documents",
		link: "https://skydoc.skyguide.corp/cs.exe/open/2195459",
		tags: "icao documents dokumente 8400 7910",
		style: "doc"
	},
	{
		id: "ifpsError",
		img: "error.png",
		title: "IFPS Error Validation & Equipment Guide",
		link: "https://contentzone.eurocontrol.int/FPL/errorSearch.aspx",
		tags: "ifps red error fehler validation ifpsra ifpuv eqpt equipment guide item 10",
		style: "aro"
	},
	{
		id: "ifpsManual",
		img: "manual.png",
		title: "IFPS User Manual",
		link: "https://www.eurocontrol.int/publication/ifps-users-manual",
		tags: "ifps user manual handbuch",
		style: "aro"
	},
	{
		id: "itHelpdesk",
		img: "026-it.png",
		title: "IT Helpdesk Services",
		link: "https://itsm.skyguide.corp/index.php",
		tags: "skyguide it helpdesk computer",
		style: "general"
	},
	{
		id: "jiraDBU",
		img: "icons8-jira-500.png",
		title: "JIRA DBU",
		link: "https://jira.skyguide.corp:8443/secure/RapidBoard.jspa?rapidView=774&projectKey=DBU",
		tags: "dbu jira ticket issue problem",
		style: "spvr"
	},
	{
		id: "coordCalc",
		img: "cartesian-coordinate-system.png",
		title: "Koordinaten-Umrechner",
		link: "https://www.koordinaten-umrechner.de/decimal/47.400208,8.639030?karte=OpenStreetMap&zoom=8",
		tags: "coordinates koordinaten umrechner umwandler calculator",
		style: "pub"
	},
	{
		id: "lms",
		img: "whiteboard.png",
		title: "LMS",
		link: "https://lms.skyguide.ch/ilias.php?baseClass=ilPersonalDesktopGUI&cmd=jumpToSelectedItems",
		tags: "lms learning training center ilias",
		style: "general"
	},
	{
		id: "logops",
		img: "023-sign form.png",
		title: "LOGOPS",
		link: "http://logops/",
		tags: "logops",
		style: "spvr"
	},
	{
		id: "eAlarming",
		img: "030-medical.png",
		title: "Mobilisation & e-Alarming Tool",
		link: "https://emergency.swisscom-alarm.ch/",
		tags: "ealarming alarmierung notfall mobilisation tool mosi cos",
		style: "spvr"
	},
{
		id: "moveit",
		img: "upload-file.png",
		title: "MOVEit",
		link: "https://moveit.skyguide.ch/",
		tags: "moveit upload hochladen transfer flightkeys daily folder",
		style: "spvr"
	},
	{
		id: "nopPortal",
		img: "internet.png",
		title: "NOP Network Operations Portal",
		link: "https://www.public.nm.eurocontrol.int/PUBPORTAL/gateway/spec/index.html",
		tags: "ifps cfmu nmoc network operations portal",
		style: "aro"
	},
	{
		id: "originators",
		img: "006-candidate.png",
		title: "NOTAM Originator List",
		link: "U:\\ZOL\\PR-Team\\AIS-ALLG\\PUB",
		tags: "notam originator list liste bewilligung pauschal",
		style: "pub"
	},
	{
		id: "oir",
		img: "012-error.png",
		title: "OIR",
		link: "https://skydoc.skyguide.corp/cs.exe/open/43914764",
		tags: "oir incident operational report",
		style: "spvr"
	},
	{
		id: "routeFinder",
		img: "016-world.png",
		title: "Route Finder",
		link: "http://rfinder.asalink.net/free/",
		tags: "flight plan fpl flugplan route finder routen tool",
		style: "aro"
	},
	{
		id: "sfoTool",
		img: "034-drone-24.png",
		title: "SFO Tool",
		link: "https://sfo.skyguide.ch/operator/requests",
		tags: "sfo special flight office tool",
		style: "sfo"
	},
	{
		id: "sitaConversion",
		img: "shuffle.png",
		title: "SITA Address Decoder",
		tags: "sita aftn address adresse converter",
		style: "aro"
	}, // internal link
    {
        id: "skydoc",
        img: "folder.png",
        title: "Skydoc Personal Favorites",
        link: "https://skydoc.skyguide.corp/cs.exe?func=Personal.Favorites",
        tags: "skydoc personal favorite",
        style: "general"
    },
	{
		id: "skyVector",
		img: "map.png",
		title: "SkyVector",
		link: "https://skyvector.com/",
		tags: "skyvector",
		style: "aro"
	},
	{
		id: "statusPage",
		img: "028-website.png",
		title: "Status Page",
		link: "https://app.status.io/login",
		tags: "status page",
		style: "spvr"
	},
	{
		id: "swissReg",
		img: "flight-information.png",
		title: "Swiss Aircraft Registry",
		link: "https://app02.bazl.admin.ch/web/bazl/en/#/lfr/search",
		tags: "swiss aircraft registry schweiz flugzeug hb callsign immatrikulation registration",
		style: "aro"
	},
	{
		id: "aipSwiss",
		img: "044-passport.png",
		title: "Switzerland AIP IFR/VFR",
		link: "http://eaip.skyguide.corp/",
		tags: "aip schweiz swiss switzerland",
		style: "doc"
	},
    {
        id: "timeZone",
        img: "time-zone.png",
        title: "Time Zone Converter",
        link: "https://www.timeanddate.com/worldclock/converter.html",
        tags: "utc local time zone converter calculator",
        style: "general"
    },
	{
		id: "toolboxStatus",
		img: "trello.png",
		title: "Toolbox Changelog",
		link: "https://trello.com/b/lPvSDcli",
		tags: "toolbox changelog status neuigkeiten info",
		style: "general"
	},
	{
		id: "whoIsWho",
		img: "032-employee.png",
		title: "Who is Who Skyguide",
		link: "https://performancemanager5.successfactors.eu/sf/directory?bplte_company=SkyguidePROD",
		tags: "who is whio skyguide wer person suchen",
		style: "general"
	},
    {
        id: "winterOps",
        img: "winter.png",
        title: "Winter OPS / RCR / SNOWTAM",
        link: "U:\\ZOL\\PR-Team\\AIS-ALLG\\aim-info-hub_DO NOT DELETE PLS -WM\\Documents\\Winter Ops",
        tags: "winter operations ops runway condition report snowtam from formular operationen",
        style: "pub"
    },
	{
		id: "workInstructions",
		img: "planning.png",
		title: "Work Instructions AIM OPS",
		link: "https://skydoc.skyguide.corp/cs.exe/open/42278660",
		tags: "work instructions wi aro aim",
		style: "general"
	},
	{
		id: "worldReg",
		img: "flight-information.png",
		title: "World Aircraft Registry",
		link: "http://www.airframes.org/",
		tags: "world international aircraft registry welt flugzeug callsign immatrikulation registration",
		style: "aro"
	},
	{
		id: "yea",
		img: "034-health.png",
		title: "YEA",
		link: "https://performancemanager5.successfactors.eu/sf/start/#Shell-home",
		tags: "yea year end appraisal pib gespräch performance successfactors",
		style: "general"
	},
    {
		id: "aviationReporting",
		img: "risk.png",
		title: "Aviation Reporting / Luftraumverletzung",
		link: "https://e2.aviationreporting.eu/reporting",
		tags: "luftraum verletzung melden report aviation airspace infringement anzeige selbst",
		style: "spvr"
	},
    {
		id: "routeavailabilityDocument",
		img: "route.png",
		title: "Route Availability Document",
		link: "https://www.nm.eurocontrol.int/RAD/",
		tags: "rad route availabiltiy document restriction ifps cfmu",
		style: "aro"
	},
    {
        id: "lfnOps",
        img: "chopper.png",
        title: "LFN Documents",
        link: "U:\\ZOL\\PR-Team\\AIS-ALLG\\aim-info-hub_DO NOT DELETE PLS -WM\\Documents\\LFN",
        tags: "lfn gnss low flying flight network rega mil occupancy sheet map",
        style: "aro"
    },
    {
        id: "eventReport",
        img: "alert.png",
        title: "Event Report",
        link: "http://event-report.skyguide.corp/event_report",
        tags: "duty office fuel dump checklist event report oir",
        style: "spvr"
    },
    {
        id: "dutyOffice",
        img: "alert.png",
        title: "Duty Office Documents",
        link: "U:\\ZOL\\PR-Team\\AIS-ALLG\\aim-info-hub_DO NOT DELETE PLS -WM\\Documents\\Duty Office",
        tags: "duty office fuel dump checklist event report oir",
        style: "spvr"
    },
    {
        id: "Bordercross",
        img: "barrier.png",
        title: "Crossborder Flights",
        link: "https://www.bazg.admin.ch/bazg/de/home/information-private/waren-anmelden/einfuhr-in-die-schweiz/grenzueberschreitende-fluege.html",
        tags: "cross border customs",
        style: "aro"
    },
	{
        id: "aimmappingtool",
        img: "002-maps.png",
        title: "AIM Mapping Tool",
        link: "https://aim-mapping-tool.mrweber.ch/",
        tags: "map karte mäse aim mapping tool",
        style: "aro"
    },
{
        id: "mysky",
        img: "salary.png",
        title: "mySky",
        link: "https://performancemanager5.successfactors.eu/sf/home?bplte_company=SkyguidePROD#Shell-home",
        tags: "mysky salary lohn",
        style: "general"
    },
{
	id: "password",
	img: "padlock.png",
	title: "Password Management Self-Service Portal",
	link: "http://password.skyguide.ch",
	tags: "password reset self service portal management passwort vergessen forgot security sicherheit",
	style: "general"
},
{	
	id: "docfiles",
	img: "documents.png",
	title: "Data Collection Files",
	link: "U:\\ZOL\\PR-Team\\AIS-ALLG\\Data_Collection",
	tags: "doc-naw doc naw data collection files country list flightkeys oversized amdt zeiterfassung daily folder coverage datenbank iac pdf",
	style: "doc"
},
{	
	id: "RDareas",
	img: "essay.png",
	title: "R/D Area List",
	tags: "r-area, d-area, rarea, darea, areas, kosif, aip, firing, frng, schiessanzeige, schiess, anzeige, schanz",
	style: "pub"
},
{	
	id: "regcause",
	img: "encrypt.png",
	title: "CFMU Regulation Codes",
	link: "U:\\ZOL\\PR-Team\\AIS-ALLG\\aim-info-hub_DO NOT DELETE PLS -WM\\Documents\\REGCAUSE.pdf",
	tags: "cfmu ifps regcasue regulation cause code atc capacity",
	style: "aro"
},
{
	id: "manual",
	img: "manual.png",
	title: "Toolbox Manual",
	link: "file:///U:/ZOL/PR-Team/AIS-ALLG/aim-info-hub_DO%20NOT%20DELETE%20PLS%20-WM/Manual/Toolbox%20V2%20Guidelines.pdf",
	tags: "toolbox manual guide guidelines anleitung instructions wi work user",
	style: "general",
},
{
	id: "dangerdanger",
	img: "alert.png",
	title: "Gefahr im Verzug",
	link: "U:\\ZOL\\PR-Team\\AIS-ALLG\\PUB\\Gefahr in Verzug",
	tags: "gefahr verzug danger alert",
	style: "spvr",
},
{
	id: "aimshop",
	img: "shopping-cart.png",
	title: "AIM Shop",
	link: "https://www.aimshop-skyguide.ch/deutsch/",
	tags: "aim, shop, aip, chart, karte, icao, ordner",
	style: "general",
}

];
