import Router from "./Router";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

export default function App() {
  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Router />
      </ApplicationProvider>
    </>
  );
}
