import "./styles/index.css";

// Character sets
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// DOM elements
const passwordEl = document.querySelector(
	".password-display__display"
) as HTMLSpanElement;
const copyBtn = document.querySelector(
	".password-display__copy-btn"
) as HTMLButtonElement;
const lengthSlider = document.querySelector(
	".length__length-slider"
) as HTMLInputElement;
const lengthValue = document.querySelector(".length__label_value") as HTMLSpanElement;
const uppercaseCheckbox = document.querySelector(
	".checkbox-uppercase"
) as HTMLInputElement;
const lowercaseCheckbox = document.querySelector(
	".checkbox-lowercase"
) as HTMLInputElement;
const numbersCheckbox = document.querySelector(".checkbox-numbers") as HTMLInputElement;
const symbolsCheckbox = document.querySelector(".checkbox-symbols") as HTMLInputElement;
const generateBtn = document.querySelector(
	".settings__generate-btn"
) as HTMLButtonElement;
const strengthLabel = document.querySelector(
	".strength__bars-label"
) as HTMLDivElement;
const bars = document.querySelectorAll(".bar") as NodeListOf<HTMLDivElement>;

// Update length value when slider changes
lengthSlider.addEventListener("input", () => {
	lengthValue.textContent = lengthSlider.value;
});

// Generate password when button is clicked
generateBtn.addEventListener("click", generatePassword);

// Copy password to clipboard
copyBtn.addEventListener("click", () => {
	const password = passwordEl.textContent;
	if (!password) return;

	navigator.clipboard.writeText(password).then(() => {
		passwordEl.textContent = "Copied!";
		setTimeout(() => {
			passwordEl.textContent = password;
		}, 1000);
	});
});

// Generate what part of slider is colored
function getSliderPercent(): void {
    const value = parseInt(lengthSlider.value);
    const min = parseInt(lengthSlider.min);
    const max = parseInt(lengthSlider.max);
    const percent = ((value - min) / (max - min)) * 100;
    
    lengthValue.textContent = value.toString();
    lengthSlider.style.setProperty("--slider-percent", `${percent}%`);
}

lengthSlider.addEventListener("input", () => {
    getSliderPercent();
});

// Display slider on window load
window.addEventListener("load", () => {
    getSliderPercent();
});

// Generate a random password
function generatePassword(): void {
	const length = parseInt(lengthSlider.value);
	const includeUppercase = uppercaseCheckbox.checked;
	const includeLowercase = lowercaseCheckbox.checked;
	const includeNumbers = numbersCheckbox.checked;
	const includeSymbols = symbolsCheckbox.checked;

	// Validate at least one character set is selected
	if (
		!includeUppercase &&
		!includeLowercase &&
		!includeNumbers &&
		!includeSymbols
	) {
		alert("Please select at least one character type");
		return;
	}

	let characterSet = "";
	if (includeUppercase) characterSet += UPPERCASE;
	if (includeLowercase) characterSet += LOWERCASE;
	if (includeNumbers) characterSet += NUMBERS;
	if (includeSymbols) characterSet += SYMBOLS;

	let password = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characterSet.length);
		password += characterSet[randomIndex];
	}

	passwordEl.textContent = password;
	updateStrengthMeter(password);
}

// Update password strength meter
function updateStrengthMeter(password: string): void {
	// Calculate password strength
	let strength = 0;

	// Length contributes to strength
	if (password.length >= 12) strength += 2;
	else if (password.length >= 8) strength += 1;

	// Character variety contributes to strength
	const hasUppercase = /[A-Z]/.test(password);
	const hasLowercase = /[a-z]/.test(password);
	const hasNumbers = /[0-9]/.test(password);
	const hasSymbols = /[^A-Za-z0-9]/.test(password);

	const varietyCount = [
		hasUppercase,
		hasLowercase,
		hasNumbers,
		hasSymbols,
	].filter(Boolean).length;
	strength += varietyCount;

	// Determine strength level (0-3)
	let strengthLevel = 0;
	if (strength <= 3)
		strengthLevel = 0; // Too Weak
	else if (strength <= 5)
		strengthLevel = 1; // Weak
	else if (strength <= 7)
		strengthLevel = 2; // Medium
	else strengthLevel = 3; // Strong

	// Update strength label and bars
	const strengthLabels = ["TOO WEAK", "WEAK", "MEDIUM", "STRONG"];
	const strengthColors = [
		"var(--red)",
		"var(--orange)",
		"var(--yellow)",
		"var(--neon-green)",
	];

	strengthLabel.textContent = strengthLabels[strengthLevel];

	bars.forEach((bar, index) => {
		bar.style.background =
			index <= strengthLevel ? strengthColors[strengthLevel] : "transparent";
		bar.style.borderColor =
			index <= strengthLevel
				? strengthColors[strengthLevel]
				: "var(--almost-white)";
	});
}

// Generate initial password on page load
generatePassword();
