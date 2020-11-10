let merchandiseArray = [
    {
        item: 'Free Your Mind Tee ' ,
        group: 'apparel',
        image:  'https://d1h6olfj08dopz.cloudfront.net/images/36731/v600_EnVoguq_FreeYourMind_Women_sWhite_T-Shirt_F.png',
        description: 'Limited Edition Tee',
        price: 23,
    },
    {
        item: 'En Vogue Dad Hat' ,
        group: 'apparel',
        image: 'https://www.google.com/search?q=en+vogue+dad+har&rlz=1C1CHBF_enUS917US918&sxsrf=ALeKk01fM52Z3wQCFG_AJrHKUbCIPgECaQ:1604543731396&tbm=isch&source=iu&ictx=1&fir=qLWgiEQay7yGmM%252CGy_BWZK5wtuLFM%252C_&vet=1&usg=AI4_-kT8qzPvgQ2NGHKMmpIgrNnLEAA34A&sa=X&ved=2ahUKEwiokouZr-rsAhVjm-AKHXvBBusQ9QF6BAgKEAg#imgrc=qLWgiEQay7yGmM',
        description: 'Top off your EV Look!',
        price: 18,
    },
    {
        item: 'En Vogue Diamond Pillow',
        group: 'EVHome',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDgR3OEo-xCP2smmpzBvLDE9tL9cVdyGTn6c4pbUjZq4_IHwJS519x3odTzfb37NI6j2yM8P33tZ8rmnkVvHfllfnk-yC4aBLjDnZ3GOw&usqp=CAE',
        description: 'Accent your home with this beautiful pillow',
        price: 18,
    },
    
    {
        item: 'En Vogue Picture Magnet' ,
        group: 'EVHome',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVXAaFmE_3AzrSGJRFd1FpUvonOC-benrluwAeDejPx3nee76nRTFrMdJhs0X6WfQqsTTQ0kQgB89JXAi26GRy9Mhkjw46gZpxrmdNzPxZRz94dZBnAcbU2Q&usqp=CAE',
        description: 'Show your EV fandom on your refridgerator',
        price: 8,
    },
    {
        item: 'An En Vogue Christmas' ,
        group: 'media',
        image: '',
        description:'En Vogue bringing you some holiday cheer! When her late father and uncle Marty club, The Opera House is about to be foreclosed, Kendall must convince her old friends Terry Cindy and Rhona of the R&B powerhouse En Vogue to put on a Christmas concert to keep the beloved club in business.',
        price: 19,
    },
    {
        item: 'Autographed Rhona Bennett Photo' ,
        group: 'CollectorMerchandise',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYy71KJLx_v9xtgbhFxeptNc9qN2DU-Yrb3W7RYdvr2GHG0C90pKBcJoRHM8h49r6cFR0oMrdBz4-bEzWlGmp6yDC3LNhbWEmPM-Ll_UU&usqp=CAE',
        description: 'Limited Edition Autographed Photo with Certificate of Authentication',
        price: 125,
    },
    {
        item: 'Electric Cafe Album' ,
        group: 'media',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYy71KJLx_v9xtgbhFxeptNc9qN2DU-Yrb3W7RYdvr2GHG0C90pKBcJoRHM8h49r6cFR0oMrdBz4-bEzWlGmp6yDC3LNhbWEmPM-Ll_UU&usqp=CAE',
        description: 'Get EVs latest studio album!',
        price: 14,
    },
    ]
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};

const merchPrinter = (MerchandiseArray) => {
let domString = '';
for (i = 0; i < Merchandisearray.length; i++) { 
domString += 
<div class= "card" style="width: 18rem">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class= "card-body">
        <h5 class= "card-title">${MerchandiseArray[i].name}</h5>
        <p class= "card-text">${MerchandiseArray[i].price}</p>
        <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
    </div>
</div>




{/* for (let i = 0; i <Merchandisearray.length; i++) { 
  domString += `<h1>${arrayOfStudents[i].all}</h1>`;
  domString += `<h1>${arrayOfStudents[i].apparel}</h1>`;
  domString += `<h1>${arrayOfStudents[i].media}</h1>`;
  domString += `<h1>${arrayOfStudents[i].tourmerchandise}</h1>`;
  domString += `<h1>${arrayOfStudents[i].CollectorMerchandise}</h1>`;
  domString += `<h1>${arrayOfStudents[i].EVHome}</h1>`;
}

for (let i = 0; i <MerchandiseArray.length; i++) { 
        merchPrinter(MerchandiseArray) */}
    };
    
    const Apparel = MerchandiseArray.filter(item => item.type === 'apparel')
    const Media = MerchandiseArray.filter(item => item.type === 'media')
    const tourMerchandise =MerchandiseArray.filter(item => item.type === 'tourmerchandise')
    const CollectorMerchandise = MerchandiseArray.filter(item => item.type === 'CollectorMerchandise')
    const EVHome = MerchandiseArray.filter(item => item.type === 'EVHome')
    const All = MerchandiseArray.filter(item => item.type === 'apparel' || 'media' || 'tourmerchandise' || 'CollectorMerchandise' || 'EVHome'


    const printMerchandise = () => {
        document.getElementById("merchCards").innerHTML = MerchandiseArray.innerHTML = 
        Apparel.map(function (apparel) {
            return `
        }