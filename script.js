const steps = [
  {
  id: step1,
  title: 'Step 1',
  description: 'In step 1, you will read our policy and agree with our terms.',
  width: '500px',
  height: '300px',
  pathURL: './assets/images/image1/',
  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: step2,
  title: 'Step 2',
  description: 'We want to get to know you more! So, upload any documents or pictures that you may want to share with us to better understand you.',
  width: '500px',
  height: '300px',
  pathURL: './assets/images/image2/',

  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: step3,
  title: 'Step 3',
  description: 'Through our advanced technologies, we will find a match for you in every part of the world.', 
  width: '500px',
  height: '300px',
  pathURL: './assets/images/image3/',

  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id:step4,
  title: 'Step 4',
  description: 'As we connect you to people all around the world, you will receive a random mail coming from any of those people who matched with you!',
  width: '500px',
  height: '300px',
  pathURL: './assets/images/image4/',

  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: step5,
  title: 'Step 5',
  description: 'The next step is all for you! You will read the received mail and rejoice on the wonderful writings they have written for you!',
  width: '500px',
  height: '300px',
  pathURL: './assets/images/image5/',

  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: step6,
  title: 'Step 6',
  description: 'While you are out there trying to write out what you want to reply to your beloved match, we will be analyzing the results of your match.',
  width: '500px',
  height: '300px',
  pathURL: './assets/images/image6/',

  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: step7,
  title: 'Step 7',
  description: 'Now the fun part! You and your match can schedule a meeting to start your new adventures!',
  width: '500px',
  height: '300px',
  pathURL: './assets/images/image7/',

  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: step8,
  title: 'Step 8',
  description: 'With successful meetings, comes successful friendship! You have finally gained a new friend!',
  width: '500px',
  height: '300px',
  pathURL: './assets/images/image8/',

  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: step9,
  title: 'Step 9',
  description: 'But it does not have to stop there! We will contact you or will email you a form and review our service. With this, we can improve our system and make current and future clients more satisfied.',
  width: '500px',
  height: '300px',
  pathURL: './assets/images/image9/',

  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
}
];

/* Loop
steps.forEach(function(step){
  console.log(steps.title);
});

const stepPics = steps.filter(function(step){
  return step.credit === 'unDraw';
}) */

let output = '<figure>\n';

steps.forEach(function(step, index){
  output += `<img src= "./assets/images/">`;
});

output += '</figure>';

document.querySelector('main').innerHTML = output;