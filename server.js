const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
const quizzes = [];
// Przykładowy quiz
const posts = [
  {
    "_id": 1,
    "_email": "admin@mail.pl",
    "_nickname": "admin",
    "_password": "admin",
    "_name": "Imie_admina",
    "_surname": "Nazwisko_admina",
    "_liczbaObserwujacych":null,
    "_osobyKtoreObserwuje":null,
    "_posty": null
  },
  {
    "_id": 2,
    "_email": "user@mail.pl",
    "_nickname": "user",
    "_password": "user",
    "_name": "Imie_usera",
    "_surname": "Nazwisko_usera",
    "_liczbaObserwujacych":null,
    "_osobyKtoreObserwuje":null,
    "_posty": [
      {
        "_id": 1,
        "_idUsera":2,
        "_title": "Ulubione gry",
        "_content": "Moimi ulubionymi grami sa lol i cs",
        "_wasEdited": false,
        "_liczbaLikow": null,
        "_previousEditions": null,
        "_comments": null
      },
      {
        "_id": 2,
        "_idUsera":2,
        "_title": "Ulubione filmy",
        "_content": "Moimi ulubionymi filmami sa gwiezdne wojny i Harry Potter",
        "_wasEdited": false,
        "_liczbaLikow": null,
        "_previousEditions": null,
        "_comments": null
      }
    ]
  },
  {
    "_id": 3,
    "_email": "user2@mail.pl",
    "_nickname": "user2",
    "_password": "user2",
    "_name": "Imie_usera2",
    "_surname": "Nazwisko_usera2",
    "_liczbaObserwujacych":null,
    "_osobyKtoreObserwuje":null,
    "_posty": [
      {
        "_id": 3,
        "_idUsera":3,
        "_title": "Ulubione gry us2",
        "_content": "Moimi ulubionymi grami sa lol i cs us2",
        "_wasEdited": false,
        "_liczbaLikow": null,
        "_previousEditions": null,
        "_comments": [
          {
            "_nickname": "nick_usera2",
            "_content": "Pierwszy komentarz ever",
            "_wasEdited": false
          }
        ]
      },
      {
        "_id": 4,
        "_idUsera":3,
        "_title": "Ulubione filmy us2",
        "_content": "Moimi ulubionymi filmami sa gwiezdne wojny i Harry Potter us2",
        "_wasEdited": false,
        "_liczbaLikow": null,
        "_previousEditions": null,
        "_comments": null
      }
    ]
  },
  {
    "_id": 4,
    "_email": "user3@mail.pl",
    "_nickname": "user3",
    "_password": "user3",
    "_name": "Imie_usera3",
    "_surname": "Nazwisko_usera3",
    "_liczbaObserwujacych":null,
    "_osobyKtoreObserwuje":null,
    "_posty": null
  }
]



app.get('/posts', (req, res) => {
  res.json(posts);
});


app.post('/posts', (req, res) => {
  console.log("XD")
  const newUser = req.body;
  newUser._id = posts.length + 1;
  posts.push(newUser);
  res.status(201).json(newUser);

});

app.delete('/posts/:id', (req, res) => {
  console.log("XD");
  const postId = parseInt(req.params.id);
  const index = posts.findIndex((p) => p._id === postId);

  if (index !== -1) {
    const deletedPost = posts.splice(index, 1);
    res.json(deletedPost[0]);
  } else {
    res.status(404).json({ error: 'Nie znaleziono usera' });
  }
});

app.put('/posts/:id', (req, res) => {
  console.log("XD")
  const postId = parseInt(req.params.id);
  const newPost = req.body;
  const index = posts.findIndex(post => {
    return post._id === postId;
  });
  posts[index] = newPost;
  res.status(200).json(newPost);
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
