window.Seed = (function() {
  /*
    Let the 'main.js' could access the content here.
    Kinda like the `export` in a modern JavaScript file.
  */

  const submissions = [
    {
      id: 1,
      title: 'Yello Pail',
      description: 'On-demand sand castle construction expertise',
      url: '#',
      votes: 16,
      avatar: '../public/images/avatars/daniel.jpg',
      submissionImage: '../public/images/submissions/image-yellow.png',
    },
    // ...
  ];

  return { submissions: submissions };
})();
