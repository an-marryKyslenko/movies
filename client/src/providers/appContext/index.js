import { createContext, useReducer } from "react";
import { saveToStorage } from "../../utils/localStorage";
import { STORAGE_KEY } from "../../const";
import { useDefaultContext } from "./defaultContext";

const AppContext = createContext();

let reduce = (state, action) => {
	switch (action.type) {
		case "setLocale":
			saveToStorage(STORAGE_KEY, action.locale)
			return { ...state, locale: action.locale }
	}
}

const AppContextProvider = ({ children }) => {
	const defaultContext = useDefaultContext()
	const [state, dispatch] = useReducer(reduce, defaultContext);
	const value = { state, dispatch }
	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	)
}

export {
	AppContext,
	AppContextProvider
}