import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
	return (
		<div className="w-screen h-screen bg-color-primary">
      <div className="w-full h-full flex flex-col gap-3 justify-start items-center">
        <Header />
        <Content />
      </div>
		</div>
	);
};

export default App;
