let merchandiseArray = [
    {
        item: 'Free Your Mind Tee ' ,
        group: 'apparel',
        image:  'https://d1h6olfj08dopz.cloudfront.net/images/36731/v600_EnVoguq_FreeYourMind_Women_sWhite_T-Shirt_F.png',
        description: 'Limited Edition Tee',
        price:'  $23',
    },
    {
        item: 'En Vogue Dad Hat' ,
        group: 'apparel',
        image: 'https://d1h6olfj08dopz.cloudfront.net/images/34423/EV_Port-_-Company_Unstructured-Hat_CP77_F2.png',
        description: 'Top off your EV Look!',
        price:'  $18',
    },
    {
        item: 'En Vogue Diamond Pillow',
        group: 'EVHome',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDgR3OEo-xCP2smmpzBvLDE9tL9cVdyGTn6c4pbUjZq4_IHwJS519x3odTzfb37NI6j2yM8P33tZ8rmnkVvHfllfnk-yC4aBLjDnZ3GOw&usqp=CAE',
        description: 'Accent your home with this beautiful pillow',
        price:'   $18',
    },
    
    {
        item: 'En Vogue Picture Magnet' ,
        group: 'EVHome',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVXAaFmE_3AzrSGJRFd1FpUvonOC-benrluwAeDejPx3nee76nRTFrMdJhs0X6WfQqsTTQ0kQgB89JXAi26GRy9Mhkjw46gZpxrmdNzPxZRz94dZBnAcbU2Q&usqp=CAE',
        description: 'Show your EV fandom on your refridgerator',
        price:'   $8',
    },
    {
        item: 'An En Vogue Christmas' ,
        group: 'media',
        image: 'https://d2snwnmzyr8jue.cloudfront.net/mar_413_270.jpeg',
        description:'En Vogue bringing you some holiday cheer! When her late father and uncle Marty club, The Opera House is about to be foreclosed, Kendall must convince her old friends Terry Cindy and Rhona of the R&B powerhouse En Vogue to put on a Christmas concert to keep the beloved club in business.',
        price:'  $19',
    },
    {
        item: 'Autographed Rhona Bennett Photo' ,
        group: 'CollectorMerchandise',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYy71KJLx_v9xtgbhFxeptNc9qN2DU-Yrb3W7RYdvr2GHG0C90pKBcJoRHM8h49r6cFR0oMrdBz4-bEzWlGmp6yDC3LNhbWEmPM-Ll_UU&usqp=CAE',
        description: 'Limited Edition Autographed Photo with Certificate of Authentication',
        price:'   $125',
    },
    {
        item: 'Electric Cafe Album' ,
        group: 'media',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTsgP0t85lIxy_ImbMkrThYULTmoqRPrNslA&usqp=CAU',
        description: 'Get EVs latest studio album!',
        price:'  $14',
    },
    ]
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};

const merchPrinter = (merchandiseArray) => {
    let domString = '';
    for ( i = 0; i < merchandiseArray.length; i++) { 
      domString += `      
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${merchandiseArray[i].image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${merchandiseArray[i].item}</h5>
          <p class= "card-text">${merchandiseArray[i].description} ,${merchandiseArray[i].price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>      
    `
      } 
      printToDom('allInfo', domString)
  }
  
  const init = () => {
  merchPrinter(merchandiseArray)
  };
  
  init();
  
  const apparel_sorts = merchandiseArray.filter(group => group .type === 'apparel')
  const media_sorts = merchandiseArray.filter(group => group.type === 'media')
  const tourMerchandise_sorts = merchandiseArray.filter(group => group.type === 'tourMerchandise')
  const CollectorMerchandise_sorts = merchandiseArray.filter(group => group.type === 'CollectorMerchandise')
  const evHome_sorts = merchandiseArray.filter(group => group.type === 'evHome')
  const All_sorts = merchandiseArray.filter(group => group.type === 'apparel' || 'media' || 'tourMerchandise' || 'CollectorMerchandise' || 'evHome')
  
  const Apparel_p = () => {
    document.getElementById("allInfo").innerHTML = merchandiseArray.innerHTML = 
        apparel_sorts.map(function (apparel) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${apparel.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${apparel.item}</h5>
          <p class= "card-text">${apparel.description} ,${apparel.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }).join(''); 
  }    
  
  const Media_p = () => {
    document.getElementById("allInfo").innerHTML = merchandiseArray.innerHTML = 
    media_sorts.map(function (media) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${media.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${media.item}</h5>
          <p class= "card-text">${media.description} ,${media.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }).join(''); 
  } 
  
  const TourMechandise_p = () => {
    document.getElementById("allInfo").innerHTML = merchandiseArray.innerHTML = 
    tourMerchandise_sorts.map(function (tourMechandise) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${tourMechandise.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${tourMechandise.item}</h5>
          <p class= "card-text">${tourMechandise.description} ,${tourMechandise.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }).join(''); 
  }
  
  const CollectorMerchandise_p = () => {
    document.getElementById("allInfo").innerHTML = merchandiseArray.innerHTML = 
    CollectorMerchandise_sorts.map(function (CollectorMerchandise) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${CollectorMerchandise.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${CollectorMerchandise.item}</h5>
          <p class= "card-text">${CollectorMerchandise.description} ,${CollectorMerchandise.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }).join(''); 
  }
  
  const EVHome_p = () => {
    document.getElementById("allInfo").innerHTML = merchandiseArray.innerHTML = 
    evHome_sorts.map(function (evHome) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${evHome.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${evHome.item}</h5>
          <p class= "card-text">${evHome.description} ,${evHome.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }).join(''); 
  }
  
  const All_p = () => {
    document.getElementById("allInfo").innerHTML = merchandiseArray.innerHTML = 
    All_sorts.map(function (all) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${all.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${all.item}</h5>
          <p class= "card-text">${all.description} ,${all.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }).join(''); 
  }
  
  const purchaseAlert = () => {
    alert("Purchase successful!")
  }
  
  
  document.getElementById('apparel').addEventListener('click', Apparel_p);
  document.getElementById('media').addEventListener('click', Media_p);
  document.getElementById('tourMechandise').addEventListener('click', TourMechandise_p);
  document.getElementById('evHome').addEventListener('click', EVHome_p);
  document.getElementById('CollectorMerchandise').addEventListener('click', CollectorMerchandise_p);
  document.getElementById('all').addEventListener('click', All_p);
  

  // console.log(duhHats)
console.log(apparel_sorts)
console.log(media_sorts)
console.log(tourMerchandise_sorts)
console.log(evHome_sorts)
console.log(CollectorMerchandise_sorts)
console.log(All_sorts)
