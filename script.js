function HackathonInformation (title, duration) {
    this.title = title;
    this.duration = duration;
}

let hackathons = [new HackathonInformation("NW Hacks", "Jan 9 - 11"), new HackathonInformation("Cruz Hacks", "Jan 9 - 12")];
console.log(hackathons);


for (let h of hackathons) {
    let lastBox = document.querySelector('div.bottom-half').lastElementChild;
    
    let newDiv = document.createElement('div');
    newDiv.className = 'hack-information';
    
    let title = document.createElement('h3');
    title.style.fontWeight = 'bold';
    title.innerText = h.title;

    let duration = document.createElement('h3');
    duration.style.fontWeight = 'bold';
    duration.innerText = h.duration;

    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.style['text-transform'] = 'uppercase';

    let linkText = document.createTextNode('Learn More');

    link.appendChild(linkText);

    newDiv.appendChild(title);
    newDiv.appendChild(duration);
    newDiv.appendChild(link);

    lastBox.insertAdjacentElement('afterend', newDiv);

}