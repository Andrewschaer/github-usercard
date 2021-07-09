import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// STEP 1: COMPLETE

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

// STEP 2: COMPLETE
//   const sample = {
//     "login": "Andrewschaer",
//     "id": 24277559,
//     "node_id": "MDQ6VXNlcjI0Mjc3NTU5",
//     "avatar_url": "https://avatars.githubusercontent.com/u/24277559?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/Andrewschaer",
//     "html_url": "https://github.com/Andrewschaer",
//     "followers_url": "https://api.github.com/users/Andrewschaer/followers",
//     "following_url": "https://api.github.com/users/Andrewschaer/following{/other_user}",
//     "gists_url": "https://api.github.com/users/Andrewschaer/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/Andrewschaer/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/Andrewschaer/subscriptions",
//     "organizations_url": "https://api.github.com/users/Andrewschaer/orgs",
//     "repos_url": "https://api.github.com/users/Andrewschaer/repos",
//     "events_url": "https://api.github.com/users/Andrewschaer/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/Andrewschaer/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 24,
//     "public_gists": 0,
//     "followers": 0,
//     "following": 0,
//     "created_at": "2016-11-30T18:10:01Z",
//     "updated_at": "2021-06-17T19:09:56Z"
// }

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards')

axios.get(`https://api.github.com/users/andrewschaer`)
  .then(response => {
    const gitHubCard = gitHubCardMaker(response.data)
    cards.appendChild(gitHubCard)
  })
  .catch(err => console.group(err.message))
  .finally(() => console.group('done'))

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach( item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then(response => {
    const gitHubCard = gitHubCardMaker(response.data)
    cards.appendChild(gitHubCard)
  })
  .catch(err => console.group(err.message))
  .finally(() => console.group('done'))
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitHubCardMaker (singleObject) {
  // instantiating the elements
  const gitHubCard = document.createElement('div')
  const cardImage = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardName = document.createElement('h3')
  const cardUserName = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  const cardLinkProfile = document.createElement('a')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')
  // setting class names, attributes and text
  gitHubCard.classList.add('card')
  cardImage.src = singleObject.avatar_url
  cardInfo.classList.add('card-info')
  cardName.classList.add('name')
  cardName.textContent = `${singleObject.name}`
  cardUserName.classList.add('username')
  cardUserName.textContent = `${singleObject.login}`
  cardLocation.textContent = `Location: ${singleObject.location}`
  cardProfile.textContent = `Profile: `
  cardLinkProfile.href = singleObject.avatar_url
  cardFollowers.textContent = `Followers: ${singleObject.followers}`
  cardFollowing.textContent = `Following: ${singleObject.following}`
  cardBio.textContent = `Bio: ${singleObject.bio}`
  // creating the hierarchy
  gitHubCard.appendChild(cardImage)
  gitHubCard.appendChild(cardInfo)
  cardInfo.appendChild(cardName)
  cardInfo.appendChild(cardUserName)
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(cardProfile)
  cardProfile.appendChild(cardLinkProfile)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)
  // never forget to return!
  return gitHubCard
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
