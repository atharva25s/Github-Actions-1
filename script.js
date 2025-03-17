const userMessage = [
  ["hi", "hey", "hello"],
  ["sure", "yes", "no"],
  ["address"],
  ["facilities provided", "services offered"],
  ["contact", "phone number", "email"],
  ["emergency ambulance service", "emergency"],
  ["name of doctors", "doctors list", "available doctors"],
  ["appointment booking", "how to book an appointment", "appointment"],
  ["visiting hours", "hospital timings"],
  ["insurance accepted", "do you accept insurance"],
  ["departments available", "specialties"],
  ["pharmacy availability", "is there a pharmacy", "pharmacy"],
  ["nearest landmark", "how to reach hospital"],
  ["covid19 guidelines", "safety measures"],
];

const botReply = [
  ["Hello! Welcome to Bharti Hospital. How can I assist you?"],
  ["Okay! Let me know how I can help."],
  ["Bharti Hospital is located at Dhankawadi, Pune, Maharashtra, India."],
  ["We provide emergency care, surgery, maternity, cardiology, orthopedics, and many other healthcare services."],
  ["You can contact us at +91 9876543210 or email us at contact@bhartihospital.com."],
  ["We offer a 24/7 emergency ambulance service. Call +91 9876543210 for immediate assistance."],
  ["Our hospital has expert doctors in various fields, including Dr. A Sharma (Cardiologist), Dr. R Mehta (Orthopedic), and Dr. S Kapoor (Neurologist)."],
  ["To book an appointment, visit our website www.bhartihospital.com or call +91 9876543210."],
  ["Our visiting hours are from 10:00 AM to 7:00 PM. Emergency services are available 24/7."],
  ["Yes, we accept major health insurance policies. Please check with our billing department for more details."],
  ["We have multiple departments including General Medicine, Surgery, Pediatrics, Cardiology, Neurology, and more."],
  ["We have an in-house pharmacy that operates 24/7."],
  ["Our hospital is near Bharati Vidyapeeth, Dhankawadi, Pune."],
  ["We follow strict COVID-19 guidelines, including mandatory masks, sanitization, and social distancing."],
];

const alternative = [
  "I'm not sure about that. Can I help with something else?",
  "Could you rephrase that?",
  "I don't have an answer to that. Try asking something about Bharti Hospital!"
];

function sendMessage() {
  const inputField = document.getElementById("input");
  let input = inputField.value.trim();
  if (input !== "") {
      output(input);
      inputField.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
          sendMessage();
      }
  });
});

function output(input) {
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text.replace(/\s+/g, " ").trim();

  let product = compare(userMessage, botReply, text) || alternative[Math.floor(Math.random() * alternative.length)];
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  for (let x = 0; x < triggerArray.length; x++) {
      if (triggerArray[x].some(keyword => string.includes(keyword))) {
          let replies = replyArray[x];
          return replies[Math.floor(Math.random() * replies.length)];
      }
  }
  return null;
}

function addChat(input, product) {
  const mainDiv = document.getElementById("message-section");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.classList.add("message");
  userDiv.innerHTML = `<span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.classList.add("message");
  botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  
  mainDiv.scrollTop = mainDiv.scrollHeight;
}
