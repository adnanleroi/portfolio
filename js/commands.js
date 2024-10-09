var linkedin = "https://www.linkedin.com/in/adnan-amara/";
var twitter = "https://twitter.com/westaxka";
var github = "https://github.com/adnanleroi/";
var email = "mailto:adnanamara213@gmail.com";
var cv = "assets/resume.pdf";

links = [
  "<br>",
  'linkedin      <a href="' + linkedin + '" target="_blank">in/adnan-amara' + '</a>',
  "<br>",
  'github        <a href="' + github + '" target="_blank">github/adnanleroi' + "</a>",
  "<br>",
  'twitter        <a href="' + twitter + '" target="_blank">twitter/westaxka' + "</a>",
  "<br>"
];

secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>"
];

projects = [
  "<br>",
  '##  Design and Implementation of an embedded electronic and computer interface for localization and navigation of a mobile robot in an unknown environment',' Developed an autonomous navigation system for an indoor mobile robot using the Robot Operating System (ROS). The project involved three key modules: mapping (SLAM algorithm with 2D/3D sensor data), localization (AMCL approach for pose estimation), and planning (utilizing the navigation stack for collision-free trajectory generation and control commands).',"<br>",
  '##  Temperature Indicator','A system that takes into account both external and internal temperatures,equipped with two temperature probes, one to be placed outside and the other inside the habitat (both to be kept in the shade).',"<br>",
  '## Arduino Based CNC Plotter Machine','Numerous CNC machines exist globally, with some being highly technical and complex to manufacture or operate successfully. Due to this, the decision was made to construct a straightforward CNC machine based on the Arduino platform, which is by far the easiest to construct.',"<br>"
];

help = [
  "<br>",
  '<span class="command">about</span>          Who am I ?',
  '<span class="command">cv</span>             Curriculum vitae',
  '<span class="command">links</span>          Display useful links',
  '<span class="command">projects</span>       View my projects',
  // '<span class="command">blogs</span>          Read my blogs',
  '<span class="command">help</span>           You know what this does',
  '<span class="command">email</span>          Email me',
  '<span class="command">clear</span>          Clear terminal',
  "<br>",
];

const deviceTypeAbout = () => {
  const ua = navigator.userAgent;
  
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    about = [
      "<br>",
      "my name is Adnan Amara,", "I am an electronics and embedded systems engineer from Canada ✨","<br>",
      "👀 I\'m interested in Hardware hacking"," Robotics"," embedded systems","Microelectronics","<br>",
      "🌱 I believe that autonomous driving should not be limited to high-end vehicles","so I'm looking forward to develop retrofit kits that can be installed on existing cars to make them autonomous","<br>",
      "📄 I\'m looking to collaborate on a research paper","<br>", 
      "📫 How to reach me : adnanamara213@gmail.com","<br>",
      "<br>"
    ];

  }else{
  
    about = [
      "<br>",
      "my name is Adnan Amara, I am an electronics and embedded systems engineer from Canada ✨",
      "👀 I\'m interested in Hardware hacking, Robotics, embedded systems, Microelectronics",
      "🌱 I believe that autonomous driving should not be limited to high-end vehicles, so I'm looking forward","   to develop retrofit kits that can be installed on existing cars to make them autonomous",
      "📄 I\'m looking to collaborate on a research paper", 
      "📫 How to reach me : adnanamara213@gmail.com",
      "<br>"
    ];
  }
  return about;
};


banner =[
  "loading portfolio ...",
  "installing cv ...",
  "other dependencies ...",
  "--------------",
  "done !",
  "<br>",
  '<span class="color2">Hi there 👋, Welcome to my interactive web terminal.</span>',
  "For a list of available commands, type <span class=\"command\">help</span>",
  "<br>"
];

about = deviceTypeAbout();
