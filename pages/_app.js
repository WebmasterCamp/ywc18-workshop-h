import Navbar from '../components/Navbar';
import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div style={{ height : "64px"}} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}
      >
        <div style={{ width: 414, padding: 16 }}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
