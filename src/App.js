import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

function App() {
  const query = gql`
    query GetTodoWithUser {
      getTodos {
        title
        id
        user {
          name
        }
      }
    }
  `;

  const { data, loading } = useQuery(query);

  if(loading){
    return <> 
    <h1>Loading</h1>
    </>
  }

  return (
    <div className="App">
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
