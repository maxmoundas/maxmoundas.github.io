// navigation.js
const navItems = [
    { title: 'About Me', url: 'aboutme.html' },
    { title: 'Work Experience', url: 'workexperience.html' },
    { title: 'Projects', url: 'projects.html' },
    { title: 'Research', url: 'research.html' }
];

function createNavigation(currentPage) {
    const nav = document.getElementById('nav');
    const linksList = document.createElement('ul');
    linksList.className = 'links';

    navItems.forEach(item => {
        const li = document.createElement('li');
        if (currentPage === item.url) {
            li.className = 'active';
        }
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.title;
        li.appendChild(a);
        linksList.appendChild(li);
    });

    const socialList = document.createElement('ul');
    socialList.className = 'icons';
    socialList.innerHTML = `
        <li><a href="https://www.linkedin.com/in/maxmoundas/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
        <li><a href="https://github.com/maxmoundas" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
    `;

    nav.appendChild(linksList);
    nav.appendChild(socialList);
}