const category = document.querySelector("#categories");

function categoryCount(arr) {
    return `Number of categories: ${arr.children.length}`;
    
    
};
console.log(categoryCount(category));

const categor = document.querySelectorAll("#categories > li.item");

categor.forEach(i => {
    const title = i.querySelector("h2").textContent;
    const count = i.querySelectorAll("li").length; 
    console.log(`Category: ${title}`);
    console.log(`Elements: ${count}`);
});





