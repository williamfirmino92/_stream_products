import MetaMaskConnect from "./MetamaskConnect";

const Header = () => {
  return (
    <header className="bg-[#229b77] p-4">
      <div className="container mx-auto flex justify-between items-center">
  
       
        <img src="/logo-white.png" alt="Logo da StreamBox"  className="text-xl font-bold text-[#7e232c]" />
   
        <MetaMaskConnect />
      </div>
    </header>
  );
};

export default Header;
