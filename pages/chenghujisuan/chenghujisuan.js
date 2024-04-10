Page({
    data: {
      generatedGreeting: "",
      currentTimeOfDay: ""
    },
  
    generateGreeting() {
      const hour = new Date().getHours();
      let greetingText = "";
      let timeOfDay = "";
  
      if (hour >= 5 && hour <= 11) {
        greetingText = "Good morning";
        timeOfDay = "Morning";
      } else if (hour >= 12 && hour <= 16) {
        greetingText = "Good afternoon";
        timeOfDay = "Afternoon";
      } else if (hour >= 17 && hour <= 20) {
        greetingText = "Good evening";
        timeOfDay = "Evening";
      } else {
        greetingText = "Good night";
        timeOfDay = "Night";
      }
  
      this.setData({
        generatedGreeting: `${greetingText}, Your Name!\nBest wishes for ${timeOfDay}!`,
        currentTimeOfDay: timeOfDay
      });
    },
  
    onNameInput(event) {
      // Handle name input here if needed
    },
  
    onRecipientInput(event) {
      // Handle recipient input here if needed
    }
  });