import { useState } from 'react'
// @ts-expect-error
import Parcel from 'single-spa-react/parcel'
import './App.scss'
import { mountRootParcel } from 'single-spa'
function App() {

  const headerModuleName = "@test/header";
  async function loadheaderParcel() {
    const parcelsModule = await import(/* @vite-ignore */ headerModuleName);
    return parcelsModule;
  }

  return (
    <div className="app">
      <div>
      <Parcel
        config={loadheaderParcel}
        mountParcel={mountRootParcel}
        handleError={console.error}
        parcelDidMount={() => console.debug('Parcel mounted.')}
      />
      </div>
    </div>
  )
}

export default App
