

/*THIS THEME NAME CALLED "ITE3714 GroupProject".
MAKING BY Chung's' Studio.
OWNER: Lau Kin Chung
Instagram: @chung.lkc
OTHER PORTFOLIO WOULD BE FOUND ON "https://github.com/Sasuke1003"*/

let showingAlert = false;
const title = 'ITE3714 TEAM B';
const messages = 'MAKING BY CHUNG'

const changeTitle = setInterval(() => {

    document.title = 
        showingAlert ? title : messages;

    showingAlert = !showingAlert;
}, 700);