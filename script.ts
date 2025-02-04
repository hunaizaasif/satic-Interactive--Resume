interface ContactInfo {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  description: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  dates: string;
}

interface ProjectItem{
    name: string;
    description: string;
    link: string;
}

interface ResumeData {
    name: string;
    title: string;
    contact: ContactInfo;
  about: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  projects: ProjectItem[];
}

const resumeData: ResumeData = {
  name: "Hunaiza Asif",
  title: "Software Engineer",
    contact: {
    email: "hunaiza.asif@email.com",
        phone: "+1-123-456-7890",
    linkedin: "linkedin.com/in/hunaizaasif",
    github: "github.com/hunaizaasif"
  },
  about:
    "Highly motivated software engineer with a passion for creating innovative solutions.",
  experience: [
    {
      title: "Software Engineer Intern",
      company: "Tech Company",
      dates: "May 2022 - August 2022",
      description: "Worked on developing new features for the main product."
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      dates: "August 2022 - Present",
      description:
        "Contributed to the development of the core application and designed databases."
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      dates: "2019 - 2023"
    },
    {
        degree: "Masters of Science in Computer Science",
        institution: "University Name",
        dates: "2023 - 2025"
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Git",
      "Python"
  ],
    projects:[
        {
            name:"Online Store",
            description: "Developed an online store using React, Redux, Nodejs, and Mongodb.",
            link: "github.com/project1",
        },
         {
            name:"Personal Website",
            description: "Developed a personal website using React, and material UI",
            link: "github.com/project2",
        }
    ]
};


function populateResume() {
    // Populate Header
  document.getElementById("name")!.textContent = resumeData.name;
  document.getElementById("title")!.textContent = resumeData.title;
    document.getElementById("email")!.textContent = resumeData.contact.email;
      document.getElementById("phone")!.textContent = resumeData.contact.phone;
    document.getElementById("linkedin")!.textContent = resumeData.contact.linkedin;
     document.getElementById("github")!.textContent = resumeData.contact.github;
     document.getElementById("about")!.textContent = resumeData.about;


     // Populate Experience
    const experienceContainer = document.getElementById("experience-container")!;
    resumeData.experience.forEach(item => {
       const experienceItem = document.createElement('div');
       experienceItem.classList.add('experience-item');
       experienceItem.innerHTML = `
       <h3>${item.title}</h3>
        <em>${item.company} - ${item.dates}</em>
         <p>${item.description}</p>
    `;
       experienceContainer.appendChild(experienceItem);

    });
       // Populate Education
        const educationContainer = document.getElementById("education-container")!;
       resumeData.education.forEach(item => {
          const educationItem = document.createElement('div');
           educationItem.classList.add('education-item');
          educationItem.innerHTML = `
           <h3>${item.degree}</h3>
           <em>${item.institution} - ${item.dates}</em>
        `;
          educationContainer.appendChild(educationItem);
    });

       // Populate skills
    const skillsList = document.getElementById("skills-list")!;
  resumeData.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

    // Populate projects
    const projectsContainer = document.getElementById("projects-container")!;
    resumeData.projects.forEach(item => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
        <h3>${item.name}</h3>
         <p>${item.description}</p>
         <a href="${item.link}" target="_blank">Project Link</a>
        `;
        projectsContainer.appendChild(projectItem);
    });
}

populateResume();