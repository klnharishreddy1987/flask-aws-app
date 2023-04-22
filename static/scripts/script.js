$(function () {
  
    // An Ajax call to get cards-list as an xml file 
    // $.ajax({
    //     headers: { "Accept": "text/xml"},
    //     type: 'GET',
    //     url: 'scripts/cards-list.xml',
    //     crossDomain: true,
    //     success: function(data, textStatus, request){
    //         console.log('XML data', data);
    //         // The xml tag name.
    //         let cardsList = data.getElementsByTagName('Card');

    //         for (let i = 0; i < cardsList.length; i++) {
    //             // Create child DIVs inside parent DIV.
    //             let cardDiv =`<div class="csi-col l3 m6 csi-margin-bottom card-item pointer-cursor items">
    //                     <div class="csi-display-container">
    //                         <div class="csi-bar-item csi-button">${cardsList[i].getElementsByTagName("CardType")[0].childNodes[0].nodeValue}</div>
    //                         <img class="card-image" src="assets/images/${cardsList[i].getElementsByTagName("CardImage")[0].childNodes[0].nodeValue}" alt="Gift Cards" style="width:99%" />
    //                         <a class="card-middle" href="#cardModal_${i}" rel="modal:open">
    //                             <div class="card-text">${cardsList[i].getElementsByTagName("CardName")[0].childNodes[0].nodeValue}</div>
    //                         </a>
    //                     </div>
                       
    //                 </div>`;

    //             const cardModal = `<div id="cardModal_${i}" class="modal">
    //                     <p id="cardText">${cardsList[i].getElementsByTagName("CardDesc")[0].childNodes[0].nodeValue}</p>
    //                     <a href="#" rel="modal:close">Close</a>
    //                 </div>`    

    //             $('#cardModals').append(cardModal);
    //             $('#cards-section').append(cardDiv);
    //         }
            
    //     }
    // });

    let cardsList = [
        {
            "CardName" :"HSBC Basic Card",
            "CardType" : "CreditCard",
            "CardImage" : "creditcard1.jpg",
            "CardDesc" : "Zero Joining Fees, 1.5% cashback on all online spend (excluding transfer of funds to online wallets) and 1% on all other spends. (cashback will be credited back within 45 days of the card statement date)."
        },
        {
            "CardName" :"HSBC Union Pay",
            "CardType" : "DebitCard",
            "CardImage" : "debitcard1.jpg",
            "CardDesc" : "Cashback is also available on Instant EMI (Equated Monthly Installment) facility on your card across listed merchants."
        },
        {
            "CardName" :"HSBC Travel Card",
            "CardType" : "TravelCard",
            "CardImage" : "travelcard1.jpg",
            "CardDesc" : "Convenient EMI options that allow you to pay your credit card dues in Equated Monthly Installments (EMIs) such as Balance Transfer on EMI, Cash-on-EMI, Loan-on-Phone etc."
        },
        {
            "CardName" :"HSBC Forex Card",
            "CardType" : "ForexCard",
            "CardImage" : "forexcard1.jpg",
            "CardDesc" : "This card is enabled with VISA Paywave technology that allows contactless payments on your credit card."
        },
        ];

    for (let i = 0; i < cardsList.length; i++) {
        // Create child DIVs inside parent DIV.
        let cardDiv =`<div class="csi-col l3 m6 csi-margin-bottom card-item pointer-cursor items">
                <div class="csi-display-container">
                    <div class="csi-bar-item csi-button">${cardsList[i]["CardType"]}</div>
                    <img class="card-image" src="http://flaskawsapp-env-1.eba-xnu9vcjz.us-east-1.elasticbeanstalk.com/get-image/${cardsList[i]["CardImage"]}" style="width:99%" />
                    <a class="card-middle" href="#cardModal_${i}" rel="modal:open">
                        <div class="card-text">${cardsList[i]["CardName"]}</div>
                    </a>
                </div>
               
            </div>`;

        const cardModal = `<div id="cardModal_${i}" class="modal">
                <p id="cardText">${cardsList[i]["CardDesc"]}</p>
                <a href="#" rel="modal:close">Close</a>
            </div>`    

        $('#cardModals').append(cardModal);
        $('#cards-section').append(cardDiv);
    }

    let data = [
        { 
            "firstName": "John",
            "lastName": "Dean",
            "designation": "CEO & Founder",
            "image":"ceo1.jpg",
            "about":"Societas Executive Committee sustinet principalem exsecutivam Group in hodierna administratione HSBC et nostri consilii."
        },
        { 
            "firstName": "David",
            "lastName": "Nish",
            "designation": "Architect",
            "image":"architect1.jpg",
            "about":"David HSBC adiuncta est ex Regiae Bank Group Scotiae (RBS), ubi designata est Societas Secretarius anno 2010 et recentissime."
        },
        { 
            "firstName": "Mike",
            "lastName": "Ross",
            "designation": "Architect",
            "image":"architect2.jpg",
            "about":"Mike's publicas institutiones includunt praesidens TheCityUK usque ad diem Maii 2022, sociatus in Consilio Investimenti UK."
        },
        { 
            "firstName": "Dan",
            "lastName": "Star",
            "designation": "Architect",
            "image":"architect3.jpg",
            "about":"Dan designatus est in Tabula die 1 mensis Maii anno 2016. Magnam experientiam internationalem habet operas oeconomicas."
        }
        
    ];

    data.forEach((author,index) => {
    // Create child DIVs inside parent DIV.
    console.log(author, index);
    const authorDiv =`<div class="csi-col l3 m6 csi-margin-bottom">
        <img src="http://flaskawsapp-env-1.eba-xnu9vcjz.us-east-1.elasticbeanstalk.com/get-image/${author.image}" alt="John" style="width:100%">
        <h3>${author.firstName} ${author.lastName}</h3>
        <p class="csi-opacity">${author.designation}</p>
        <p>${author.about}</p>
        <p> <a href="#authModal_${index}" rel="modal:open"> Read More.. </a></p>
        </div>`;
    
    const authModal = `<div id="authModal_${index}" class="modal">
        <p id="cardText">${author.about}</p>
        <a href="#" rel="modal:close">Close</a>
    </div>`    
    
               $('#authorModals').append(authModal);
                $('#authors-section').append(authorDiv);
            });


     // An Ajax call to get authors as an json file 
    //  $.ajax({
    //     headers: { "Accept": "appication/json" },
    //     type: 'GET',
    //     url: 'scripts/founders.json',
    //     crossDomain: true,
    //     success: function(data, textStatus, request){
    //         console.log('JSON data', data);
    //         // The xml tag name.
    //         data.forEach((author,index) => {
    //             // Create child DIVs inside parent DIV.
    //             const authorDiv =`<div class="csi-col l3 m6 csi-margin-bottom">
    //                 <img src="assets/images/${author.image}" alt="John" style="width:100%">
    //                 <h3>${author.firstName} ${author.lastName}</h3>
    //                 <p class="csi-opacity">${author.designation}</p>
    //                 <p>${author.about}</p>
    //                 <p> <a href="#authModal_${index}" rel="modal:open"> Read More.. </a></p>
    //                 </div>`;
                
    //             const authModal = `<div id="authModal_${index}" class="modal">
    //                 <p id="cardText">${author.about}</p>
    //                 <a href="#" rel="modal:close">Close</a>
    //             </div>`    

    //             $('#authorModals').append(authModal);
    //             $('#authors-section').append(authorDiv);
    //         });
    //     }
    // });

    let portfolio = [
        {
            "name": "The Aggressive",
            "description":"Aptly named, an aggressive portfolio is aggressive because it aims for higher returns and often undertakes higher risks to achieve this objective. Generally, this portfolio includes several high beta stocks. These stocks show higher fluctuations as compared to the overall market. Take, for instance, a stock with a high beta over 1.5 or 2.0. Such shares will move higher or lower almost twice as the market's shift, which means you could double your profits or losses."
        },
        {
            "name": "The Defensive",
            "description":"On the contrary, a defensive portfolio doesn't comprise of stocks with a high beta value. Such shares generally stay unaffected by market movements. These stocks are pretty safe to invest in as they involve minimal risk. Neither do they give extravagant returns in upswings nor excessively crash during the business cycle’s lows. For instance, even in times of an economic downturn, the companies that make survival essentials or daily needs products like food, utilities are likely to weather the storm as customer demand remains strong"
        },
        {
            "name": "The Income",
            "description":"An income portfolio focuses on gaining from dividends or other recurring benefits provided to shareholders. Though it has quite some commonalities with a defensive portfolio, one significant difference is that it banks on stocks with relatively higher yields."
        },
        {
            "name": "The Speculative",
            "description":"The speculative portfolio requires a high-risk appetite, so much so that it is often compared to gambling. Here, the portfolio is not just aggressive but is also a bet on what product or service offering could work very well in the future. Initial Public Offers (IPOs) or takeover targets fit well into the speculative portfolio type. Technology firms or health care firms working on cutting-edge research or breakthrough discoveries also fall into this category."
        },
        {
            "name": "The Hybrid",
            "description":"As the name suggests, such a type of portfolio commands you to invest in an amalgamation of asset types with varying fundamentals to earn the best of both growth and dividend-yielding investments. Such a portfolio provides maximum flexibility. A hybrid portfolio is a balance of high-yield equity returns and fixed income instruments such as debt funds and bonds."
        }
    ];

    console.log('portfolio JSON data', data);
    // The xml tag name.
    portfolio.forEach((portfolio) => {
        // Create child DIVs inside parent DIV.
        const authorDiv =` <li class="box active"><span>${portfolio.name}</span>

        <div class="detail active">
          <p>${portfolio.description}</p>
        </div>
    </li>`;
     
      
        $('#portfolioList').append(authorDiv);
    });
    const getslide = $('.main-box li').length - 1;
    const slidecal = 30/getslide+'%';

    $('.box').css({"width": slidecal});

    $('.box').click(function(){
        $('.box').removeClass('active');
       $(this).addClass('active');
    });

    setTimeout(()=>{
        $('#portfolioList li:first').click()
    }, 300)


    $("#email_form").submit(function(e){
        e.preventDefault(e);
    });

    $('form[id="email_form"]').validate({
        rules: {
            name: 'required',
            subject: 'required',
            comment: 'required',
            email: {
                required: true,
                email: true,
            }
        },
        messages: {
            name: 'This field is required',
            subject: 'This field is required',
            comment: 'This field is required',
            email: 'Enter a valid email',
        },
        submitHandler: function(form) {
            console.log('Form submitted succcessfully.');
            $('#emailFormMsg').text('Form Submitted Succuessfully..!').fadeTo('slow', 0.5).fadeTo('slow', 1.0);
            $('#email_form').trigger("reset");

            return;
        }
      });  

     

      
});
