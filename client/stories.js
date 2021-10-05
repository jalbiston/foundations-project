








const storyContainer = document.querySelector("#stories")




function storyTime() {
  axios.get("/api/userstories").then((res) => {
    const stories = res.data;
    console.log(stories);
    for (let i = 0; i < stories.length; i++) {
      const storyTitle = document.createElement("h1");
      const storyContent = document.createElement("p");

      storyTitle.textContent = stories[i].heading;
      storyContent.textContent = stories[i].content;

      storyContainer.appendChild(storyTitle)

      storyContainer.appendChild(storyContent)

      console.log(storyTitle, storyContent);
    }
  });
}

let storyBtn = document.querySelector("#storyButton");

storyBtn.addEventListener("click", storyTime);





const storyField = document.getElementById("submitStory")
const storyForm = document.getElementById("storyForm")
storyField.addEventListener("click", (e) => {
    e.preventDefault();
    
    const heading = document.getElementById("name").value
    const storyContent = document.getElementById("storyInput").value
    // console.log(storyContent, heading);
    axios.post("/api/userstories", {heading:heading, content: storyContent})
    .then((res) => {
        storyTime()
        storyForm.reset()
      
    })
    .catch((err) => console.log(err));
})