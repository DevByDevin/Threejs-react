import React from 'react';
import { Html } from '@react-three/drei';
import './CanvasLoader.css';

export const CanvasLoader = () => {
  return (
    <Html center>
      <div className='canvas-loader'>
        <div className='loader-container'>
          {/* 赛博朋克风格的加载动画 */}
          <div className='cyberpunk-loader'>
            <div className='loader-ring'></div>
            <div className='loader-ring'></div>
            <div className='loader-ring'></div>
          </div>

          {/* 加载文字 */}
          <div className='loading-text'>
            <span className='text-cyber'>LOADING</span>
            <span className='text-dots'>...</span>
          </div>

          {/* 进度条 */}
          <div className='progress-bar'>
            <div className='progress-fill'></div>
          </div>
        </div>
      </div>
    </Html>
  );
};
