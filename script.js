console.log("page is loading......")

//
var likes =[3,12,2]
var spans =[
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3"),
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML=likes[id] + "like(s)"   
}