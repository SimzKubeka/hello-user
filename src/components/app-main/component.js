export default class {
  onCreate() {
    // Initial state, with no name entered yet
    this.state = {
      name: "",
      error: ""
    };
  }

  // Handle form submission to display the greeting
  handleFormSubmit(event) {
    event.preventDefault(); 
    const nameInput = this.getEl("nameInput").value.trim();
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(nameInput)) {
      this.setState("error", "Please enter a valid name.");
    } else {
      // Update state with the entered name and clear any previous errors
      this.setState({
        name: nameInput,
        error: ""
      });
    }
  }

  // Optional method to reset the form and show it again
  handleReset() {
    this.setState({
      name: "",
      error: ""
    });
  }
}
