'use strict';

//Array 
const steps = [
  {
  id: 1,
  title: 'Step 1',
  description: 'In step 1, you will read our policy and agree with our terms.',
  width: '400px',
  height: '300px',
  pathURL: './assets/images/image1.png',
  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: 2,
  title: 'Step 2',
  description: 'We want to get to know you more! So, upload any documents or pictures that you may want to share with us to better understand you.',
  width: '400px',
  height: '300px',
  pathURL: './assets/images/image2.png',
  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: 3,
  title: 'Step 3',
  description: 'Through our advanced technologies, we will find a match for you in every part of the world.', 
  width: '400px',
  height: '300px',
  pathURL: './assets/images/image3.png',
  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: 4,
  title: 'Step 4',
  description: 'As we connect you to people all around the world, you will receive a random mail coming from any of those people who matched with you!',
  width: '400px',
  height: '300px',
  pathURL: './assets/images/image4.png',
  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: 5,
  title: 'Step 5',
  description: 'The next step is all for you! You will read the received mail and rejoice on the wonderful writings they have written for you!',
  width: '400px',
  height: '300px',
  pathURL: './assets/images/image5.png',
  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: 6,
  title: 'Step 6',
  description: 'While you are out there trying to write out what you want to reply to your beloved match, we will be analyzing the results of your match.',
  width: '400px',
  height: '300px',
  pathURL: './assets/images/image6.png',
  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: 7,
  title: 'Step 7',
  description: 'Now the fun part! You and your match can schedule a meeting to start your new adventures!',
  width: '400px',
  height: '300px',
  pathURL: './assets/images/image7.png',
  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: 8,
  title: 'Step 8',
  description: 'With successful meetings, comes successful friendship! You have finally gained a new friend!',
  width: '400px',
  height: '300px',
  pathURL: './assets/images/image8.png',
  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
},
{
  id: 9,
  title: 'Step 9',
  description: 'But it does not have to stop there! We will contact you or will email you a form and review our service. With this, we can improve our system and make current and future clients more satisfied.',
  width: '400px',
  height: '300px',
  pathURL: './assets/images/image9.png',
  imgURL: 'https://undraw.co/illustrations',
  credit: 'unDraw',
  creditURL: 'https://undraw.co/license'
}
];

//Creating a loop for the the arrays 

// creating a const for gallery id
const gallery = document.querySelector('#gallery');

let output = '';

// used forEach to create a loop 
steps.forEach(function (images){

  // used gallery HTML to achieve output of images, title, description and width. Did not insert credits as it is all the same for each image and is done through HTML instead
  output += `<h2>${images.title}</h2>
  <figure class="image-item">
  <img src="${images.pathURL}" alt="${images.title}" width="${images.width}"/>
  <figcaption>${images.description}</figcaption>
  </figure>`;

  gallery.innerHTML = output; 
});