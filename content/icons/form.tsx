import * as React from "react"

const FormIcon = ({ props }: any) => (
    <svg
        width={25}
        height={25}
        style={{marginLeft: '10px'}}
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <title>{"form-line"}</title>
        <path
            d="M21 12H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM8 10h12V7.94H8Z"
            className="clr-i-outline clr-i-outline-path-1"
        />
        <path
            d="M21 14.08H7a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1h11.36L22 16.3v-1.22a1 1 0 0 0-1-1ZM20 18H8v-2h12Z"
            className="clr-i-outline clr-i-outline-path-2"
        />
        <path
            d="M11.06 31.51v-.06l.32-1.39H4V4h20v10.25l2-1.89V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h8a3.44 3.44 0 0 1 .06-.49Z"
            className="clr-i-outline clr-i-outline-path-3"
        />
        <path
            d="m22 19.17-.78.79a1 1 0 0 0 .78-.79Z"
            className="clr-i-outline clr-i-outline-path-4"
        />
        <path
            d="M6 26.94a1 1 0 0 0 1 1h4.84l.3-1.3.13-.55v-.05H8V24h6.34l2-2H7a1 1 0 0 0-1 1Z"
            className="clr-i-outline clr-i-outline-path-5"
        />
        <path
            d="m33.49 16.67-3.37-3.37a1.61 1.61 0 0 0-2.28 0L14.13 27.09 13 31.9a1.61 1.61 0 0 0 1.26 1.9 1.55 1.55 0 0 0 .31 0 1.15 1.15 0 0 0 .37 0l4.85-1.07L33.49 19a1.6 1.6 0 0 0 0-2.27ZM18.77 30.91l-3.66.81.89-3.63L26.28 17.7l2.82 2.82Zm11.46-11.52-2.82-2.82L29 15l2.84 2.84Z"
            className="clr-i-outline clr-i-outline-path-6"
        />
        <path fill="none" d="M0 0h36v36H0z" />
    </svg>
)

export default FormIcon
