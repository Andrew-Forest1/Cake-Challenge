// your code here
document.addEventListener('DOMContentLoaded', () => {
    const cakeDetails = document.getElementById("cake-details")
    const cakeList = document.getElementById("cake-list")
    const reviewForm = document.getElementById("review-form")
    const reviewList = document.getElementById("review-list")

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const newReview = document.createElement("li");

        newReview.innerText = e.target.review.value;
        reviewList.appendChild(newReview);
    })

    const fetchData = () => {
        fetch("http://localhost:3000/cakes")
        .then(res => res.json())
        .then(data => createCakeList(data))
    }

    fetchData()

/*     {
        "id": 2,
        "name": "My Cake is Poppin, My Cake is Cool",
        "description": "My Cake is Poppin, My Cake is Cool is elegant, refined, assured, tasty... This cake shows that fruit cakes do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.",
        "image_url": "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/popcorn-cake.jpg",
        "reviews": [
          "Lil Mama's fav cake!!!",
          "Like a river of joy"
        ]
      }, */
    const createCakeList = (cakes) => {
/*         debugger
        const numChildren = cakeList.childElementCount;

        for(let index = 0; index < numChildren; index++){
            cakeList.removeChild(cakeList.lastChild);
        } */

        cakeList.innerHTML = '';

        cakes.forEach((cake) => {
            const newCake = {
                id: cake.id,
                name: cake.name,
                description: cake.description,
                image_url: cake.image_url,
                reviews: cake.reviews
            }
            //console.log(newCake);

            const newCakeNode = document.createElement('li');
            newCakeNode.innerText = newCake.name;
            newCakeNode.addEventListener('click', () => displayCake(newCake));

            cakeList.appendChild(newCakeNode);
        })
        displayCake(cakes[0])
    }



    const displayCake = (cake) => {
        //
        const cakeImage = document.getElementById("cake-image");
        const cakeDescription = document.getElementById("cake-description");
        const cakeReviews = document.getElementById("review-list");

        cakeImage.src = cake.image_url
        cakeDescription.innerText = cake.description

        const numChildren = cakeReviews.childElementCount;
        for(let index = 0; index < numChildren; index ++){
            cakeReviews.removeChild(cakeReviews.firstChild)
        }
        

        //debugger
        cake.reviews.forEach((review) => {

            const newReview = document.createElement("li");
            //const deleteBtn = document.createElement()

            newReview.innerText = review;
            cakeReviews.appendChild(newReview);
        })
    }


})