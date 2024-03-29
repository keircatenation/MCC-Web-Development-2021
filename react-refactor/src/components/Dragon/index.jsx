import { useState } from "react";

export default function Dragon(props) {
    const { fill1, fill2, fill3, key, name } = props;
    const [clicks, setClicks] = useState(0);
    return (
        <button onClick={() => setClicks(prev => prev+1)} className='dragon'>
            <p>{name} | clicks: {clicks}</p>
            <svg key={key} version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 74 68.44" xmlSpace="preserve">
                <path fill={fill2} d="M40.02,1.78c0,0-13.48,0.3-16,1.93s-0.3,2.37-5.93,2.37s-7.7,0-9.63,2.07s-1.78,2.07-1.78,8.59s0.3,8.3,1.78,9.48
                    c1.48,1.19,2.07,1.78,0,4.15s-3.85,6.22-3.85,10.81s1.19,9.04,2.96,11.56c1.78,2.52,2.52,1.93,0.15,5.19s-6.81,9.04-6.81,9.04h28.44
                    c12.34-0.15,27.75,0.08,32.15-3.11c6.02-4.37,8.74-8.15,10.37-15.56c1.63-7.41,1.48-18.37-8.59-22.22s-17.33-1.19-17.33-1.19
                    s1.33-7.85,0.89-16.44h-6.81V1.78z"/>
                <path fill={fill3} d="M10.89,16.13c0,1.48,1.39,2.59,1.39,2.59v-1.3c0,0,0.28,1.41,1.44,2.19l0.22-1.44c0,0,0.56,1.06,2.28,1.44
                    v-3.48H10.89z"/>
                <path fill={fill3} d="M34.11,12.11h8.67c0,0,0.22,2.11-0.28,3.22s-2.06,3.28-3.11,3.56h3.44c0,0,0.05,3.61,0,4.67
                    c-0.05,1.06-5.88,9.15-10.05,9.88l-0.56-2.17l1.89-5.49l-3.56-7.33L30.83,15L34.11,12.11z"/>
                <path fill={fill3} d="M36.7,38.31c0.85-3.14,4.85-8.14,8.46-9.42c3.61-1.28,8.5-1.33,8.5-1.33v3.71c0,0,1.5-1.54,5.5-1.54
                    s5.94,2,7,2.94c1.06,0.94,2.28,3.22,2.28,8.61s-1.07,7.28-3.06,9.33c-1.99,2.06-3.22-6.72-3.22-6.72l-12-6.56l-10.83,1.91
                    L36.7,38.31z"/>
                <path fill={fill1} d="M14,52c0.96,0.81,2.52,2.52,1.63,3.48c-0.89,0.96-3.74,3.11-4.98,5.26h12.46c0,0,0.3-1.63,2.59-3.33
                    c2.3-1.7,5.61-3.08,7.07-3.68c1.46-0.6,0-5.58,0-5.58l-14.41-0.52L14,52z"/>
                <path fill={fill3} d="M23.56,21.78c-0.44,3.78-3.89,6.67-9,8.56C9.44,32.22,6.78,40.22,10,47.44s7.22,8.11,10.11,8.67
                    C23,56.67,33.78,54,35.33,52.44c1.56-1.56,0-7,0-7l-13.02,1.78L18,41.78l5.56-6.67c0,0,9.56-5.56,9.78-6
                    c0.22-0.44-2.56-7.33-2.56-7.33H23.56z"/>
                <path fill={fill1} d="M58.22,36c-10.44-5.22-21.56,2.33-24.78,4.22c-3.22,1.89-11.44,7.44-11.89,4c-0.44-3.44,2-5.89,7.89-8.67
                    c5.89-2.78,6.89-6.78,6.56-12.22s-2.56-6.56-3.78-7.67c2.44-1.11,3.33-2.89,3.44-5.33c0,0-17,0-18,1s-3.11,1-3.11,0
                    s-4.22-1.67-3.89,2.44c0,2.33,0.11,2.89,1.33,2.89s4.89-0.33,6.22,1.44c1.33,1.78,2.11,3.22-0.11,3.22s-7.46,0-7.46,0
                    s0.13,2.89,3.69,2.89s15.22,0,15.22,0s-0.22,4.76-4.56,7.04c-4.33,2.29-11.78,3.96-10.22,12.18s9.56,7.78,17,7.89
                    c0,0,1.11,3.22-2.78,6c-3.89,2.78-4.56,5.22-4.56,5.22h11.78c0,0,3.67-3.44,4-4.56c0.33-1.11-1.78-8.44,0-9.44s4.67-3.56,9.22-3.44
                    c0,0-1.11,2.56-3.89,4.44c-2.78,1.89-4.11,4.67-4.11,4.67l11.78,0.11c0,0,0-1.67,1.33-3c0,2.67-0.22,5.44-3.89,6.22
                    c-3.67,0.78-6.22,0.67-9.78,5c0,0,14.56,2.11,20.11-3.22S68.67,41.22,58.22,36z M22.78,15.78c0,0.89-0.72,1.61-1.61,1.61
                    c-0.89,0-1.61-0.72-1.61-1.61v-1.56c0-0.89,0.72-1.61,1.61-1.61c0.89,0,1.61,0.72,1.61,1.61V15.78z"/>
                <path fill={fill3} d="M18.52,57.17v3.57h-3.33c0,0,0.89-1.46,1.33-2.07S18.52,57.17,18.52,57.17z"/>
                <path fill={fill3} d="M23.06,57.17v3.57h-3.33c0,0,0.89-1.46,1.33-2.07S23.06,57.17,23.06,57.17z"/>
                <path fill={fill3} d="M13.98,57.17v3.57h-3.33c0,0,0.89-1.46,1.33-2.07C12.43,58.06,13.98,57.17,13.98,57.17z"/>
                <path fill={fill3} d="M31.9,58.95v3.57h-3.33c0,0,0.89-1.46,1.33-2.07S31.9,58.95,31.9,58.95z"/>
                <path fill={fill3} d="M36.11,58.95v3.57h-3.33c0,0,0.89-1.46,1.33-2.07C34.56,59.84,36.11,58.95,36.11,58.95z"/>
                <path fill={fill3} d="M27.7,58.95v3.57h-3.33c0,0,0.89-1.46,1.33-2.07C26.14,59.84,27.7,58.95,27.7,58.95z"/>
                <path fill={fill3} d="M49,50.61v3.57h-3.33c0,0,0.89-1.46,1.33-2.07S49,50.61,49,50.61z"/>
                <path fill={fill3} d="M53.21,50.61v3.57h-3.33c0,0,0.89-1.46,1.33-2.07C51.65,51.5,53.21,50.61,53.21,50.61z"/>
                <path fill={fill3} d="M44.79,50.61v3.57h-3.33c0,0,0.89-1.46,1.33-2.07C43.24,51.5,44.79,50.61,44.79,50.61z"/>
                <path fill={fill3} d="M23.94,13.61c0,0-0.44-4.06,1.78-5.78S30,5.94,32.78,5.94s3.78,0.22,2.83,1.5c-0.94,1.28-2,1.5-4.11,1.61
                c-2.11,0.11-2.72,0.78-2.56,2.11S28.61,13.61,23.94,13.61z"/>
            </svg>
        </button>
    )

}