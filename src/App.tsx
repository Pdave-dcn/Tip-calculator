import CalculatorWrapper from "./components/CalculatorWrapper";

const App = () => {
  return (
    <div className="bg-cust-light-grayish-cyan min-h-screen flex flex-col justify-center items-center">
      <div>
        <img
          className="mb-[40px] mt-[60px] "
          src="images/logo.svg"
          alt="Logo"
        />
      </div>
      <CalculatorWrapper />
    </div>
  );
};

export default App;
