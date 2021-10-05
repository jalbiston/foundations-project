let stories = [
    {
     heading: "Test Story",
     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. At varius vel pharetra vel turpis nunc eget. Cras semper auctor neque vitae tempus quam. Dui nunc mattis enim ut tellus elementum. Tortor id aliquet lectus proin nibh nisl condimentum. Placerat in egestas erat imperdiet sed euismod nisi. Vestibulum sed arcu non odio euismod. Pretium fusce id velit ut. Suspendisse potenti nullam ac tortor. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida."
    },
    {
        heading: "Hello My name is Jake",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. At varius vel pharetra vel turpis nunc eget. Cras semper auctor neque vitae tempus quam. Dui nunc mattis enim ut tellus elementum. Tortor id aliquet lectus proin nibh nisl condimentum. Placerat in egestas erat imperdiet sed euismod nisi. Vestibulum sed arcu non odio euismod. Pretium fusce id velit ut. Suspendisse potenti nullam ac tortor. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida."
    }
]

module.exports = {
    getStory: (req, res) => {
        res.status(200).send(stories)
    }, 

    addStory: (req, res) => {
        let value = req.body
        stories.push(value)
        // console.log(value)
        
        res.sendStatus(200)
    
    }

}

