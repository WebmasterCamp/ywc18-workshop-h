import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 414 }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
