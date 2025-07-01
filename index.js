function submitTopic() {
    const topicInput = document.getElementById("topicInput");
    const topic = topicInput.value.trim();
    if (topic === "") {
        alert("Please enter a topic before proceeding");
        return;
    };
    document.getElementById("topicSection").style.display = "none";
    document.getElementById("appContent").style.display = "block";
    document.getElementById("topicTitle").textContent = topic;
}

function addItem(type) {
    const input = document.getElementById("itemInput");
    const text = input.value.trim()

}