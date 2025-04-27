import { inject } from "@vercel/analytics";
import "./style.css";
import Experience from "./Experience/Experience.js";

inject();

const experience = new Experience({
	targetElement: document.querySelector(".experience"),
});

setTimeout(() => {
	// Create HDR toggle checkbox
	const hdrToggle = document.createElement("div");
	hdrToggle.style.cssText = `
            position: fixed;
            top: 10px;
            left: 10px;
            cursor: pointer;
            z-index: 100;
            color: #fff;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 12px;
            background: rgba(0,0,0,0.65);
            border: 1px solid #fff;
            padding: 6px 10px;
            border-radius: 3px;
            display: flex;
            align-items: center;
            gap: 6px;
    `;

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "hdr-toggle";
	checkbox.style.cssText = `
            cursor: pointer;
            margin: 0;
    `;
	checkbox.checked = true;

	const label = document.createElement("label");
	label.htmlFor = "hdr-toggle";
	label.textContent = "Toggle HDR";
	label.style.cssText = `
            cursor: pointer;
            user-select: none;
    `;

	checkbox.addEventListener("change", function () {
		document.body.classList.toggle("disable-hdr", !this.checked);
	});

	hdrToggle.appendChild(checkbox);
	hdrToggle.appendChild(label);
	document.body.appendChild(hdrToggle);
});
