import { useState, useEffect } from "react";
import { generateRandomTimestamp, calculateCountdown } from "../utils/countDown";

export default function CountDown() {

    const [timeStamp] = useState(generateRandomTimestamp())
    const [countDown, setCountdown] = useState(calculateCountdown())

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCountdown(calculateCountdown(timeStamp));
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, [timeStamp]);

    return <p className={!countDown ? "section_header_timestamp" : "waktu_habis"}>{countDown}</p>
}