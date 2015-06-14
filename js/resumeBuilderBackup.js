$("#header").append()

//var formattedName = HTMLheaderName.replace("%data%", "Max");
//$("#header").prepend(formattedName);

//var formattedRole = HTMLheaderRole.replace("%data%", "Developer");
//$("#header").append(formattedRole);


var bio = {
	"name" : "Max Rangeley",
	"role" : "Web Developer",
	"contacts": {
		"mobile": "12345678",
		"email": "me@email.com",
		"github": "myGitHUb",
		"twitter": "@me",
		"location": "Devon"
	},
	"welcomeMessage": "Hello to everybody",
	"skills": [
	"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/fry.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);


var education = {
    "schools": [
        {
            "name": "Aberdeen",
            "location": "Aberdeen",
            "degree": "Masters",
            "majors": [
                "Economics"
            ],
            "dates": 2005,
            "url": "university.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "FEWD",
            "school": "Udacity",
            "dates": 2015,
            "url": "www.udacity.com"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "ReboundTAG",
            "title": "CEO",
            "location": "Ashburton",
            "dates": "2015",
            "description": "CEO of ReboundTAG, which sells microchip luggage tags to airlines and other areas of the travel industry. I designed the website using a Bootstrap template"
        },
        {
            "employer": "The Cobden Centre",
            "title": "Editor",
            "location": "Ashburton",
            "dates": "2015",
            "description": "Editor for economics think tank founded by Member of Parliament, also designed the website using a Wordpress template."
        }
    ]
}

var projects = {
    "projects": [
        {     
            "title": "ReboundTAG website",
            "dates": "2014",
            "description": "Building website for microchip luggage tag product/service",
            "images": []
        }
    ]
}

if(bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

/*function displayBio() {
	for (contacts in bio.contacts) {
		$("#header").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace
		("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace
		("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace
		("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace
		("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
}
}*/

function displayContact() {
	for (contacts in bio.contacts) {
		$("#header").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace
		("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace
		("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace
		("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace
		("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
}
}


work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace
		("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace
		("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace
		("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace
		("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
}
}
work.display();


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}	
	}
}

projects.display()
//function displayEducation()

education.display =function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace
		("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedschoolName);
		
		var formattedschoolDegree = HTMLschoolDegree.replace
		("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedschoolDegree);

		var formattedschoolDates = HTMLschoolDates.replace
		("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedschoolDates);

		var formattedschoolLocation = HTMLschoolLocation.replace
		("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedschoolLocation);
}
	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);

		var formattedonlineTitle = HTMLonlineTitle.replace
		("%data%", education.onlineCourses[onlineCourse].title);
		$(".education-entry:last").append(formattedonlineTitle);
		
		var formattedonlineSchool = HTMLonlineSchool.replace
		("%data%", education.onlineCourses[onlineCourse].school);
		$(".education-entry:last").append(formattedonlineSchool);

		var formattedonlineDates = HTMLonlineDates.replace
		("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedonlineDates);
}
}
education.display()


function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1]
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);




/*
education["name"] = "Udacity";
education["years"] = "2015";
education["city"] = "Online";


$("#main").append(work["position"]);
$("#main").append(education.name);
$("#main").append(bio.name);
}
*/

/*
var work ={};
work.position = "Developer";
work.employer = "Udacity";
work.years = 0.3;
*/