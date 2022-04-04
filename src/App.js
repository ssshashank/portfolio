import './App.css';
import Index from './screens/index';
import Layout from './screens/layout/layout';
import Navbar from './widgets/navbar/navbar';

const  App=() =>{
  return (
    <div className="appContainer">
      <Navbar title="Portfolio"/>
      <Layout>
        <Index/>
      </Layout>
    </div>
  );
}

export default App;
