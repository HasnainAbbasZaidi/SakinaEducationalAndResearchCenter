let isHindi = false; // Track the current language state

function toggleTranslation() {
    const paragraph = document.getElementById('about-text');
    const button = document.querySelector('button');
    
    if (isHindi) {
        // Translate back to English
        paragraph.innerText = "At Sakina Educational and Research Center, quality education meets affordability. With a fee of just ₹100 per month, we are dedicated to empowering students by providing expert teachers who specialize in clearing doubts across all subjects, especially Mathematics. Our unique approach ensures every student grows from zero to hero, excelling in academics while also gaining valuable computer skills. We believe in nurturing well-rounded individuals ready to conquer the challenges of the modern world.";
        button.innerText = "Translate to Hindi"; // Update button text
        isHindi = false; // Switch state
    } else {
        // Translate to Hindi
        paragraph.innerText = "सकीना शैक्षिक और अनुसंधान केंद्र में, गुणवत्ता शिक्षा सस्ती कीमत पर उपलब्ध है। केवल ₹100 प्रति माह की फीस के साथ, हम छात्रों को विशेषज्ञ शिक्षकों द्वारा सशक्त बनाते हैं, जो विशेष रूप से गणित में सभी विषयों में शंकाओं को स्पष्ट करने में मदद करते हैं। हमारा अनूठा दृष्टिकोण सुनिश्चित करता है कि प्रत्येक छात्र शून्य से नायक तक विकसित हो, न केवल पढ़ाई में बल्कि कंप्यूटर कौशल सीखने में भी उत्कृष्टता प्राप्त करे। हम आधुनिक दुनिया की चुनौतियों का सामना करने के लिए तैयार संपूर्ण व्यक्तियों को पोषित करने में विश्वास करते हैं।";
        button.innerText = "Translate to English"; // Update button text
        isHindi = true; // Switch state
    }
}
// Open Modal
function openModal() {
    document.getElementById("enrollModal").style.display = "flex"; // Use flex for centering
}

// Close Modal
function closeModal() {
    document.getElementById("enrollModal").style.display = "none"; // Hide the modal
}
