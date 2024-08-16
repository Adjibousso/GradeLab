

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>Javascrit Dom html</h>";

mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");


topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

const menu = document.querySelectorAll("menuLinks");

menuLinks.forEach((link) => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});

// #4. adding menu interaction
// Select and cache all <a> elements inside of topMenuEl in variable topMenuLinks
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height="100%";
subMenuEl.style.backgroundColor ="var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks =  topMenuEl.querySelectorAll('a');
topMenuEl.addEventListener('click', (e) => 

{
    e.preventDefault();
    if (e.target.tagName !=='A')
    return;
    console.log(e.target.textContent);

//  #4.1  add event listener to add "active" class to <a></a>
// removing "active" class
if (e.target.classList.contains("active")){
    subMenuEl.style.top= "0";

    e.target.classList.remove("active");
    return;
};
topMenuLinks.forEach( (link) => {
    link.classList.remove('active');

    // console.log(link);
    });   


//  adding active class
 e.target.classList.add('active');

 // #5. add menu interaction ---- LAST CODE 
 if(topMenuLinks){

    // check if the clicked item is already active
    if(!e.target.classList.contains('active')){
        // test console
        console.log(`${e.target.textContent.toUpperCase()} This anchor contains active`);

        // check if clicked <a> has a sublink
        


    }
 }
 const clickMenu = menuLinks.find((link ) =>
    link.text === e.target.textContent
    
 );
 if (clickMenu && clickMenu.subLinks ){
    subMenuEl.style.top ="100%"
    buildSubmenu(clickMenu.subLinks);
console.log(clickMenu.subLinks)
 }
 else {subMenuEl.style.top= "0";

 };

 


//  let subMenuEl = document.getElementById("sub-menu")





//  subLinks.forEach((lin) => {
//     const a = document.createElement("a");
//     a.setAttribute("href", lin.href);
//     a.textContent = lin.text;
//     subMenuEl.appendChild(a);
//   });
});
 function buildSubmenu(sublink){
    subMenuEl.innerHTML= "";
    sublink.forEach((link) =>{
        const a = document.createElement("a");
        a.href= link.href;
        a.textContent = link.text;

        subMenuEl.appendChild(a);

    })
   // buildSubmenu()


    

 }



