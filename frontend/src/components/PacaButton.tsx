import React from "react";
import Link from "next/link";
import Image from "next/image";

type PacaButtonProps = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  href?: string; // 画面遷移先
  backgroundColor?: string; // ボタンの背景色
  // 横幅は常に親要素に合わせるため、width系のpropsは不要
};

const PacaButton: React.FC<PacaButtonProps> = ({
  label = "Paca! ボタン",
  onClick,
  disabled = false,
  className = "",
  href = "/top", // デフォルト遷移先
  backgroundColor = "", // デフォルト背景色
}) => {
  return (
    <div className={`mt-15 w-[90%] mx-auto flex justify-center items-center ${className}`} >
      <Link href={href} className="relative inline-block w-full max-w-[650px]" >
        <div
          className="relative w-full flex justify-center items-center shadow rounded-xl"
        >
          <button
            className="text-white font-['Poppins-SemiBold'] w-full h-full relative z-10 flex justify-center items-center"
            style={{
              backgroundColor: backgroundColor,
              fontSize: "22pt",
              width: "100%",
              height: "100px",
              cursor: disabled ? "not-allowed" : "pointer",
              opacity: disabled ? 0.6 : 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius:"10px"
            }}
            onClick={onClick}
            disabled={disabled}
            type="button"
          >
            {label}
          </button>
          <Image
            src="/images/arrow.png"
            alt="arrow"
            width={50}
            height={50}
            className="z-20"
            style={{
              position: "absolute",
              right: "0px",
              bottom: "0px",
              borderBottomRightRadius: "10px", // 右下のみ丸く
            }}
            priority
          />
        </div>
      </Link>
    </div>
  );
};

export default PacaButton;
