let tooltip;

function showTooltip(event) {
  const img = event.target;
  tooltip = document.createElement("div");
  tooltip.innerText = img.alt;

  Object.assign(tooltip.style, {
    position: "absolute",
    background: "#1d2236",
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "16px",
    pointerEvents: "none",
    zIndex: "9999",
    top: event.pageY + 10 + "px",
    left: event.pageX + 10 + "px",
  });

  document.body.appendChild(tooltip);
}

function moveTooltip(event) {
  if (tooltip) {
    tooltip.style.top = event.pageY + 10 + "px";
    tooltip.style.left = event.pageX + 10 + "px";
  }
}

function hideTooltip() {
  if (tooltip) {
    tooltip.remove();
    tooltip = null;
  }
}

//de aca pa abajo

const personalInfo = {
  name: "Juaquin Morales",
  role: "Full Stack Developer",
  experienceYears: 4,
  description: `I'm a full stack developer, passionate about building responsive and dynamic applications.`,
  location: "Uruguay",
  email: "juaquin.moralesbb@gmail.com",
  phone: "+59894429573"
};

const technologies = {
  core: [
    { name: "HTML", icon: "/Resources/html.png" },
    { name: "CSS", icon: "/Resources/css.png" },
    { name: "JavaScript", icon: "/Resources/JavaScript.png" },
    { name: "React", icon: "/Resources/react.png" },
    { name: "Node.js", icon: "/Resources/node.png" },
    { name: "Express", icon: "/Resources/express.png.png" },
    { name: "Next.js", icon: "/Resources/next.png" },
    { name: "Python", icon: "/Resources/python.png" }
  ],
  additional: [
    { name: "AWS", icon: "/Resources/aws.png" },
    { name: "Django", icon: "/Resources/django.png" },
    { name: "Docker", icon: "/Resources/Docker.png.png" },
    { name: "PostgreSQL", icon: "/Resources/postgresql.png" },
    { name: "Tailwind", icon: "/Resources/tailwind.png" },
    { name: "TypeScript", icon: "/Resources/Typescript.png.png" },
    { name: "Angular", icon: "/Resources/angular.png" },
    { name: "MongoDB", icon: "/Resources/mongodb.png" }
  ]
};

const projects = [
  {
    title: "Car Wash App",
    description: "App for organitation and finances with React, Node, and MongoDB.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/Resources/car.jpg",
    link: "nada.com"
  },
  {
    title: "Musician Page",
    description: "Page For the artist Juan Viana.",
    technologies: ["Next.js", "Tailwind CSS"],
    image: "/Resources/music.jpg",
    link: "nada.com"
  },
  {
    title: "Transport App",
    description: "Mobile and web app to manage travels bookings and revenue.",
    technologies: ["React Native", "Express", "PostgreSQL"],
    image: "/Resources/uber.jpg",
    link: "nada.com"
  }
];
