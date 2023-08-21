var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("guest@adnanamara.me~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase().replace(/\s/g, '')) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "about":
      loopLines(about, "color2 margin", 80);
      break;
    case "cv":
      addLine("Loading humble cv...", "color2", 80);
      newTab(cv);
      break;
    case "meme":
      addLine("No way!, then ...", "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=rEq1Z0bjdwc');
      }, 1000); 
      break;
    case "links":
      loopLines(links, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "email":
      addLine('mail me at <a href="mailto:adnan.amara@etu.enp-oran.dz">adnan.amara@etu.enp-oran.dz</a>', "color2", 80);
      break;
    // case "blogs":
    //   loopLines(blogs, "color2 margin", 80);
    //   break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      setTimeout(function() {
        loopLines(banner, "", 80);
        textarea.focus();
      }, 100);
      break;
    // links
    case "LinkedIn":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(LinkedIn);
      break;
    case "X":
      addLine("Opening X profile...", "color2", 0);
      newTab(X);
      break;
    case "Github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(Github);
      break;
    default:
      addLine("Command not found. For a list of commands, type <span class=\"command\">help</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
