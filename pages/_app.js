import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>2022 Aivan</footer>
    </div>
  );
}

export default MyApp;
