import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "src/scss/global.scss";
import { Theme } from "@radix-ui/themes";
import App from "src/App.tsx";

createRoot(document.querySelector("app")!).render(
	<StrictMode>
		<Theme
			accentColor="mint"
			grayColor="gray"
			panelBackground="solid"
			scaling="100%"
			radius="medium"
			appearance="dark"
		>
			<App />
		</Theme>
	</StrictMode>,
);
