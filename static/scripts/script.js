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
        ];

    for (let i = 0; i < cardsList.length; i++) {
        // Create child DIVs inside parent DIV.
        let cardDiv =`<div class="csi-col l3 m6 csi-margin-bottom card-item pointer-cursor items">
                <div class="csi-display-container">
                    <div class="csi-bar-item csi-button">${cardsList[i]["CardType"]}</div>
                    <img class="card-image" src="http://flaskapp-env.eba-759pps6q.us-east-1.elasticbeanstalk.com/get-image/${cardsList[i]["CardImage"]}" style="width:99%" />
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

     // An Ajax call to get portfolio list as an json file 
    //  $.ajax({
    //     headers: { "Accept": "appication/json" },
    //     type: 'GET',
    //     url: 'scripts/portfolio.json',
    //     crossDomain: true,
    //     success: function(data, textStatus, request){
    //         console.log('portfolio JSON data', data);
    //         // The xml tag name.
    //         data.forEach((portfolio) => {
    //             // Create child DIVs inside parent DIV.
    //             const authorDiv =` <li class="box active"><span>${portfolio.name}</span>

    //             <div class="detail active">
    //               <p>${portfolio.description}</p>
    //             </div>
    //         </li>`;
             
              
    //             $('#portfolioList').append(authorDiv);
    //         });
    //         const getslide = $('.main-box li').length - 1;
    //         const slidecal = 30/getslide+'%';
        
    //         $('.box').css({"width": slidecal});
        
    //         $('.box').click(function(){
    //             $('.box').removeClass('active');
    //            $(this).addClass('active');
    //         });

    //         setTimeout(()=>{
    //             $('#portfolioList li:first').click()
    //         }, 300)
           
    //     }
    // });


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

