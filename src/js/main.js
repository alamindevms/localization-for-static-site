const CONSTANT_KEY = {
	EN: "en",
    BN: "bn",
    LN_KEY: "magic_local",
    DATA_KEY: "data-i18n"
}

// handle local-storage
const handleLocalStorage = {
    get(key) {
        return localStorage.getItem(key)
    },
    set(key, value) {
        return localStorage.setItem(key, value)
    }
}

// content update action
const handleLocalization = (langData) => {
	document.querySelectorAll(`[${CONSTANT_KEY.DATA_KEY}]`).forEach((el) => {
		const key = el.getAttribute(CONSTANT_KEY.DATA_KEY)

		el.textContent = langData[key]
	})
}

// language switch action
const switchLanguage = (language) => {
	if (language === CONSTANT_KEY.EN) {
        handleLocalization(en)
        handleLocalStorage.set(CONSTANT_KEY.LN_KEY, CONSTANT_KEY.EN)
	}

	if (language === CONSTANT_KEY.BN) {
		handleLocalization(bn)
        handleLocalStorage.set(CONSTANT_KEY.LN_KEY, CONSTANT_KEY.BN)
	}
}

// elements
const languageButton = document.getElementById("language")

// language switch event listener
languageButton.addEventListener("change", (e) => {
    const {value} = e.target
    switchLanguage(value)
})

// DOM ready
document.addEventListener("DOMContentLoaded", () => {
    // set default language to local-storage
	if (!handleLocalStorage.get(CONSTANT_KEY.LN_KEY)) {
        handleLocalStorage.set(CONSTANT_KEY.LN_KEY, CONSTANT_KEY.EN)
	}

    // initially load data based on default language 
	const selectedLanguage = handleLocalStorage.get(CONSTANT_KEY.LN_KEY)
    switchLanguage(selectedLanguage)
    
    // set selected value
    languageButton.value = selectedLanguage

})
