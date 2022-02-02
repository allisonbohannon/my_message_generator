console.log('Hello, world! This is the message generator');
const messageGenerator = () => {
    const heavenlyBodies = ['star', 'sun', 'moon', 'asteroid']; 
    const planets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Pluto']; 
    const fortune = ['meet an attractive stranger', 'stub your toe', 'find $20 in a coat pocket', 'pick the best item on the menu', 'sneeze so hard you pee a little', 'audibly fart at an embarrassing moment'];
    let a = Math.floor(Math.random()*heavenlyBodies.length);
    let b = Math.floor(Math.random()*planets.length);
    let c = Math.floor(Math.random()*fortune.length);
    return `Your ${heavenlyBodies[a]} is in ${planets[b]}. Today you will ${fortune[c]}.`
}; 
console.log(messageGenerator());