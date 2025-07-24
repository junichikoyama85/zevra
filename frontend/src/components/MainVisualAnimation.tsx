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
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani6_X2.png'
          alt="Paca Main Visual"
          width={400}
          height={400}
          className="object-contain"
          priority
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
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani3_X2.png'
          alt="Paca Main Visual"
          width={500}
          height={500}
          className="object-contain"
          priority/>
      </div>
    
      <div
        className={`absolute ${isAnimating ? 'animate-ld' : ''}`}
        style={{
          left: '-5%',
          bottom: '-10%',
          zIndex: 2,
        //   transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani5_X2.png'
          alt="Paca Main Visual"
          width={360}
          height={360}
          className="object-contain"
          priority
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-lu' : ''}`}
        style={{
          left: '10%',
          top: '0',
          zIndex: 0,
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani5_X2.png'
          alt="Paca Main Visual"
          width={440}
          height={440}
          className="object-contain"
          priority
        />
      </div>

      <div
        className={`absolute ${isAnimating ? 'animate-lu' : ''}`}
        style={{
          left: '20%',
          top: '50%',
          zIndex: 0,
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani4_X2.png'
          alt="Paca Main Visual"
          width={440}
          height={440}
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
          transform: "translate(-50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani9_X2.png'
          alt="Paca Main Visual"
          width={220}
          height={220}
          className="object-contain"
          priority
        //   style={{
        //     transform: "rotate(-70deg)"
        //   }}
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-lu' : ''}`}
        style={{
          left: '13%',
          top: '17%',
          zIndex: 2,
          transform: "translate(0%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani8_X2.png'
          alt="Paca Main Visual"
          width={450}
          height={450}
          className="object-contain"
          priority
        //   style={{
        //     transform: "rotate(-70deg)"
        //   }}
        />
      </div>

      <div
        className={`absolute ${isAnimating ? 'animate-ld' : ''}`}
        style={{
          left: '37%',
          bottom: '0%',
          zIndex: 2,
          transform: "translate(-50%, 50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani3_X2.png'
          alt="Paca Main Visual"
          width={600}
          height={600}
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
          top: '0%',
          zIndex: 1,
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani4_X2.png'
          alt="Paca Main Visual"
          width={600}
          height={600}
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
          left: '37%',
          top: '45%',
          zIndex: 1,
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani5_X2.png'
          alt="Paca Main Visual"
          width={350}
          height={350}
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
          transform: "translate(-50%, 50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani5_X2.png'
          alt="Paca Main Visual"
          width={450}
          height={450}
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
          transform: "translate(-50%, 50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani8_X2.png'
          alt="Paca Main Visual"
          width={450}
          height={450}
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
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani4_X2.png'
          alt="Paca Main Visual"
          width={450}
          height={450}
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
          left: '65%',
          top: '0%',
          zIndex: 2,
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani2_X2.png'
          alt="Paca Main Visual"
          width={300}
          height={300}
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
          left: '63%',
          top: '25%',
          zIndex: 1,
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani6_X2.png'
          alt="Paca Main Visual"
          width={300}
          height={300}
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
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani4_X2.png'
          alt="Paca Main Visual"
          width={400}
          height={400}
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
          left: '67%',
          top: '30%',
          zIndex: 5,
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani3_X2.png'
          alt="Paca Main Visual"
          width={400}
          height={400}
          className="object-contain"
          priority
        //   style={{
        //     transform: "rotate(110deg)"
        //   }}
        />
      </div>

      <div
        className={`absolute  ${isAnimating ? 'animate-rd' : ''}`}
        style={{
          left: '75%',
          top: '90%',
          zIndex: 5,
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani6_X2.png'
          alt="Paca Main Visual"
          width={400}
          height={400}
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
          transform: "translate(-50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani6_X2.png'
          alt="Paca Main Visual"
          width={250}
          height={250}
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
          right: '15%',
          top: '20%',
          zIndex: 3,
          transform: "translate(50%, -50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani4_X2.png'
          alt="Paca Main Visual"
          width={500}
          height={500}
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
          bottom: '10%',
          zIndex: 5,
          transform: "translate(50%, 50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani2_X2.png'
          alt="Paca Main Visual"
          width={500}
          height={500}
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
          right: '10%',
          bottom: '50%',
          zIndex: 2,
          transform: "translate(50%, 50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani5_X2.png'
          alt="Paca Main Visual"
          width={500}
          height={500}
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
          right: '7%',
          bottom: '50%',
          zIndex: 2,
          transform: "translate(50%, 50%)"
        }}
      >
        <Image
          src='/images/main_animation/pc/pc_ani3_X2.png'
          alt="Paca Main Visual"
          width={500}
          height={500}
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
