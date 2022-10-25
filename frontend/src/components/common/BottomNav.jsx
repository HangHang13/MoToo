import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./BottomNav.module.css";

const BottomNav = () => {
  const [ activeNav, setActiveNav ] = useState(1);
  return (
    <nav className={classes.wrapper}>
      <div>
        <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
          <svg
            width="30"
            height="26"
            viewBox="0 0 25 22"
            xmlns="http://www.w3.org/2000/svg"
            className={activeNav === 1 ? classes.active : classes.navItem}
          >
            <path
              d="M10.8598 0.567397C11.2867 0.201266 11.8306 0 12.393 0C12.9554 0 13.4992 0.201266 13.9261 0.567397L21.3871 6.9615L24.3157 9.30482C24.4365 9.40147 24.537 9.52096 24.6116 9.65647C24.6862 9.79198 24.7334 9.94086 24.7504 10.0946C24.7675 10.2483 24.7541 10.4039 24.711 10.5525C24.6679 10.7011 24.596 10.8397 24.4994 10.9605C24.4027 11.0812 24.2832 11.1818 24.1477 11.2564C24.0122 11.331 23.8633 11.3781 23.7096 11.3952C23.5559 11.4123 23.4003 11.3989 23.2517 11.3558C23.1031 11.3127 22.9645 11.2408 22.8437 11.1442L21.8134 10.3199V19.6449C21.8134 20.2695 21.5653 20.8685 21.1236 21.3102C20.6819 21.7519 20.0829 22 19.4583 22H14.7481V16.1122C14.7481 15.4876 14.5 14.8886 14.0583 14.4469C13.6166 14.0053 13.0176 13.7571 12.393 13.7571C11.7684 13.7571 11.1693 14.0053 10.7277 14.4469C10.286 14.8886 10.0379 15.4876 10.0379 16.1122V22H5.32767C4.70306 22 4.10403 21.7519 3.66236 21.3102C3.2207 20.8685 2.97257 20.2695 2.97257 19.6449V10.3187L1.94221 11.143C1.82226 11.2454 1.68295 11.3227 1.53256 11.3702C1.38217 11.4178 1.22375 11.4347 1.06672 11.4198C0.909685 11.405 0.757236 11.3587 0.618418 11.2838C0.4796 11.2089 0.357244 11.1069 0.258613 10.9838C0.159982 10.8607 0.0870855 10.7191 0.0442512 10.5673C0.00141692 10.4155 -0.0104822 10.2566 0.00925995 10.1001C0.0290021 9.94361 0.0799832 9.79268 0.159177 9.65626C0.238371 9.51985 0.344164 9.40074 0.470275 9.306L3.39884 6.96268L10.8598 0.567397Z"
            />
          </svg>
        </Link>
      </div>
      <div>
        <Link to="/stock" className="nav-link" onClick={() => setActiveNav(2)}>
          <svg
            width="30"
            height="26"
            viewBox="0 0 26 22"
            xmlns="http://www.w3.org/2000/svg"
            className={activeNav === 2 ? classes.active : classes.navItem}
          >
            <path
              d="M25.9999 0V5.99999L24 4.00004L15.2783 12.2145L10.7216 7.35674L8.30923 14.9132L6.16489 12.7542L0.999977 18V2.99999H18V5.99999L21.9999 2.00002L19.9999 0H25.9999ZM0 22L6.16489 15.4529L8.84531 18.1516L11.2577 10.5952L15.2783 14.9132L19.9999 10V22H0Z"
              fill="#"
            />
          </svg>
        </Link>
      </div>
      <div>
        <Link to="/wallet" className="nav-link" onClick={() => setActiveNav(3)}>
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            xmlns="http://www.w3.org/2000/svg"
            className={activeNav === 3 ? classes.active : classes.navItem}
          >
            <path
              d="M19.572 5.22404H2.097V4.52504L17.475 3.2948V4.52504H19.572V2.42804C19.572 0.890248 18.3263 -0.189005 16.8053 0.0276841L2.76803 2.03241C1.24562 2.2505 0 3.68624 0 5.22404V19.204C0 19.9456 0.294577 20.6567 0.818927 21.1811C1.34328 21.7054 2.05445 22 2.79599 22H19.572C20.3135 22 21.0247 21.7054 21.549 21.1811C22.0734 20.6567 22.3679 19.9456 22.3679 19.204V8.02003C22.3679 7.27849 22.0734 6.56732 21.549 6.04297C21.0247 5.51861 20.3135 5.22404 19.572 5.22404ZM17.475 15.0184C17.1995 15.0183 16.9267 14.964 16.6723 14.8585C16.4178 14.753 16.1866 14.5984 15.9919 14.4035C15.7971 14.2087 15.6427 13.9774 15.5374 13.7228C15.432 13.4683 15.3779 13.1955 15.378 12.92C15.3781 12.6445 15.4324 12.3718 15.5379 12.1173C15.6434 11.8628 15.798 11.6316 15.9929 11.4369C16.1877 11.2422 16.419 11.0878 16.6736 10.9824C16.9281 10.8771 17.2009 10.8229 17.4764 10.823C18.0327 10.8232 18.5662 11.0444 18.9594 11.4379C19.3527 11.8314 19.5735 12.3651 19.5734 12.9214C19.5732 13.4778 19.352 14.0112 18.9585 14.4045C18.5649 14.7978 18.0313 15.0186 17.475 15.0184Z"
            />
          </svg>
        </Link>
      </div>
      <div>
        <Link to="/school" className="nav-link" onClick={() => setActiveNav(4)}>
          <svg
            width="28"
            height="22"
            viewBox="0 0 28 22"
            xmlns="http://www.w3.org/2000/svg"
            className={activeNav === 4 ? classes.active : classes.navItem}
          >
            <path
              d="M0 9.625V21.3125C0 21.6923 0.307656 22 0.6875 22H4.125V8.25H1.375C0.615742 8.25 0 8.86575 0 9.625ZM15.4687 7.5625H14.4375V5.84375C14.4375 5.65383 14.2837 5.5 14.0937 5.5H13.4062C13.2163 5.5 13.0625 5.65383 13.0625 5.84375V8.59375C13.0625 8.78368 13.2163 8.9375 13.4062 8.9375H15.4687C15.6587 8.9375 15.8125 8.78368 15.8125 8.59375V7.90625C15.8125 7.71633 15.6587 7.5625 15.4687 7.5625ZM21.3877 4.81422L14.5127 0.230746C14.2868 0.0802829 14.0214 0 13.75 0C13.4786 0 13.2132 0.0802829 12.9873 0.230746L6.1123 4.81422C5.92399 4.93977 5.76958 5.10985 5.66277 5.30938C5.55596 5.50892 5.50005 5.73173 5.5 5.95805V22H11V15.8125C11 15.4327 11.3077 15.125 11.6875 15.125H15.8125C16.1923 15.125 16.5 15.4327 16.5 15.8125V22H22V5.95848C22 5.49871 21.7701 5.06903 21.3877 4.81422ZM13.75 11C11.8516 11 10.3125 9.46086 10.3125 7.5625C10.3125 5.66414 11.8516 4.125 13.75 4.125C15.6484 4.125 17.1875 5.66414 17.1875 7.5625C17.1875 9.46086 15.6484 11 13.75 11ZM26.125 8.25H23.375V22H26.8125C27.1923 22 27.5 21.6923 27.5 21.3125V9.625C27.5 8.86575 26.8843 8.25 26.125 8.25Z"
            />
          </svg>
        </Link>
      </div>
      <div>
        <Link to="/menu" className="nav-link" onClick={() => setActiveNav(5)}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            className={activeNav === 5 ? classes.active : classes.navItem}
          >
            <path
              d="M1.57143 0H20.4286C20.8453 0 21.245 0.231785 21.5397 0.644365C21.8344 1.05694 22 1.61652 22 2.2C22 2.78348 21.8344 3.34305 21.5397 3.75563C21.245 4.16821 20.8453 4.4 20.4286 4.4H1.57143C1.15466 4.4 0.754961 4.16821 0.460261 3.75563C0.165561 3.34305 0 2.78348 0 2.2C0 1.61652 0.165561 1.05694 0.460261 0.644365C0.754961 0.231785 1.15466 0 1.57143 0ZM1.57143 8.8H20.4286C20.8453 8.8 21.245 9.03179 21.5397 9.44437C21.8344 9.85695 22 10.4165 22 11C22 11.5835 21.8344 12.1431 21.5397 12.5556C21.245 12.9682 20.8453 13.2 20.4286 13.2H1.57143C1.15466 13.2 0.754961 12.9682 0.460261 12.5556C0.165561 12.1431 0 11.5835 0 11C0 10.4165 0.165561 9.85695 0.460261 9.44437C0.754961 9.03179 1.15466 8.8 1.57143 8.8ZM1.57143 17.6H20.4286C20.8453 17.6 21.245 17.8318 21.5397 18.2444C21.8344 18.6569 22 19.2165 22 19.8C22 20.3835 21.8344 20.9431 21.5397 21.3556C21.245 21.7682 20.8453 22 20.4286 22H1.57143C1.15466 22 0.754961 21.7682 0.460261 21.3556C0.165561 20.9431 0 20.3835 0 19.8C0 19.2165 0.165561 18.6569 0.460261 18.2444C0.754961 17.8318 1.15466 17.6 1.57143 17.6Z"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default BottomNav;
