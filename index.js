let iframeContain = document.querySelector("#iframe-container");
let buttons = document.querySelectorAll(".frame-button");
let srcIframe = '/components/'
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      iframeContain.setAttribute("src", srcIframe +  `${this.name}/${this.name}.html`);
    });
  }

