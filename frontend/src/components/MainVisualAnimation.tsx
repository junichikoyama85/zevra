import React, { useEffect, useState } from "react";
import Image from "next/image";

// メインビジュアルのアニメーションを表示するコンポーネント
const MainVisualAnimation: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    // スクロール禁止
    document.body.style.overflow = 'hidden';

    // 3秒後にアニメーション開始
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 2000);

    // アニメーション終了時間（最長のアニメーション時間 + 遅延時間）
    const endTimer = setTimeout(() => {
      setAnimationCompleted(true);
      document.body.style.overflow = ''; // スクロール許可
    }, 4000); // 4s（アニメーション時間） + 3s（遅延） + 余裕1s

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
      document.body.style.overflow = ''; // クリーンアップ
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-screen h-screen z-100 overflow-hidden"
      style={{ 
        pointerEvents: animationCompleted ? 'none' : 'auto',
        display: animationCompleted ? 'none' : 'block'
      }}
    >
      <div
        className={`absolute ${isAnimating ? 'animate-lu' : ''}`}
        style={{
          top: "0%",
          left: "0%",
          zIndex: 3,
          height:"100vh",
          width: "100vw",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani6_X2.png'
          alt="Paca Main Visual"
          className="object-contain"
          priority
          fill
          style={{
            transform: "rotate(180deg)"
          }}
        />
      </div>

      <div
        className={`absolute ${isAnimating ? 'animate-lu' : ''}`}
        style={{
          top: "50%",
          left: "0%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          height:"100vh",
          width: "100vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani3_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority/>
      </div>
    
      <div
        className={`absolute ${isAnimating ? 'animate-ld' : ''}`}
        style={{
          left: '0%',
          bottom: '0%',
          zIndex: 2,
          height:"100vh",
          width: "100vw",
          transform: "translate(-50%, 50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani5_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-lu' : ''}`}
        style={{
          left: '20%',
          top: '5%',
          zIndex: 0,
          transform: "translate(-50%, -50%)",
          height:"70vh",
          width: "70vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani5_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div
        className={`absolute ${isAnimating ? 'animate-lu' : ''}`}
        style={{
          left: '20%',
          top: '50%',
          zIndex: 1,
          transform: "translate(-50%, -50%)",
          height:"70vh",
          width: "70vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani4_X2.png'
          alt="Paca Main Visual"
         fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(-45deg)"
          }}
        />
      </div>
      
      <div
        className={`absolute  ${isAnimating ? 'animate-ld' : ''}`}
        style={{
          left: '17%',
          bottom: '-3%',
          zIndex: 2,
          transform: "translate(-50%)",
          height:"30vh",
          width: "30vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani9_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-lu' : ''}`}
        style={{
          left: '35%',
          top: '17%',
          zIndex: 2,
          transform: "translate(-50%, -50%)",
          height:"50vh",
          width: "50vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani8_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority

        />
      </div>

      <div
        className={`absolute ${isAnimating ? 'animate-ld' : ''}`}
        style={{
          left: '30%',
          bottom: '5%',
          zIndex: 2,
          transform: "translate(-50%, 50%)",
          height:"70vh",
          width: "70vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani3_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(-45deg)"
          }}
        />
      </div>

      <div
        className={`absolute ${isAnimating ? 'animate-ru' : ''}`}
        style={{
          left: '50%',
          top: '8%',
          zIndex: 1,
          transform: "translate(-50%, -50%)",
          height:"80vh",
          width: "80vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani4_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(-45deg)"
          }}
        />
      </div>

      <div
        className={`absolute ${isAnimating ? 'animate-lu' : ''}`}
        style={{
          left: '35%',
          top: '52%',
          zIndex: 1,
          transform: "translate(-50%, -50%)",
          height:"60vh",
          width: "60vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani5_X2.png'
          alt="Paca Main Visual"
         fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(-180deg)"
          }}
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-ld' : ''}`}
        style={{
          left: '45%',
          bottom: '15%',
          zIndex: 2,
          transform: "translate(-50%, 50%)",
          height:"70vh",
          width: "70vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani5_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(-15deg)"
          }}
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-rd' : ''}`}
        style={{
          left: '55%',
          bottom: '15%',
          zIndex: 3,
          transform: "translate(-50%, 50%)",
          height:"70vh",
          width: "70vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani8_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(-15deg)"
          }}
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-rd' : ''}`}
        style={{
          left: '50%',
          top: '50%',
          zIndex: 3,
          transform: "translate(-50%, -50%)",
          height:"50vh",
          width: "50vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani4_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(-15deg)"
          }}
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-ru' : ''}`}
        style={{
          left: '60%',
          top: '5%',
          zIndex: 2,
          transform: "translate(-50%, -50%)",
          height:"70vh",
          width: "70vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani2_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(50deg)"
          }}
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-ru' : ''}`}
        style={{
          left: '60%',
          top: '30%',
          zIndex: 2,
          transform: "translate(-50%, -50%)",
          height:"70vh",
          width: "70vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani6_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(50deg)"
          }}
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-rd' : ''}`}
        style={{
          left: '63%',
          top: '75%',
          zIndex: 5,
          transform: "translate(-50%, -50%)",
          height:"70vh",
          width: "70vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani4_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(110deg)"
          }}
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-ru' : ''}`}
        style={{
          left: '65%',
          top: '30%',
          zIndex: 5,
          transform: "translate(-50%, -50%)",
          height:"70vh",
          width: "70vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani3_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-rd' : ''}`}
        style={{
          left: '75%',
          top: '90%',
          zIndex: 5,
          transform: "translate(-50%, -50%)",
          height:"70vh",
          width: "70vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani6_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(50deg)"
          }}
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-ru' : ''}`}
        style={{
          left: '80%',
          top: '5%',
          zIndex: 4,
          transform: "translate(-50%, -50%)",
          height:"50vh",
          width: "50vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani6_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(90deg)"
          }}
        />
      </div>


      <div
        className={`absolute ${isAnimating ? 'animate-ru' : ''}`}
        style={{
          right: '10%',
          top: '20%',
          zIndex: 3,
          transform: "translate(50%, -50%)",
          height:"80vh",
          width: "80vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani4_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(90deg)"
          }}
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-rd' : ''}`}
        style={{
          right: '10%',
          bottom: '15%',
          zIndex: 5,
          transform: "translate(50%, 50%)",
          height:"80vh",
          width: "80vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani2_X2.png'
          alt="Paca Main Visual"
         fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(-45deg)"
          }}
        />
      </div>

      <div
        className={`absolute ${isAnimating ? 'animate-rd' : ''}`}
        style={{
          right: '15%',
          bottom: '50%',
          zIndex: 2,
          transform: "translate(50%, 50%)",
          height:"70vh",
          width: "70vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani5_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(-45deg)"
          }}
        />
      </div>


      <div
        className={`absolute ${isAnimating ? 'animate-ru' : ''}`}
        style={{
          right: '10%',
          bottom: '40%',
          zIndex: 2,
          transform: "translate(50%, 50%)",
          height:"70vh",
          width: "70vw",
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani3_X2.png'
          alt="Paca Main Visual"
          fill
          className="object-contain"
          priority
          style={{
            transform: "rotate(-45deg)"
          }}
        />
      </div>
    </div>
  );
};

export default MainVisualAnimation;
