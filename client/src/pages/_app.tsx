import '@/styles/globals.scss'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, storePersist } from '@/core/store/store'

function App({ Component, pageProps }: AppProps) {

  return <div id='layout' className={` layout`}>
    <Provider store={storePersist}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  </div >
}

export default App
