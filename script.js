(function completion(completion) {
  function log(message) {
    completion({ type: "log", message: message });
  }

  function main() {
    const studentNumber = 400331896;
    const faculty = "Engineering";
    const level = "3";

    const facultyMap = {
      degrooteschoolofbusiness: "DeGroote School of Business",
      degroote: "DeGroote School of Business",
      engineering: "Engineering",
      eng: "Engineering",
      healthsciences: "Health Sciences",
      healthscience: "Health Sciences",
      humanities: "Humanities",
      humanity: "Humanities",
      science: "Science",
      sciences: "Science",
      socialscience: "Social Science",
      socialsciences: "Social Science",
    };

    const levelMap = {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      "master's": "Master's\u00A0",
      masters: "Master's\u00A0",
      phd: "PhD",
      staff: "Staff",
      alumni: "Alumni",
    };
    function findAndClickElement(targetText) {
      const labels = document.querySelectorAll("label");
      const targetLabel = Array.prototype.find.call(labels, (label) => {
        return label.textContent.trim() === targetText;
      });

      if (targetLabel) {
        const inputElement = targetLabel.querySelector("input[type='radio']");
        if (inputElement) {
          inputElement.click();
          log(`Clicked element with text: ${targetText}`);
        } else {
          log(`Input element not found for text: ${targetText}`);
        }
      } else {
        log(`Element not found with text: ${targetText}`);
      }
    }

    const studentNumberEl = document.querySelector(
      '[data-automation-id="textInput"]'
    );
    if (!studentNumberEl.disabled && !studentNumberEl.readonly) {
      studentNumberEl.value = studentNumber;
      studentNumberEl.dispatchEvent(new Event("input"));
    } else {
      console.log("Input field disabled");
    }

    const targetFaculty = facultyMap[faculty.toLowerCase().replace(/\s+/g, "")];
    if (targetFaculty) {
      findAndClickElement(targetFaculty);
    } else {
      const otherAnswerInputField = document.querySelector(
        '[aria-label="Other answer"][data-automation-id="textInput"]'
      );
      if (!otherAnswerInputField.disabled && !otherAnswerInputField.readonly) {
        otherAnswerInputField.value = faculty;
        otherAnswerInputField.dispatchEvent(new Event("input"));
      } else {
        console.log("Input field disabled");
      }
    }

    const targetLevel = levelMap[level.toLowerCase().replace(/\s+/g, "")];
    if (targetLevel) {
      findAndClickElement(targetLevel);
    } else {
      throw new Error("Invalid level option");
    }

    // Submit the form (uncomment the following line to enable form submission)
    document.querySelector('[data-automation-id="submitButton"]').click();

    // Call completion() when the script has finished executing
    completion();
  }

  main();
})(completion);
