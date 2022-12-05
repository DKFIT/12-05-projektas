

const get = async () => {
    //gauti duomenis is api
    try {
        let links = ["https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2022-2-1&api_key=9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8",
            "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-2-1&api_key=9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8",
            "https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/photos?earth_date=2022-2-1&api_key=9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8"]

for (let i in links) {
        let res = await fetch(links[i])
        let data = await res.json();
        console.log(links[i]);
        // console.log(data.results);
        // console.log(data.results[0]);
        const articles = ['all'];
        const my_main_div = document.getElementById('maindiv');

        for (let i = 0; i < data.photos.length; i++) {



            //kurti div kiekvienam article
            const one_arcitcle_info = document.createElement('div');
            one_arcitcle_info.className = 'card'
            // console.log(data.photos[i].img_src)

            //ideti img
            const article_pic = document.createElement('img')
            article_pic.src = data.photos[i].img_src;
            one_arcitcle_info.appendChild(article_pic);
            // ideti tema
            const article_land = document.createElement('h4')
            article_land.innerText = "Landing date: " + data.photos[i].rover.landing_date;
            one_arcitcle_info.appendChild(article_land);

            // //ideti kiekva article
            const article_title = document.createElement('h3');
            article_title.innerText = data.photos[i].rover.name;
            one_arcitcle_info.appendChild(article_title);
            //     // ideti read more
            //     let article_read = document.createElement('button');
            //     article_read.innerText = "Read more"
            //     article_read.className = 'abutton'

            //     article_read.addEventListener("click", function () {
            //         document.location.href = data.results[i].short_url;
            //     });
            //     one_arcitcle_info.appendChild(article_read)

            // }
            // const article_buttons = document.querySelector('header');

            // console.log(articles)

            // articles.forEach(articles => {
            //     const menuButton = document.createElement('button');
            //     menuButton.innerText = articles;
            //     menuButton.className = "menub"
            //     article_buttons.appendChild(menuButton);

            // })
            // const navbuttons = document.getElementsByClassName('menub');
            // const card_art = document.getElementsByTagName('h4');

            // for (let one_category of navbuttons) {

            //     one_category.addEventListener('click',
            //         () => { getart(one_category.innerText) })
            // }
            // console.log(articles)
            // const getart = (articles) => {

            //     for (let item of card_art) {
            //         if (item.innerText === articles || articles === 'all') {
            //             item.parentElement.style.display = "block";

            //         }
            //         else {
            //             item.parentElement.style.display = "none"

            //         }
            //     }

            // //sudeti viska i div
            my_main_div.appendChild(one_arcitcle_info);
        }
    }
    }
    catch (error) {
        console.log(error);
    }
};
console.log(get());

