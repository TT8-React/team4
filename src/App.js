
import './App.css';
import SideBar from './components/SideBar'

function App() {
  return (
    <div className="App" style={{ height: "93vh" }}>
      <SideBar currentRoute={3} Links={
        [
          {
            //Acordian Route Exmaple
            title: "link 1",
            dropList: [
              { title: "link 1.1", route: "1.1", },
              { title: "link 1.2", route: "1.2", },
            ]
          },
          //Normal Route Exmaple
          { title: "link 2", route: "2" },
          { title: "link 3", route: "3" },
          { title: "link 4", route: "4" },
        ]} />
    </div>
  );
}

export default App;
