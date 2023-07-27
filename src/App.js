import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {

  const header = "React Blog"
  let viewPage = 300;

  const blog = {name: "ReactJS", description: "Learning ReactJS"}

  const link = "https://github.com/okanboyraz8"

  return (
    <div className="App">
      <div className='content'>
        <Navbar />
        <Home />
        <div>
          <h2>Work on "const" and "let" to write it on the page!</h2>
          <h3>App Component</h3>
          <h3>{header}</h3>
          <p>viewPage: {viewPage}</p>
          <p>Blog Name: {blog.name} & Blog Description: {blog.description}</p>
          <a href={link}>My GitHub Page</a>
        </div>
      </div>
    </div>
  );
}

export default App;
