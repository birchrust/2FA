import React from "react";
import { motion } from "framer-motion";
import { useTotp } from "~/hooks/useTotp";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface CardProps {
  time: number;
  issuer: string;
  secret: string;
  children?: React.ReactNode;
}

export function Card(props: CardProps) {
  const { time, issuer, secret, children } = props;
  const data = {
    id: issuer,
    issuer: issuer,
    label: "AzureDiamond",
    algorithm: "SHA1",
    secret: secret,
    digits: 6,
    period: 30,
  };
  const token = useTotp(data);

  return (
    <motion.li className="group relative flex h-40 w-40 flex-col items-center justify-center space-y-1 rounded-md border px-3 pt-4 shadow-md duration-500">
      <CountdownCircleTimer
        isPlaying
        size={105}
        duration={30}
        initialRemainingTime={time}
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => {
          return { shouldRepeat: true, delay: 0.1 };
        }}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      />
      <div className=" absolute left-1/2 top-1/3 -translate-x-1/2 translate-y-1 text-xl font-semibold leading-6 text-gray-900">
        {token}
      </div>
      <span className="flex h-8 w-28 items-center justify-center truncate px-4">
        {children}
      </span>
    </motion.li>
  );
}
