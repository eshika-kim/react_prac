import { Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/movie">
        <Detail />
      </Route>
    </Switch>
  );
}

export default App;

// https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
