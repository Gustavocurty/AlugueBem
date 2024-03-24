"use client";

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'

import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
import Footer from "./footer/Footer";
import {Header} from "./header/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { ProgressBar } from "~~/components/scaffold-eth/ProgressBar";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { appChains } from "~~/services/web3/wagmiConnectors";

import Home from '../pages/Home/Page'
import Perfil from '../pages/Perfil/Page'
import Historico from '../pages/Historico/Page'
import Transferir from '../pages/Perfil copy/Page'

const ScaffoldEthApp = ({ children }: { children?: React.ReactNode }) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);                               
    }
  }, [setNativeCurrencyPrice, price]);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
      <Router basename="">
          <Header />
            <main className="relative flex flex-col flex-1">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/perfil' element={<Perfil />} />
                <Route path='/historico' element={<Historico />} />
                <Route path='/transferencia' element={<Transferir />} />
              </Routes>
                {children}
            </main>
          <Footer />
        </Router>
      </div>
      <Toaster />
    </>
  );
};

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <ProgressBar />
      <RainbowKitProvider
        chains={appChains.chains}
        avatar={BlockieAvatar}
        theme={mounted ? (isDarkMode ? darkTheme() : lightTheme()) : lightTheme()}
      >
        <ScaffoldEthApp>{children}</ScaffoldEthApp>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
