import React from 'react';
import {createRoot} from 'react-dom/client'
import GiftExpectApp from './GifExpectApp';
import './index.css'
import 'animate.css'

const root = createRoot( document.querySelector("#root") );

root.render(<GiftExpectApp />);