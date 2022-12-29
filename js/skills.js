let technology = ['HTML5','CSS3','JAVASCRIPT','PHP','MySQL','C','PYTHON']
let tech_description = {
    'html5': 'Com HTML5 aprendi bla, bla, bla',
    'css3': 'Com CSS3 aprendi bla, bla, bla',
    'javascript': 'Com JavaScrip aprendi bla, bla, bla',
    'php': 'Com PHP aprendi bla, bla, bla',
    'mysql': 'Com MySQL aprendi bla, bla, bla',
    'c': 'Com C aprendi bla, bla, bla',
    'python': 'Com python aprendi bla, bla, bla'
}

let tech = document.getElementById('tech');

for(let i = 0; i < technology.length; i++){
    tech.innerHTML += `<div class='tech'>${technology[i]}
    <div id='${technology[i].toLowerCase()}'></div>
    </div>`;
}



let description = document.querySelector('section#content article.description');
let skills = document.querySelector('section#content article');
let skill = document.getElementsByClassName('tech');

for(let i = 0; i < skill.length; i++){
    skill[i].addEventListener('mouseover', ()=>{

        skills.classList.add('border');
        description.classList.remove('hidden')

        tech_name = skill[i].innerText;
        t_name = tech_name.toLowerCase()

        description.innerHTML = `<div><h1 class="name">${tech_name}</h1>
        <p class="info">${tech_description[t_name]}</p>
        </div>`;
    });

    skill[i].addEventListener('mouseout', ()=>{
        description.classList.add('hidden');
        skills.classList.remove('border');
    });
}





