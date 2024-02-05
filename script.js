let excerptPoem = `O May I join the choir invisible\n\nOf those immortal dead who live again\n\nIn minds made better by their presence: live\n\nIn pulses stirr'd to generosity,`;
    let restPoem = `\n\nIn deeds of daring rectitude, in scorn\n\nFor miserable aims that end with self,\n\nIn thoughts sublime that pierce the night like stars,\n\nAnd with their mild persistence urge man's search\n\nTo vaster issues.\n\nSo to live is heaven:\n\nTo make undying music in the world,\n\nBreathing as beauteous order that controls\n\nWith growing sway the growing life of man.\n\nSo we inherit that sweet purity\n\nFor which we struggled, fail'd, and agoniz'd\n\nWith widening retrospect that bred despair.\n\nRebellious flesh that would not be subdued,\n\nA vicious parent shaming still its child,\n\nPoor anxious penitence, is quick dissolv'd;\n\nIts discords, quench'd by meeting harmonies,\n\nDie in the large and charitable air.\n\nAnd all our rarer, better, truer self,\n\nThat sobb'd religiously in yearning song,\n\nThat watch'd to ease the burthen of the world,\n\nLaboriously tracing what must be,\n\nAnd what may yet be better,—saw within\n\nA worthier image for the sanctuary,\n\nAnd shap'd it forth before the multitude,\n\nDivinely human, raising worship so\n\nTo higher reverence more mix'd with love,—\n\nThat better self shall live till human Time\n\nShall fold its eyelids, and the human sky\n\nBe gather'd like a scroll within the tomb Unread forever.\n\nThis is life to come,\n\nWhich martyr'd men have made more glorious\n\nFor us who strive to follow. May I reach\n\nThat purest heaven, be to other souls\n\nThe cup of strength in some great agony,\n\nEnkindle generous ardor, feed pure love,\n\nBeget the smiles that have no cruelty,\n\nBe the sweet presence of a good diffus'd,\n\nAnd in diffusion ever more intense!\n\nSo shall I join the choir invisible\n\nWhose music is the gladness of the world.\n\n<h3>- George Eliot</h3>`;
    let currentTextIndex = 0;
    let generating = false;

    function generateText() {
      const poemContent = document.getElementById("poemContent");
      const triangle = document.querySelector(".triangle");
      if (generating) {
        poemContent.innerHTML = excerptPoem + restPoem;
        triangle.classList.remove("pulse");
        triangle.classList.add("hidden");
        currentTextIndex += 999999;
        triangle.style.pointerEvents = "none";
        return;
      }
      triangle.classList.add("pulse");
      generating = true;
      currentTextIndex += 3;
      poemContent.innerHTML = excerptPoem + restPoem.substring(0, currentTextIndex);
      if (currentTextIndex < restPoem.length) {
        setTimeout(() => {
          triangle.classList.remove("pulse");
          triangle.style.pointerEvents = "auto";
          generating = false;
          generateText();
        }, 40);
      } else {
        triangle.classList.add("hidden");
        triangle.style.pointerEvents = "none";
        document.querySelector(".triangle.hidden.pulse").remove();
        document.documentElement.scrollTop = document.body.scrollHeight;
      }
    }

    function toggleDarkMode() {
      const body = document.body;
      body.classList.toggle("dark-mode");
      const darkModeToggle = document.querySelector(".dark-mode-toggle");
      if (body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "Toggle Light Mode";
      } else {
        darkModeToggle.textContent = "Toggle Dark Mode";
      }
    }

    function changeFont(fontName) {
      document.body.style.fontFamily = fontName;
    }
