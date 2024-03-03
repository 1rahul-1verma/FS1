import "../styles/global.css";

import { AppProps } from "next/app";
import { AuthProvider } from "@repo/ui/auth";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
);

export default App;
